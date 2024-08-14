import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import EmptyRooms from './pages/Emptyrooms';
import TimetableSearch from './pages/TimetableSearch';
import BookRoom from './pages/BookRoom';
import ViewBooking from './pages/ViewBooking';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminBooking from './pages/AdminBooking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage/>} />
        <Route path="/Emptyrooms" element={<EmptyRooms/>} />
        <Route path="/TimetableSearch" element={<TimetableSearch/>} />
        <Route path="/BookRoom" element={<BookRoom/>} />
        <Route path="/ViewBooking" element={<ViewBooking/>} />
        <Route path="/AdminBooking" element={<AdminBooking/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
