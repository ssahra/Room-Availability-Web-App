import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import EmptyRooms from './pages/Emptyrooms';
import TimetableSearch from './pages/TimetableSearch';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage/>} />
        <Route path="/Emptyrooms" element={<EmptyRooms/>} />
        <Route path="/TimetableSearch" element={<TimetableSearch/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
