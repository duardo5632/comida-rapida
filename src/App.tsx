import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./presentation/pages/Login";
import Menu from "./presentation/pages/menu";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default App;
