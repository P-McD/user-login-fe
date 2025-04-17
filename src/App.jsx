import "./App.css";
import Login from "./pages/Login";
import SignUpForm from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<SignUpForm/>}/>
      <Route path="/welcome" element={<Welcome/>}/>
    </Routes>
  );
}

export default App;
