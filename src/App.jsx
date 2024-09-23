import './App.css'
import './Home.css'
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from './components/Nav';
import Login from './components/Login';
// import SignUp from './components/SignUp';
import SignInfo from './components/SignInfo';
import RequestIdentity from './page/RequestIdentity';
import VerifyEmail from './components/VerifyEmail';
import Homepage from './page/Homepage';

function MainApp() {
  const location = useLocation();
  const hideNav = ["/"];
  
  // Create dynamic class based on current route
  const pageSpecificMargin = {
     // Apply negative margin only for homepage
    "/login": "mt-[0px]",
    "/signup": "mt-[20px]",
    "/signup/verify": "mt-[20px]",
    "/signup/verify/requestIdentity": "mt-[20px]"
  };

  return (
    <div className={`${pageSpecificMargin[location.pathname] || 'mt-[0]'}`}>
      {!hideNav.includes(location.pathname) && <Nav />}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignInfo />} />
        <Route path='/signup/verify' element={<VerifyEmail />} />
        <Route path='/signup/verify/requestIdentity' element={<RequestIdentity />} />
      </Routes>
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <MainApp /> {/* Now useLocation works as BrowserRouter is in place */}
    </BrowserRouter>
  );
}

export default App;
