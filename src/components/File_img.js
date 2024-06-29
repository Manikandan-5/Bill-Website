import React, { useState } from "react";

export const File_img = () => {
  const [logoFile, setLogoFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setLogoFile(selectedFile);
      setError("");
    } else {
      setLogoFile(null);
      setError("Only Image File...Logo !!");
    }
  };

  return (
    <>
      <div className="row daii">
        <h5>
          <i className="bi bi-arrow-left"></i> Create invoice
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
                Drag & Drop your file or{" "}
                <span className="text-primary">Browser</span>
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
