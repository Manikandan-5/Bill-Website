import React, { useState } from "react";



 const Fileimg = () => {
  const [logoFile, setLogoFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      
      if (file.size > 5 * 1024 * 1024) {
        setError('Max File Size 5MB.');
        return;
      }

    
      setLogoFile(file);
      setError('');
    } else {
      setError('No file selected.');
    }
  };

  return (
    <>
      <div className="row">
        <h5>
          <i className="bi bi-arrow-left"></i> Create Invoice
        </h5>
        <div className="col-lg-12 col-sm-12 col-xs-12 col-md-12">
          {!logoFile && (
            <div
              style={{ height: "100px" }}
              className="text-center border border-primary rounded"
            >
              <label
                htmlFor="fileInput"
                style={{ cursor: "pointer" }}
                className="mt-3"
              >
                <i
                  className="bi bi-box-arrow-up text-primary"
                  style={{ fontSize: "24px", marginBottom: "5px" }}
                ></i>
                <br />
                Max.file Size 5MB
                <br/>
                Drag & Drop your file or{" "}
                <span className="text-primary">Browse</span>
              </label>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              {error && <p className="text-danger">{error}</p>}
            </div>
          )}

          {logoFile && (
            <img
              src={URL.createObjectURL(logoFile)}
              className="img-fluid"
              alt={logoFile.name}
              style={{ height: "100px", width: "100%" }}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default Fileimg;