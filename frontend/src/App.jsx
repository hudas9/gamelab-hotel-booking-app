import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import HotelList from "./pages/HotelList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Thanks from "./pages/Thanks";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotel/:id" element={<Hotel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking/:hotelId" element={<Booking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
