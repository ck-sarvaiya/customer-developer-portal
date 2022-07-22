import "./App.css";
import { Switch } from "react-router-dom";
import { SignUpForm } from "./components/SignUpForm";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApproveSignUp } from "./components/ApproveSignUp";
import { MainDashBoard } from "./components/Dashboard";

function App() {
  return (
    <div className="app">
      <Router>
        <MainDashBoard />
      </Router>
    </div>
  );
}

export default App;
