import React from "react";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile";
import "./App.css";
import Dialogs from "./components/Dialogs/dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route index />
            <Route path="dialogs" element={<Dialogs />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
