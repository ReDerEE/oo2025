import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/mainPage'
import SingleWord from './pages/SingleWord'
import AddWords from './pages/AddWords'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='words/:wordId' element={<SingleWord />} />
        <Route path='addWords' element={<AddWords />} />
      </Routes>
    </>
  )
}

export default App
