import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import {ProductsProvider} from '../src/context/ProductsContext'
import {UsersProvider} from './context/UsersContext'

import {AuthTokenProvider} from './context/AuthTokenContext'
import Inicio from './components/Inicio/Inicio'

import Home from './components/Home/Home'
import  NavBar from './components/NavBar/NavBar'
import Login from './components/Login/Login'
import RestorePassword from './components/RestorePassword/RestorePassword'
import NewPAssword from './components/NewPassword/NewPassword'
import UserProfile from './components/UserProfile/UserProfile'
import Users from './components/Users/Users'
import CreateProductForm from './components/CreateProductForm/CreateProductForm'
import UpdateUserForm from './components/UpdateUserForm/UpdateUserForm'
import Products from './components/Products/Products'

import UserProducts from './components/UserProducts/UserProducts'
import MisProductos from './components/MisProductos/MisProductos'
import UpdateProductData from './components/UpdateProductData/UpdateProductsData'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Register from './components/Register/Register'
/*import UserChats from './components/UserChats/UserChats'*/
import ChatContent from './components/ChatContent/ChatContent'
import io from 'socket.io-client'

const socket= io('https://ccx-server.onrender.com') 

function App() {

  return (
    <>
    
    <BrowserRouter>
    <AuthTokenProvider>
    <UserProvider  socket={socket} >
    <ProductsProvider  socket={socket} >
    <UsersProvider socket={socket}>
  
    <Routes>
    <Route path='/navbar' exact element={ <NavBar/> } />
   
    <Route path='/' exact element={<Inicio/>} />
    <Route path='/login' exact element={<Login/>} />
    <Route path='/register' exact element={<Register/>} />
    <Route path='/home' exact element={<Home/>} />
    <Route path='/users' exact element={<Users/>} />
    <Route path='/newPassword' exact element={< NewPAssword/>} />
    <Route path='/restorePassword' exact element={<RestorePassword/>} /> 
    <Route path='/profile' exact element={< UserProfile/>} />
    <Route path='/updateuser' exact element={< UpdateUserForm/>} />
    <Route path='/products' exact element={< Products/>} />
    <Route path='/newProduct' exact element={< CreateProductForm/>} />
   
    <Route path='/userProducts/:owner' exact element={<UserProducts/>} />
    <Route path='/misProductos' exact element={<MisProductos/>} />
    <Route path='/updateproduct/:pid' exact element={<UpdateProductData/>} />
    <Route path='/productDetail/:pid' exact element={<ProductDetail/>} />
    <Route path='/chat/:chatID' exact element={<ChatContent socket={socket} />} />

    </Routes>
   
    </UsersProvider>
    </ProductsProvider>
    </UserProvider>
    </AuthTokenProvider>
    </BrowserRouter>
  
    </>
  )
}

export default App
/*  <Route path='/userChat' exact element={<UserChats/>} /> */