import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Users from "./pages/Home";
import Bookings from "./pages/Bookings";
import Checkins from "./pages/Checkins";
import Hotels from "./pages/Hotels";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/checkin" element={<Checkins />} />
        </Routes>
    </Router>
  );
};

export default App;
