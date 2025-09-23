import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/About";
import Experience from "./pages/About";
import Blogs from "./pages/About";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-20"> {/* padding to prevent navbar overlap */}
        <About />
        <Projects />
        <Experience />
        <Blogs />
      </div>
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
