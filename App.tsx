import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Car, MapPin, Wallet, WrenchIcon } from 'lucide-react';
import GetStarted from './pages/GetStarted';
import Registration from './pages/Registration';
import ParkingLocations from './pages/ParkingLocations';
import SlotBooking from './pages/SlotBooking';
import Payment from './pages/Payment';
import Profile from './pages/Profile';
import Mechanics from './pages/Mechanics';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Car className="h-6 w-6" />
              <span className="text-xl font-bold">SmartPark</span>
            </div>
            <div className="flex space-x-4">
              <a href="/profile" className="flex items-center space-x-1 hover:text-blue-200">
                <Wallet className="h-5 w-5" />
                <span>Wallet</span>
              </a>
              <a href="/mechanics" className="flex items-center space-x-1 hover:text-blue-200">
                <WrenchIcon className="h-5 w-5" />
                <span>Mechanics</span>
              </a>
              <a href="/locations" className="flex items-center space-x-1 hover:text-blue-200">
                <MapPin className="h-5 w-5" />
                <span>Find Parking</span>
              </a>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/locations" element={<ParkingLocations />} />
          <Route path="/booking/:locationId" element={<SlotBooking />} />
          <Route path="/payment/:slotId" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mechanics" element={<Mechanics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;