import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Home from "../src/Components/Home"
import Login from "../src/Components/Login";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import './index.css';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
