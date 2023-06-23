import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import "./App.css";
import readmes from "./MockReadmes";
import users from "./MockUsers";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
