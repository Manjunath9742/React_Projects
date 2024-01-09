import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart'
import Rootlayout  from './components/Rootlayout';
const App = () => {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>}>
         <Route index element={<Dashboard/>}></Route> 
         <Route path="/cart" element={<Cart/>}></Route>      
    </Route>
  ) )

  return (
    <div className='App'>
    <RouterProvider router={router}/>

    
    </div>
  )
}

export default App

