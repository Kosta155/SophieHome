import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header-Component/Header'
import SectionOne from './Section-One-Component/SectionOne'
import AboutSection from './About-Component/AboutSection'
import Product from './Product-Component/Product'
import WorkList from './Work-List-Component/WorkList'
import Renovation from './Renovation-Component/Renovation'
import Footer from './Footer-Component/Footer'
import Contact from './Contact-Component/Contact'
import Gallery from './Gallery/Gallery'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
       <Header />
       <SectionOne/>
       <AboutSection />
       <WorkList />
       <Product />
       <Renovation />
       <Gallery />
       <Contact />

       <Footer />
    </>
  )
}

export default App
