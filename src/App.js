import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Analytics from "./components/Analytics/Analytics";
import "./styles/styling.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context/AppContext";
// import Currency from "./components/currency";

function App() {
  return (
    <Router>
      <AppProvider>
        <div className="app flex h-screen">
          <Sidebar />
		  {/* <Currency/> */}
          <div className="flex-1 flex place-content-center py-3 overflow-hidden mediaForm">
            <div className="content shadow-lg bg-white rounded-2xl p-4 mediaFormBackground">
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
          </div>
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
