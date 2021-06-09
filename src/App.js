// import logo from './logo.svg';
import './App.scss';
import * as Pages from './pages'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch >
        <Route exact path="/" component={Pages.Home} />
        <Route path="/play" component={Pages.Game} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
