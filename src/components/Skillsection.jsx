import React from 'react'

export default function Skillsection() {
  const skillsLeft = [
    { name: "Power BI", value: 45, color: "#ff69b4" }, // Set to Pink
    { name: "Mysql", value: 70, color: "#00758f" },
    { name: "Python (Pandas, NumPy)", value: 55, color: "#3776ab" },
    { name: "PHP", value: 80, color: "#777bb4" },
    { name: "Codeigniter", value: 75, color: "#ee4323" }
  ];

  const skillsRight = [
    { name: "HTML", value: 85, color: "#e34f26" },
    { name: "CSS", value: 80, color: "#1572b6" },
    { name: "Bootstrap 4", value: 78, color: "#7952b3" },
    { name: "JavaScript", value: 50, color: "#f7df1e" },
    { name: "JQuery/Ajax", value: 45, color: "#0769ad" }
  ];

  return (
    <>
      <section id="skills" className="skills section-bg">
        <div className="container">

          <div className="section-title">
            <h2>Skills</h2>
            <p><em>Hello, Shubham is here, I am software Developer. I am 1+ years experience in Web Development Field.
            I have skilled with <strong>PHP Language, Codeigniter 4, Ajax, JQuery, Bootstrap and Mysql Database, Ubuntu OS, Windows 10. etc.</strong>
            </em></p> 
          </div>

          <div className="row skills-content">
            
            {/* Left Column */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              {skillsLeft.map((skill, index) => (
                <div className="progress" key={index}>
                  <span className="skill">{skill.name} <i className="val">{skill.value}%</i></span>
                  <div className="progress-bar-wrap">
                    <div 
                      className="progress-bar" 
                      role="progressbar" 
                      style={{ width: `${skill.value}%`, backgroundColor: skill.color }} 
                      aria-valuenow={skill.value} 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="col-lg-6" data-aos="fade-up">
              {skillsRight.map((skill, index) => (
                <div className="progress" key={index}>
                  <span className="skill">{skill.name} <i className="val">{skill.value}%</i></span>
                  <div className="progress-bar-wrap">
                    <div 
                      className="progress-bar" 
                      role="progressbar" 
                      style={{ width: `${skill.value}%`, backgroundColor: skill.color }} 
                      aria-valuenow={skill.value} 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
                   
          </div>

        </div>
      </section>
    </>
  )
}
