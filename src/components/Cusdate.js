import React from 'react'

const Cusdate = () => {
  const today = new Date();
  const date = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

  return (
    <>
    
    <div className="row mt-3">
      <div className=" col-lg-4 col-md-3">
      <label  >Customer_Name</label>
      <input type="name"  className="form-control" placeholder='Customer Name'/>
      </div>
      <div className="col-lg-2 col-md-2">
      <label  >Invoice</label>
      <input type="name"  className="form-control" placeholder='Invoice'/>
      </div>
      <div className="col-lg-2 col-md-3">
      <label  >Order_number</label>
      <input type="number"  className="form-control" placeholder='123456' />
      </div>
      <div className="col-lg-2 col-md-2">
      <label  >Invoice_Date</label>
      <input type="date" className='form-control' defaultValue={date}/>
          </div>
      <div className="col-lg-2 col-md-2">
      <label  >Due_Date</label>
      <input type="date"  className="form-control" defaultValue={date}/>
      </div> 
    </div>
    
    </>
  )
}

export default Cusdate;