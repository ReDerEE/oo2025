
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ManageProducts from './pages/ManageProducts'
import Arrayd from './pages/Arrayd'
import Menu from './components/menu'
import ManageCategories from './pages/ManageCategories'
import Cart from './pages/Cart'
import Signup from './pages/Signup'
import Orders from './pages/Orders'
import Login from './pages/Login'
import SingleProduct from './pages/SingleProduct'
import EditProduct from './pages/EditProduct'
import Map from './pages/Map'

function App() {
  
  


  return (
    <>
     

     <Menu />


      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/manage/products' element={<ManageProducts/>} />
        <Route path='/manage/categories' element={<ManageCategories/>} />
        <Route path='/arrays' element={<Arrayd/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/orders' element={<Orders/>} />
        
        <Route path='/product/:productId' element={<SingleProduct/>}/>
        <Route path='/manage/edit-product/:productId' element={<EditProduct/>}/>

        <Route path='/map' element={<Map/>}/>
        <Route path='/*' element={<div>Page not found</div>} />
      </Routes>
    </>
  )
}
//key = {}
// React soovib koodi mällu jätta. Kui toimuvad re-renderdused, siis ta jätab kõik mällu v.a.
// tsükli sisud, sest tal pole mingit aimu, mille järgi seda meelde jätta
// selle jaoks, et ta saaks array meelde jätta, lisame key={}
export default App
