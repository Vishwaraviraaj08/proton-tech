import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import Home from '../Home/Home.jsx'
import Contact  from '../Contact/Contact.jsx'
import {Products} from '../Product/Products.jsx'
import Product from '../Product/Product.jsx'
import Infra from '../Infra/infra.jsx'
import Footer from '../Footer/footer.jsx'
import About from '../About/about.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
         <Route path="/infra" element={<Infra/>} />
        <Route path="/:prodId" element={<Product/>} />
          <Route path='/about' element={<About/>}/>
      </Routes>
        <Footer/>
    </>
  )
}

export default App
