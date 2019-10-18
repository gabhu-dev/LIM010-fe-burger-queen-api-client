import React from 'react';
import { render, fireEvent, waitForElement, act } from '@testing-library/react'
import Login from '../../../components/login/Login';
import { renderWithRouter, history } from '../../utils';
const fetchMock = require( 'fetch-mock' );

test('it should check the empty input', async () => {
  const url = '/'
  const { getByTestId, queryByTestId } = render(<Login url={url} />)

  expect(queryByTestId('mensajeError')).toBe(null);

  fireEvent.click(getByTestId('botonSubmit'))

  const mensajeError = await waitForElement(() =>
    getByTestId('mensajeError')
  )
  expect(mensajeError.textContent).toBe('Ingresa Email y Contraseña')
})

it("router validation", async (done) => {
  fetchMock
    .post('http://localhost:5000/auth', { status: 200, body: { token: 'ok' } });
    const { getByTestId } = renderWithRouter(<Login />);
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

// const submitBtn = await getByTestId('botonSubmit');
// act(() => {
//   fireEvent.submit(submitBtn)
// })