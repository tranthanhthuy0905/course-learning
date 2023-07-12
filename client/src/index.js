import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import App from "./App";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import Milestones from "./pages/Milestones";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/home" exact element={<Home />} /> */}
      <Route path="/setting" exact element={<Setting />} />
      <Route path="/milestones" exact element={<Milestones />} />
    </Routes>
  </Router>
);
