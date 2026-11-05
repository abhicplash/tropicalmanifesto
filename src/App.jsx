
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function Placeholder({ title }) {
  return (
    <main style={{ padding: "80px 6%", minHeight: "70vh" }}>
      <h1>{title}</h1>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Placeholder title="About" />} />
        <Route path="/projects" element={<Placeholder title="Projects" />} />
        <Route path="/career" element={<Placeholder title="Career" />} />
        <Route path="/contact" element={<Placeholder title="Contact" />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
