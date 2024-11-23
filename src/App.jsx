import './App.css'
import './Home.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from './components/Nav';
import Login from './components/Login';
// import SignUp from './components/SignUp';
import SignInfo from './components/SignInfo';
import RequestIdentity from './page/RequestIdentity';
import VerifyEmail from './components/VerifyEmail';
//import Homepage from './page/Homepage';
import { store } from './feature/store';
import { Provider } from 'react-redux';
import ApiFetchExample  from './ApiFetch';
//import SettingsNav from './components/SettingsNav';
//import ChatListBottomNav from './components/ChatListBottomNav';
//import ChatListSettings from './components/ChatListSettings';
//import PasscodeSetup from './components/PasscodeSetup';
//import CustomizeCollection from './components/CustomizeCollection';
//import Collections2 from './components/Collections2';
//import Collection from './components/Collection';
import Login1 from './components/Login1';
function MainApp() {
  const location = useLocation();
  const hideNav = ["/"];
  
  const pageSpecificMargin = {
    "/login": "mt-[0px]",
    "/signup": "mt-[0px]",
    "/signup/verify": "mt-[0px]",
    "/signup/verify/requestIdentity": "mt-[20px]"
  };

  return (
    <div className={`${pageSpecificMargin[location.pathname] || 'mt-[0]'}`}>
      {!hideNav.includes(location.pathname) && <Nav />}
      <Routes>
        <Route path='/' element={<Login1 />} />
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
   <Provider store={store}>
        <BrowserRouter>
            <MainApp /> {/* Now useLocation works as BrowserRouter is in place */}
            <ApiFetchExample/>
        </BrowserRouter>
   </Provider>
    
  );
}

export default App;
