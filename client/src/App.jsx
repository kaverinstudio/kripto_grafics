import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
