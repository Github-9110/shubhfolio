import React, { useEffect } from 'react';
import Typed from 'typed.js';

export default function Herosection() {
  useEffect(() => {
    const typedItems = document.querySelector('.typed').getAttribute('data-typed-items');
    
    const options = {
      strings: typedItems.split(', '), 
      typeSpeed: 50,  
      backSpeed: 25,  
      backDelay: 1000, 
      startDelay: 500,  
      loop: true, // Loops the animation
      showCursor: true, // Ensure cursor is visible during typing
    };

    // Initialize Typed.js on the element with the class .typed
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
            I'm <span className="typed" data-typed-items="Web Developer, PHP Developer, Backend Developer, Software Developer"></span>
          </p>
        </div>
      </section>
      {/* End Hero */}
    </>
  );
}
