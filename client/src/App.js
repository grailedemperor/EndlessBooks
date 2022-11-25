import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./components/HomePage";
import React from "react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import BookSearch from "./pages/BookSearch";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booksearch" element={<BookSearch />} />
        {/*<Route path="/tbr" element ={<TBR />} /> 
        <Route path="/library" element={<Library/>} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
