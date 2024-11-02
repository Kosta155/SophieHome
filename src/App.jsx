
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
 

  return (
    <div className='lg:pt-24 '>
    
       <Header />
       <SectionOne/>
       <AboutSection />
       <WorkList />
       <Product />
       <Renovation />
       <Gallery />
       <Contact />

       <Footer />
    </div>
  )
}

export default App
