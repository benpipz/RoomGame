import Navbar from "./Components/Navbar/Navbar";
import "./MyCss/styles.css";
import Content from "./Components/GraphConent/Content/Content";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import LesArcsPage from "./Components/LesArcs/LesArcsPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/graph" element={<Content className="content" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lesarcs" element={<LesArcsPage />} />

          <Route path="/" element={null} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
