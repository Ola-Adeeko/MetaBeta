import "./App.css";
import Navbar from "./component/navbar/navbar";
import Landing from "./pages/landing";
import Footer from "./component/footer/footer";
import { Route, Routes } from "react-router";
import Features from "./pages/features";
import Register from "./pages/register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/features" element={<Features />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
