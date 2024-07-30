import React from 'react'

export default function App1() {
  return (
  
       <div className="container-fluid ">
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid  bg-primary">
   
 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-dark" aria-current="page" href="#">about us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">check bmi</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            API
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item text-dark" href="#">weather api </a></li>
            <li><a className="dropdown-item" href="#">news api</a></li>
            <li><hr className="dropdown-divider"/> </li>
            <li><a className="dropdown-item" href="#">food receipe api</a></li>
            <li><a className="dropdown-item" href="#">movie api</a></li>
            <li><a className="dropdown-item" href="#">products api</a></li>
           
 
          </ul>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}
