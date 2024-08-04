import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import EmptyRooms from './pages/Emptyrooms';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage/>} />
        <Route path="/Emptyrooms" element={<EmptyRooms/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
