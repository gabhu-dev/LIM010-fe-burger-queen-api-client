import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TakeOrders from '../../../components/products/TakeOrders'
import { render, fireEvent, waitForElement, act } from '@testing-library/react';

const url = '/'
it('Name', async () => {
  const { getByTestId, queryByTestId, getByPlaceholderText } = render(<BrowserRouter ><TakeOrders url={url}/></BrowserRouter >);
  expect(queryByTestId(name)).toBe(null);

  const clientName = await waitForElement(()=>
  getByPlaceholderText('Nombre del cliente')
  )
  expect(getByTestId('name').value).toBe('');
  act(() => {
    fireEvent.change(getByTestId('name'), { target: { value: 'Gaby' } });
  })
  expect(getByTestId('name').value).toBe('Gaby');

  act(() => {
    fireEvent.click(getByTestId('submit'))
  })
  const editName = await waitForElement(() => getByTestId('changeName'))

  expect(editName.textContent).toBe('Gaby');

  act(() => {
    fireEvent.click(getByTestId('edit'))
  })
  await waitForElement(() => getByTestId('name'))
  expect(getByTestId('name').value).toBe('Gaby');
})