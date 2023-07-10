import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import Milestones from "./pages/Milestones";

function App() {
  return (
    <div className="self-study">
      <header className="header"></header>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/setting" component={Setting} />
          <Route path="/milestones" component={Milestones} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
