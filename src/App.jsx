import './App.css'
import { useState, useEffect } from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Login from './Login'
import { useAppDispatch } from './Feature/Hook';
import { setUser } from './Feature/AuthSlice';
import Course from './Course';
import CourseChapter from './CourseChapter';


function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  
  useEffect(()=>{
    dispatch(setUser(user))
  }, [])
  return (
      <main>
            <BrowserRouter>
                <Nav/><br></br><br></br><br></br>
                <Routes>
                  <Route path='/' element={<Home/>}></Route>
                  <Route path='course' element={<Course/>}></Route>
                  <Route path='/course/:courseId' element={<CourseChapter/>}></Route>
                  <Route path='pricing' element={<div></div>}></Route>
                  <Route path='about' element={<div>Name</div>}></Route>
                  <Route path='login' element={<Login/>}></Route>
                  
                </Routes>
            
            </BrowserRouter>
      </main>
  )
}

export default App;
