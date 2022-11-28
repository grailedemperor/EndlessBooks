import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./components/HomePage";
import React, { useEffect, useState } from "react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import BookSearch from "./pages/BookSearch";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Library from "./pages/Library";
import TBR from "./pages/TBR";
import { WonderousContex } from "./utils/context";

function App() {
  const [authState, setAuthState] = useState({
    token: "",
    user: {},
  });
  const [user, setUser] = useState("");

  const store = {
    authState,
    setAuthState,
  };

  useEffect(()=>{
    localStorage.setItem('auth_token',authState.token)
  },[authState])

  return (
    <WonderousContex.Provider value={store}>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/booksearch" element={<BookSearch />} />
          <Route path="/tbr" element={<TBR />} />
          <Route path="/library" element={<Library />} />
        </Routes>
        <Footer />
      </HashRouter>
    </WonderousContex.Provider>
  );
}

export default App;
