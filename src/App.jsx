import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Herosection from './components/Herosection'
import Aboutsection from './components/Aboutsection'
import FactSection from './components/FactSection'
import Skillsection from './components/skillsection'
import Resumesection from './components/Resumesection'
import Portfoliosection from './components/Portfoliosection'
import Servicesection from './components/Servicesection'
import Contactsection from './components/Contactsection'


function App() {
  return (
    <>
    {/* ======= Mobile nav toggle button =======  */}
    <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

    <Sidebar/>
    {/* hero section */}
    <Herosection/>
    
    <main id="main">
      {/* About section */}
     <Aboutsection/>
     {/* Fact section */}
     <FactSection/>
     {/* Skill section */}
     <Skillsection/>
     {/* Resume section */}
     <Resumesection/>
      {/* Resume section */}
      <Portfoliosection/>
      {/* Service section */}
      <Servicesection/>
      {/* Contactus section */}
      <Contactsection/>
    </main>
    </>
  )
}

export default App
