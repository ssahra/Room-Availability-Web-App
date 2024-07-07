import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
