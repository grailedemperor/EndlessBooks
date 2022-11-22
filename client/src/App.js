import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./features/Nav";
import BookSearch from "./pages/BookSearch";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booksearch" element={<BookSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
