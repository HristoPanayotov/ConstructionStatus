import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConfirmedPayment from './Components/ConfirmedPayment';
import PrivateRoutes from './Utils/PrivateRoutes';
import Checkout from './Components/Checkout';
import SignUpCustomer from './Components/SignUpForm';
import SignUp from './Components/SignUp';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import SignUpForm from './Components/SignUpForm';
function App() {
  return (
    <div className='App min-h-screen flex flex-col'>
      <Router>
          <Header/>
            <Routes>
              <Route element={<PrivateRoutes/>}>
                <Route element={<Checkout/>} path='/checkout'/>
              </Route>
              <Route element={<SignUp/>} path='/sign-up' />
              <Route element={<SignUpForm/>} path='/sign-up-customer' />
              <Route element={<SignUpForm/>} path='/sign-up-tradesperson' />
              <Route element={<Home/>} path='/' exact/>
            </Routes>
            <Footer/>
      </Router>
    </div>
  );
}

export default App
