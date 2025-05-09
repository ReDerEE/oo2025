// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import MainPage from './pages/MainPage'
import PlayerPage from './pages/Player'
import PointPage from './pages/Points'
import Menu from './components/menu'
import ManagePlayer from './pages/ManagePlayer'
import ManageResults from './pages/ManageResults'
import SinglePlayer from './pages/SinglePlayer'
import EditPlayer from './pages/EditPlayer'
import Map from './pages/Map'


function App() {
  

  return (
    <>
      <Menu/>

      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/player' element={<PlayerPage/>} />
        <Route path='/points' element={<PointPage/>} />
        <Route path='/manage/player' element={<ManagePlayer/>} />
        <Route path='/manage/results' element={<ManageResults/>} />

        <Route path='/player/:playerId' element={<SinglePlayer/>} />
        <Route path='/editPlayer/:playerId' element={<EditPlayer/>} />

        <Route path='/map' element={<Map />} />
      </Routes>
    </>
  )
}

export default App
