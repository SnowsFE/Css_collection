import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./main/Main";
import Css from "./Css/Css";
import Animations from "./Css/Animation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/css-animations" element={<Animations />} />
        <Route path="/css-animations/*" element={<Css />} />
      </Routes>
    </Router>
  );
}

export default App;
