import React from 'react'

export default function Resumesection() {
  return (
    <>
      {/* <!-- ======= Resume Section ======= --> */}
     <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
          <p><em>Hello Dear, Shubham is here, I am Web Developer with PHP Language switching my Career in Data Analytics and this is my updated resume following.</em></p>
        </div>

        {/* Contact Details Header Grid with Black Text and Redirect Icons */}
        <div className="row mb-4 pb-3 border-bottom" data-aos="fade-up" style={{ borderColor: "#ececf1" }}>
          <div className="col-md-6 col-lg-3 mb-2">
            <strong>Email:</strong> <a href="mailto:shubhamjyotiii1999@gmail.com" style={{ color: "#000000", textDecoration: "none" }}>shubhamjyotiii1999@gmail.com</a>
          </div>
          <div className="col-md-6 col-lg-3 mb-2">
            <strong>Phone:</strong> <a href="tel:+917084319110" style={{ color: "#000000", textDecoration: "none" }}>+91 7084 319 110</a>
          </div>
          <div className="col-md-6 col-lg-3 mb-2">
            <strong>LinkedIn:</strong> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "#000000", textDecoration: "none" }}>
              shubham-kumar-63b111185 <i className="bx bx-link-external" style={{ color: "#149ddd", fontSize: "14px" }}></i>
            </a>
          </div>
          <div className="col-md-6 col-lg-3 mb-2">
            <strong>GitHub:</strong> <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: "#000000", textDecoration: "none" }}>
              ://github.com <i className="bx bx-link-external" style={{ color: "#149ddd", fontSize: "14px" }}></i>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Shubham Kumar</h4>
              <p><em> Aspiring Data Analyst with hands-on experience in MySQL and Excel, and newly acquired skills in Power BI,
                      Python (OOP), NumPy, and Pandas for data analysis. Skilled in data extraction, cleaning, basic analysis,
                      dashboard creation, and KPI reporting. Passionate about transforming raw data into actionable insights.</em></p>
            </div>
            <div className="resume-item">
              <h4>Individual Skill Set & Core Tools</h4>
              <ul>
                <li><strong>Data & Analytics:</strong> Power BI, Excel, Pandas, NumPy, ETL Concepts, Data Validation.</li>
                <li><strong>Databases & Web:</strong> SQL, MySQL, PHP, CodeIgniter 4, JavaScript, jQuery, AJAX.</li>
                <li>Good communication and professional skills.</li>
                <li>Comfortable with travel for long period.</li>
                <li>Having the good skills of self control.</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Master Of Computer Application</h4>
              <h5>2021 - 2023</h5>
              <p><em>Maharaja Agrasen Himalayan Garhwal University (MAHGU), Uttarakhand</em></p>
              <p>I Qualified Master of Computer Application from Maharaja Agrasen Himalayan Garhwal University, Government of Uttarakhand Act No. 33 of 2016.</p>
            </div>
           
            <div className="resume-item">
              <h4>Bachelor Of Computer Application</h4>
              <h5>2018 - 2021</h5>
              <p><em>University Of Lucknow, Lucknow</em></p>
              <p>I Qualified Bachelor of Computer Application from School of Management Sciences Colleges</p>
            </div>
            <div className="resume-item">
              <h4>12th Standard</h4>
              <h5>2015 - 2017</h5>
              <p><em>A.N.G.I.College chakia,chandauli</em></p>
              <p>Completed Higher Secondary School certificate examinations under the Uttar Pradesh Board curriculum with focus on science streams.</p>
            </div>

            {/* Certifications Block with Black Hyperlinks and Redirect Icons */}
            <h3 className="resume-title">Certifications</h3>
            <div className="resume-item">
              <h4>Data & Programming Credentials</h4>
              <ul>
                <li>
                  <strong>Power BI - 7 Hours Certification</strong> — Skill Course (January 2026)
                </li>
                <li>
                  <strong>
                    <a href="https://hackerrank.com" target="_blank" rel="noopener noreferrer" style={{ color: "#000000", textDecoration: "none" }}>
                      Python (Basic) <i className="bx bx-link-external" style={{ color: "#149ddd", fontSize: "14px" }}></i>
                    </a>
                  </strong> — HackerRank Verified (May 2026)
                </li>
                <li>
                  <strong>
                    <a href="https://hackerrank.com" target="_blank" rel="noopener noreferrer" style={{ color: "#000000", textDecoration: "none" }}>
                      SQL (Intermediate) <i className="bx bx-link-external" style={{ color: "#149ddd", fontSize: "14px" }}></i>
                    </a>
                  </strong> — HackerRank Verified (March 2023)
                </li>
                <li>
                  <strong>
                    <a href="https://hackerrank.com" target="_blank" rel="noopener noreferrer" style={{ color: "#000000", textDecoration: "none" }}>
                      SQL (Basic) <i className="bx bx-link-external" style={{ color: "#149ddd", fontSize: "14px" }}></i>
                    </a>
                  </strong> — HackerRank Verified (March 2023)
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Trainee Software Engineer</h4>
              <h5>04/2022 – 04/2023</h5>
              <p><em>In Kroftors Web Solutions Pvt. Ltd., Lucknow India</em></p>
              <ul>
                <li>Worked with MySQL databases for backend data management.</li>
                <li>Wrote SQL queries to extract, filter, and organize data for reporting.</li>
                <li>Collaborated on projects using JavaScript, AJAX, and jQuery.</li>
                <li>Supported frontend work with basic HTML and CSS.</li>
                <li>Used Gitlab repositories for Push and Pull code on gitlab.</li>              
              </ul>
            </div>
            <div className="resume-item">
              <h4>Self-Created Project: Mobile Sales Data Dashboard</h4>
              <p><em>Technologies: Microsoft Power BI</em></p>
              <ul>
                <li>Created an interactive dashboard to monitor Total Sales, Quantity & Transactions.</li>
                <li>Analyzed regional and monthly trend metrics detailing Sales by City and Month.</li>
                <li>Implemented multi-angle breakdowns including Transactions by Payment Method and Customer Ratings.</li>
                <li>Mapped granular metrics showcasing Sales trends by Mobile Model and Day Name.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Project: School Management System - 360 Degree Project</h4>
              <h5>04/2022 – 10/2022</h5>
              <p><em>Macmillan Education (Onsite) - PHP, Codeigniter 4, MySQL, jQuery</em></p>
              <ul>
                <li>Managed MySQL databases for student, staff, attendance, and academic records.</li>
                <li>Developed backend modules using PHP and CodeIgniter 4 framework.</li>
                <li>Implemented dynamic asynchronous features with jQuery and AJAX scripts.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Project: iNext HealthOn - Healthcare Management System</h4>
              <p><em>Technologies: PHP, CodeIgniter 4, MySQL, jQuery</em></p>
              <ul>
                <li>Developed backend functionalities using PHP and CodeIgniter 4 architectures.</li>
                <li>Designed database schemas and wrote optimized SQL queries for records.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Final Year project</h4>
              <p><em>Project titled "News Blog Content Management System"</em></p>
              <ul>
                <li>I have completed my final year project News Blog Content Management System using ASP.NET MVC and ADO.NET.</li> 
                <li>I have used, HTML, CSS and Bootstrap there are few modules Normal_admin, Main_admin and visitor page.</li>
              </ul>
            </div>
          </div>
          <div className="resumea-item" style={{ marginLeft: "10px" }}>
            <h4>Declaration</h4>
            <p><em>I hereby declare that the above information is correct to the best of knowledge.</em></p>
          </div>
        </div>
        
      </div>
    </section>

    {/* <!-- End Resume Section --> */}

    </>
  )
}
