import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConfirmedPayment from './Components/ConfirmedPayment';
import PrivateRoutes from './Utils/PrivateRoutes';
import Checkout from './Components/Checkout';
import SignUpCustomer from './Components/SignUpCustomer';
import SignUp from './Components/SignUp';
import SignUpConstructionWorker from './Components/SignUpConstructionWorker';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className='App'>
      <Router>
          <Header/>
            <Routes>
              <Route element={<PrivateRoutes/>}>
                <Route element={<Checkout/>} path='/checkout'/>
              </Route>
              <Route element={<SignUp/>} path='/sign-up' />
              <Route element={<SignUpCustomer/>} path='/sign-up-customer' />
              <Route element={<SignUpConstructionWorker/>} path='/sign-up-construction-worker' />
              <Route element={<Home/>} path='/' exact/>
            </Routes>
      </Router>
    </div>
  );
}

export default App
