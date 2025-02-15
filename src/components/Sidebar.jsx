import React from 'react'



export default function Navbar(props) {
  return (
<header id="header">
    <div className="d-flex flex-column">

      <div className="profile">
        <img src="/assets/img/shubh_img.jpg" alt="" className="img-fluid rounded-circle" />
        <h1 className="text-light"><a href="/">Shubham Developer</a></h1>
        <div className="social-links mt-3 text-center">
          <a href="/" className="twitter d-none"><i className="bx bxl-twitter"></i></a>
          <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="/" className="instagram d-none"><i className="bx bxl-instagram"></i></a>
          <a href="/" className="google-plus d-none"><i className="bx bxl-skype"></i></a>
          <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="/hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="/about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="/skills" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Skills</span></a></li>
          <li><a href="/resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="/services" className="nav-link scrollto d-none"><i className="bx bx-server"></i> <span>Services</span></a></li>
          <li><a href="/contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
      {/* <!-- .nav-menu --> */}
    </div>
  </header>
  )
}


