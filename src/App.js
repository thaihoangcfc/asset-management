import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Location from './pages/Location';

function App() {
  return (
    <div className="App">
      <Location/>
    </div>
  );
}

export default App;
