import React from 'react'
import Register from './Pages/Register'
import {Routes, Route} from 'react-router-dom'
import Log from './Pages/Log'
import Homes from './Pages/Homes'
import Contacts from './Pages/Contacts'
import { motion, AnimatePresence } from "framer-motion"
import Features from './Pages/Features'
import Products from './Pages/Products'
import Combine from './Components/Combine'
import ProductDetails from './Pages/ProductDetails'
function App() {
  return (
    <AnimatePresence>
              {/* <Combine/> */}
      <Routes>
        <Route path='/register' element={<Register/>}></Route> 
        <Route path='/login' element={<Log/>}></Route>
        <Route path='/' element={<Homes/>}>  </Route>
        <Route path='/productDetail/:id' element={<ProductDetails/>}>  </Route>
        <Route path='/About' element={<Products/>}></Route>
        <Route path='/Contact' element={<Contacts/>}></Route>
        <Route path='/Feature' element={<Features/>}></Route>
      </Routes>

    </AnimatePresence>

  )
}

export default App
