import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import AdvantageSection from "./components/AdvantageSection";
import "./App.css";
import DisplayFile from "./pages/DisplayFile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <LandingPage />
          </div>
        } />

        <Route path="/upload" element={<Home />} />
        <Route path="/display" element={<DisplayFile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
