import React from "react";
import '../styles/navbar.css';

function Navbar(){
    return(
        <nav id="navbar" className={`navbar navbar-expand-lg custom-navbar`}>
        <div className="container-fluid">
          
          <a className="navbar-brand" href="#"> 
          <img src='../image/logo/springsport.png' width={"40"} />
            <span style={{ paddingLeft: '10px'}}>SPRING SPORT</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Trang chủ</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Thể loại sách
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                  <li><a className="dropdown-item" href="#">Thể loại 1</a></li>
                  <li><a className="dropdown-item" href="#">Thể loại 2</a></li>
                  <li><a className="dropdown-item" href="#">Thể loại 3</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" 
                aria-expanded="false">
                  Quy định bán hàng
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                  <li><a className="dropdown-item" href="#">Quy định 1</a></li>
                  <li><a className="dropdown-item" href="#">Quy định 2</a></li>
                  <li><a className="dropdown-item" href="#">Quy định 3</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Liên hệ</a>
              </li>
            </ul>
          </div>
  
          {/* Tìm kiếm */}
          <form className="d-flex">
            <input id={"search"} className="form-control" type="search" placeholder="Keyword" aria-label="Search" />
            
          </form>

          <ul className="navbar-nav me-1">
            <li className="nav-item">
            <div  className="btn btn-default" style={{ color: 'white'}}>
              <i className="fa fa-search"></i>
            </div>
            </li>
          </ul>
  
          {/* Biểu tượng giỏ hàng */}
          <ul className="navbar-nav me-1">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
  
          {/* Biểu tượng đăng nhập */}
          <ul className="navbar-nav me-1">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-user"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;