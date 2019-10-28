import React from 'react'

const Lista = ({ item, remove, increase, decrease }) => {

  return (
    <tr data-testid={`list-${item._id}`} className='d-flex width-100 text-align border-bottom my-2'>
      <td className="d-flex col-4 text-align-left">
        <button data-testid='deleteItem' onClick={() => {
          remove(item._id)
        }} className='border-none transparent padding-trash'><i className="fas fa-trash-alt text-gray"></i></button>
        <p data-testid={`list-${item.name}`} className='my-0 text-gray'>{item.name}</p>
      </td>
      <td className='d-flex col-4 justify-content-center align-items-center'>
        <button data-testid='takeQty' onClick={() => decrease(item._id)} className='border-none transparent'><i className="fas fa-minus-circle blue-color"></i></button>
        <span data-testid='qty' className='text-gray' >{item.qty}</span>
        <button data-testid='addQty' onClick={() => increase(item._id)} className='border-none transparent'><i className="fas fa-plus-circle blue-color"></i></button>
      </td>
      <td className="col-4">
        <p className='my-0 text-gray'>S/. {item.total}</p>
      </td>
    </tr>)
}

export default Lista;
