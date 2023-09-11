import React from "react";
import Head from "./Head";
import Admin from "./Admin";
import "./App.css";
import Login from "./Login";
import Contact from "./Contact";
import { Route, Router, Routes } from 'react-router-dom';
import Home from "./Home";
import control from "./Control";

const App = () => {
  return (
    <>
      <Head />
    

      <Routes>

        <Route path='/login' Component={Login} />
        <Route path='/admin' Component={Admin} />
        <Route path='/' Component={Home} />
        <Route path='/contact' Component={Contact} />
        <Route path='/control' Component={control} />
      </Routes>
    </>
  )

}
export default App;