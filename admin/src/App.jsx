import React from 'react'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Add from './pages/Add'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <>
        <Navbar />
        <hr />
        <div className='flex w-full'>
          <SideBar />
          <div className='w-[70%] mx-auto ml-[max(5vw, 5%)] my-8 text-gray-600 text-base'>
            <Routes>
              <Route path='/add' element={<Add />} />
            </Routes>
          </div>
        </div>

      </>

    </div>
  )
}

export default App
