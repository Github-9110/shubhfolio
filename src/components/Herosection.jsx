import React, { useEffect } from 'react';
import Typed from 'typed.js';

export default function Herosection() {
  useEffect(() => {
    const typedEl = document.querySelector('.typed');
    const typedItems = typedEl.getAttribute('data-typed-items');
    
    // Array of dynamic colors matching each word position
    const colors = ["#149ddd", "#e91e63", "#28a745", "#ffc107", "#a04ef6"];
    const options = {
      strings: typedItems.split(', '), 
      typeSpeed: 50,  
      backSpeed: 25,  
      backDelay: 1000, 
      startDelay: 500,  
      loop: true, 
      showCursor: true,
      preStringTyped: (arrayPos) => {
        const currentColor = colors[arrayPos] || "#149ddd";
        
        // Dynamically change text color and CSS border-bottom-color
        if (typedEl) {
          typedEl.style.setProperty('color', currentColor, 'important');
          typedEl.style.setProperty('border-bottom-color', currentColor, 'important');
          typedEl.style.transition = "all 0.4s ease";
        }
        
        // Match the blinking cursor color dynamically
        const cursor = document.querySelector('.typed-cursor');
        if (cursor) {
          cursor.style.color = currentColor;
        }
      }
    };

    const typed = new Typed(".typed", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>Shubham Developer</h1>
          <p>
            I'm <span className="typed" data-typed-items="Web Developer, Backend Developer, Data Analyst, MySQL Developer, Software Developer"></span>
          </p>
        </div>
      </section>
      {/* End Hero */}
    </>
  );
}
