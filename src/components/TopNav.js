import React from 'react'
import image from '../assets/barbikan_logo.png'
const TopNav = () => {
    return (
        <>
     <div className="container-fluid " style={{width:'100% !important',padding:'0px',background:'rgb(255, 255, 255)'}} >
  <nav className="navbar navbar-expand-lg" >
    <img className="navbar-brand img-fluid" src={image} style={{ width: '78px', height: '50px' }} alt="Brand" />
    <button className="navbar-toggler me-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/"><i className="bi bi-bell"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><i className="bi bi-gear"></i></a>
        </li>
        <hr />
        <li className="nav-item">
          <a className="nav-link" href="/"><i className="bi bi-person-circle"></i>Slico Design</a>
        </li>
      </ul>
    </div>
  </nav>
</div>


    </>
      )
}
export default TopNav;
