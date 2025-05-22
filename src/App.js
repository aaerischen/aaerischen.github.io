import './App.css';
import Home from "./pages/Home.js";
import Toolbar from "./components/Toolbar.js";
import Portfolio from './pages/Portfolio.js';
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<Home />} />
        <Route path="/contacts/" element={<Home />} />
        <Route path="/project/" element={<Home />} />
        <Route path="/project/:id" element={<Home />} />
      </Routes>
      <Toolbar />
    </div>
  );
}

export default App;