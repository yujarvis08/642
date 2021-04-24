import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import CalendarPage from "./components/CalendarPage";
import "bootstrap/dist/css/bootstrap.css"
import Meals from "./components/Meals";
import Statistics from "./components/Stats";
import ValuePage from "./components/Values";
import Diets from "./components/Diets";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={CalendarPage} />
      <Route exact path="/diets" component={Diets} />
      <Route exact path="/meals" component={Meals} />
      <Route exact path="/stats" component={Statistics} />
      <Route exact path="/values" component={ValuePage} />
    </BrowserRouter>
  );
}

export default App;
