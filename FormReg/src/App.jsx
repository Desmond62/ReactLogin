import React from 'react'
import Register from './Pages/Register'
import {Routes, Route} from 'react-router-dom'
import Log from './Pages/Log'
function App() {
  return (
    <div>
      <Routes>
      {/* <Register/>  */}
        <Route path='/register' element={<Register/>}></Route> 
        <Route path='/login' element={<Log/>}></Route>
      </Routes>
    </div>

  )
}

export default App
