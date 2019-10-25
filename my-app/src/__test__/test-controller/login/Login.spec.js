import React from 'react';
import { render, fireEvent, waitForElement, act } from '@testing-library/react'
import Login from '../../../components/login/Login';
import { history } from '../../utils';
import getToken from '../../../controller/login-controller/Token';
const fetchMock = require( 'fetch-mock' );
 
const url = '/'
test('it should check the empty input - route', async () => {
 const { getByTestId, queryByTestId } = render(<Login url={url} />)
  
  expect(queryByTestId('mensajeError')).toBe(null);

  fireEvent.click(getByTestId('botonSubmit'))

  const mensajeError = await waitForElement(() =>
    getByTestId('mensajeError')
  )
  expect(mensajeError.textContent).toBe('Ingresa Email y Contraseña')
  expect(history.location.pathname).toBe('/')
})
it("value input", (done) => {
  const { getByTestId } = render(<Login url={url} />);
  expect(getByTestId('email').value).toBe('')
  expect(getByTestId('password').value).toBe('');
  act(() => {
    fireEvent.change(getByTestId('email'), { target: { value: 'admin@burgerqueen.com' } })
    fireEvent.change(getByTestId('password'), { target: { value: '12345678' } })
  })
  expect(getByTestId('email').value).toBe('admin@burgerqueen.com');
  expect(getByTestId('password').value).toBe('12345678');
  done();
});
afterEach(() => {
  fetchMock.reset();
})

it("Funtion getToken", async (done) => {
  fetchMock
    .post('http://localhost:5000/auth', { status: 200, body: { token: 'ok' } });
    const { getByTestId } = render(<Login url={url} />);
    act(() => {
      fireEvent.change(getByTestId('email'), { target: { value: 'admin@burgerqueen.com' } })
      fireEvent.change(getByTestId('password'), { target: { value: '12345678' } })
    })
    expect(getByTestId('email').value).toBe('admin@burgerqueen.com');
    expect(getByTestId('password').value).toBe('12345678');
    act(() => {
      fireEvent.click(getByTestId('botonSubmit'))
    })
    getToken(getByTestId('email').value, getByTestId('password').value)
      .then(() => {
        expect(history.location.pathname).toBe('/');
        done();
      })
  });
  
it("Funtion getToken error message", async (done) => {
  fetchMock
    .post('http://localhost:5000/auth', 400);
    const { getByTestId } = render(<Login url={url} />);
    act(() => {
      fireEvent.change(getByTestId('email'), { target: { value: 'admin@burgerqueen.com' } })
      fireEvent.change(getByTestId('password'), { target: { value: '12345678' } })
    })

    act(() => {
      fireEvent.click(getByTestId('botonSubmit'))
    })
    const mensajeError = await waitForElement(() =>
      getByTestId('mensajeError')
    )
    getToken(getByTestId('email').value, getByTestId('password').value)
      .catch(() => {
        expect(mensajeError.textContent).toBe('Ingrese su usuario y/o contraseña');
        done();
      })
  });
  // ya finalizado