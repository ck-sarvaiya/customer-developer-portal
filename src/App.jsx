import "./App.css";
import { Switch } from "react-router-dom";
import { SignUpForm } from "./components/SignUpForm"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <SignUpForm />
    </div>
  );
}

export default App;
