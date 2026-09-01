import Dashboard from "./pages/Dashboard";
import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
