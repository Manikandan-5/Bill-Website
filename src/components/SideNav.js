import React, { useState } from 'react';
import TopNav from '../components/TopNav';
import { File_img } from './File_img';
import Cus_Date from './Cus_Date';
import Product from './Product';
import ProductView from './ProductView';
import Footer from './Footer';


const SideNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`containers ${isExpanded ? 'expanded' : ''}`}>
      <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <div className="top_section">
        <span className="logo bg-primary"onClick={toggleSidebar}  >B</span> 
        </div>
        <hr style={{background: 'rgb(255, 255, 255)'}}/>
        <ul className="links_list">
          <li className="link">
            <i className="bi  bi-credit-card"></i>
            <span className="link_text">Sales</span>
          </li>
          <li className="link">
            <i className="bi bi-bag"></i>
            <span className="link_text">Purchase</span>
          </li>
          <li className="link">
            <i className="bi bi-pencil"></i>
            <span className="link_text">Quatation</span>
          </li>
          <li className="link">
            <i className="bi bi-tags"></i>
            <span className="link_text">Expanses</span>
          </li>
          <li className="link">
            <i className="bi bi-cloud-arrow-up"></i>
            <span className="link_text">Import Bank Statement</span>
          </li>
          <li className="link">
            <i className="bi  bi-person"></i>
            <span className="link_text">Customer</span>
          </li>
          <li className="link">
            <i className="bi bi-people"></i>
            <span className="link_text">People</span>
          </li>
          <li className="link">
            <i className="bi bi-telephone"></i>
            <span className="link_text">Product</span>
          </li>
          <li className="link">
            <div className='bg-primary text-white p-2 mt-2 mb-4 link_text rounded'  >
              Lorem ipsum dolor 
              sit amet consecte libero veniam voluptas .
              <button className='btn btn-light mt-1 text-block'>Upgrade Now 🚀</button>
            </div>
          </li>
          <li className="link">
            <i className="bi bi-person-circle"></i>
            <div className='d-flex flex-column'>
            <span className="link_text">Barbikan</span>
            <span className='link_text'>barbikan@gmail.com</span>
            </div>
          </li>
        
        </ul>
      </div>
      <main>
       <TopNav/>
       <div className="conatiner p-5 mt-5 mb-5 ms-5 me-5" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
        <File_img/>
        <Cus_Date/>
        <Product/>
        <ProductView/>
       </div>
       <Footer/>
      </main>
    </div>
  );
};

export default SideNav;
