import React from 'react'

export default function Aboutsection() {
  return (
  <>
    {/* // <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          {/* <p>Hello Folks, Shubham is here, I am software Developer.
             I am 1+ years experience in Web Development Field.<br/>
             I have skilled with <strong>PHP Language, Codeigniter 4,, Ajax, JQuery, Bootstrap4 and Mysql Database, Ubuntu OS, Windows 10.</strong> etc.
          </p> */}
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="/assets/img/shubh_img.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Web Developer.</h3>
            <p className="fst-italic">
             To built a long-term career in software industry with opportunities for career growth.<br/>
             To solve coding project problem in a creative and effective manner in a challenging position.<br/>
             To Enhance Coding and professional skills in a stable and dynamic workplace.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>10 July 1999</span></li> */}
                  <li><i className="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Shubham Kumar</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 7084 319 110</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Varanasi, UP India</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li> */}
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master Of Computer Application</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>shubhamjyotiii1999@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Hobbies:</strong> <span>Study</span></li>
                </ul>
              </div>
            </div>
            <p>Hello Folks, Shubham is here, I am software Developer.
             I am 1+ years experience in Web Development Field.<br/>
             I have skilled with <strong>PHP Language, Codeigniter 4,, Ajax, JQuery, Bootstrap4 and Mysql Database, Ubuntu OS, Windows 10.</strong> etc.
          </p>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End About Section --> */}

  </>
  )
}
