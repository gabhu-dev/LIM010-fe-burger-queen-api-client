import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import Login from '../../components/login/Login.js';

// un test es que este vacio
// el otro es que este lleno 0y acepte -> mensaje de error nulo
// componentes ->
// que esten vacios los inputs -> saldra error
// que esten llenos y pasa a la siguiente pantalla

test('validate email and password',async()=>{
  const url = '/';
  const { getByTestId, queryByTesId} = render(<Login url ={url} />)

  // antes de comenzar -> error sin nada
  expect(queryByTesId('errorMessage')).toBe(null);
  //hace click en el boton
  fireEvent.click(getByTestId('botonSubmit'))
  // despues de haber puesto en el input
  const errorMessage = await waitForElement(()=>
  getByTestId('errorMessage')
  )
  expect(errorMessage.textContent).toBe('Ingresar E')
})