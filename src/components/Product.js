import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ProductView from '../components/ProductView';
import Total from './Total';

const Product = () => {
  const [products, setProducts] = useState([]);
   const formik = useFormik({
    initialValues: {
      name: '',
      quantity: '',
      unitPrice: '',
    },
    validationSchema: yup.object({
      name: yup.string()
        .required('Name is Required')
        .trim()
        .matches(/^[A-Za-z0-9 ]+$/, 'Only letters, numbers, and spaces are allowed')
        .min(3, 'Minimum 3 Characters Required'),
      quantity: yup.number()
        .required('Quantity is Required')
        .max(1000, 'Too big')
        .min(1, 'Not negative number'),
      unitPrice: yup.number()
        .required('Unit Price is Required')
        .min(0.01, 'Must be at least 0.01'),
    }),
    onSubmit: (values) => {
      const newProduct = {
        name: values.name ,
        quantity: Math.floor(values.quantity),
        unitPrice: parseFloat(values.unitPrice),
        get netAmount() {
          return this.quantity * this.unitPrice;
        },
      };
      setProducts([...products, newProduct]); //Add a new product to array push
      formik.resetForm({ values: { name: '', quantity: '', unitPrice: '' } });
    },
  });

  const calculateNetAmount = () => {
    return products.reduce((total, product) => total + product.netAmount, 0);
  };

  const netAmount = calculateNetAmount();

  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-4 col-md-3">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p style={{ color: 'red' }}>{formik.errors.name}</p>
            ) : null}
          </div>
          <div className="col-lg-2 col-md-3">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.quantity}
            />
            {formik.touched.quantity && formik.errors.quantity ? (
              <p style={{ color: 'red' }}>{formik.errors.quantity}</p>
            ) : null}
          </div>
          <div className="col-lg-2 col-md-3">
            <label>Unit Price</label>
            <input
              type="number"
              name="unitPrice"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.unitPrice}
            />
            {formik.touched.unitPrice && formik.errors.unitPrice ? (
              <p style={{ color: 'red' }}>{formik.errors.unitPrice}</p>
            ) : null}
          </div>
          <div className="col-lg-2 col-md-3">
            <button className="btn-primary btn mt-lg-4 mt-md-4" type="submit">
              + Add to Bill
            </button>
          </div>
        </div>
      </form>
      <div className="mt-4 table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Discount(Total_Amount)</th>
              <th scope="col">Net_Amount</th>
            </tr>
          </thead>
          <tbody>
          {products.map((product, index) => {
//   console.log(product);  Check the product data
  return (
    <ProductView
      key={index}
      value={product}
      onDelete={() => handleDelete(index)}
    />
  );
})}

          </tbody>
        </table>
      </div>
<div></div>
      <Total netAmount={netAmount} /> 
    </>
  );
};

export default Product;
