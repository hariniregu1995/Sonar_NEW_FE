import React from 'react'
import Home from './components/Home'
import Addblog from './components/Addblog'
import Viewblog from './components/Viewblog'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* <Home/>
      <Addblog/>
      <Viewblog/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addblog' element={<Addblog/>}/>
        <Route path='/viewblog' element={<Viewblog/>}/>
      </Routes>
    </div>
  )
}

export default App