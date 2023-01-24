import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages";
import LoginSection from "./components/LoginSection";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<LoginSection />} />
      <Route path="/access" element={<Home />} />
    </Routes>
  );
}

export default App;
