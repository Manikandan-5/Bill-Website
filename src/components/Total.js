import React, { useState } from "react";
import jsPDF from "jspdf";
import { toast } from "react-toastify";

const Total = ({ netAmount }) => {
  const [discount, setDiscount] = useState(5);

  const handleDiscountChange = (e) => {
    const { value } = e.target;
    if (value >= 0) {
      setDiscount(value);
    }
  };

  const generatePDF = (e) => {
    e.preventDefault();
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString();

    doc.text("Invoice Details", 10, 10);
    doc.text(`Date: ${date}`, 10, 20);
    doc.text(`Sub Total: ${netAmount.toFixed(2)}`, 10, 30);
    doc.text(`Discount: ${discount}%`, 10, 40);
    doc.text(
      `Discount Amount: -${(netAmount * (discount / 100)).toFixed(2)}`,
      10,
      50
    );
    doc.text(
      `Total Amount: ${(netAmount - netAmount * (discount / 100)).toFixed(2)}`,
      10,
      60
    );

    doc.save("Bill.pdf");

    toast.success("PDF Downloaded !!");
  };

  return (
    <>
      <label>Add Discount (%) to all items:</label>
      <input
        type="number"
        name="discount"
        className="form-control"
        style={{ width: "40%" }}
        value={discount}
        onChange={handleDiscountChange}
        min="0"
      />
      <div className="row mt-3">
        <div className="col-lg-6 col-md-6">
          <label>Customer Notes</label>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Welcome"
              style={{ height: "100px" }}
            ></textarea>
          </div>
          <label className="mt-3">Terms & Conditions</label>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              style={{ height: "100px" }}
              disabled
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              magnam, itaque libero quisquam corrupti cumque rem maiores
              quisquam. Quae incidunt ea commodi amet sed reprehenderit vero ad
              minima.
            </textarea>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <table className="table table-primary table-borderless p-2">
            <tbody>
              <tr>
                <td colSpan="4">Sub Total</td>
                <td colSpan="4"></td>
                <td colSpan="6">{netAmount.toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan="4">Discount</td>
                <td colSpan="4">
                  <div className="input-group mb-3 bill-inp">
                    <input
                      type="text"
                      className="form-control"
                      value={discount}
                    />
                  </div>
                </td>
                <td>{-(netAmount * (discount / 100)).toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan="6">
                  <div className="form-check form-switch ">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      disabled
                    />
                    <label>TDS Applicable?</label>
                  </div>
                </td>
                <td colSpan="6"></td>
              </tr>
              <tr>
                <td colSpan="4">
                  <div className="form-check form-switch ">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckCheckedDisabled"
                      checked
                      disabled
                    />
                    <label>TCS Applicable?</label>
                  </div>
                </td>
                <td colSpan="6"></td>
              </tr>
              <tr>
                <td colSpan="4">
                  <select className="form-select">
                    <option value="" selected>
                      Select
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </td>
                <td colSpan="4">
                  <input
                    type="number"
                    name="quantity"
                    className="form-control w-100"
                    disabled
                    readOnly
                  />
                </td>
                <td>{-(netAmount * (discount / 100)).toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan="4">
                  <strong>Total Amount</strong>
                </td>
                <td colSpan="4"></td>
                <td colSpan="4">
                  <strong>
                    {(netAmount - netAmount * (discount / 100)).toFixed(2)}
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-end me-2">
            <button
              type="submit"
              className="btn btn-primary ps-4 pe-4"
              onClick={generatePDF}
            >
              Pdf
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Total;
