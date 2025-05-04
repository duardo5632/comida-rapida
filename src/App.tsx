import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./presentation/pages/Login";
import Orders from "./presentation/pages/orders";
import "./styles/global.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Orders" element={<Orders />} />
    </Routes>
  );
}

export default App;
