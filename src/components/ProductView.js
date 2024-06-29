import React from 'react';

const ProductView = ({ value, index, onDelete }) => {
  if (!value) return null;

  return (
    <tr>
      <td>{value.name}</td>
      <td>{value.quantity}</td>
      <td>{value.unitPrice.toFixed(2)}</td>
      <td>
        <input
          type="number"
                    name="quantity"
          className="form-control w-30"
          disabled
          readOnly
          style={{ width: '30%' }}
        />
      </td>
      <td>
        <div className='d-flex justify-content-between'>
        <p>{value.netAmount.toFixed(2)}</p>
        <i className="bi bi-trash text-danger" style={{ cursor: "pointer" }} onClick={onDelete}></i></div>
      </td>
    </tr>
  );
};


export default ProductView;
