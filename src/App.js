// import logo from './logo.svg';
import './App.scss';
import * as Pages from './pages'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch >
          <Route path="/play" render={Pages.Game} />
          <Route path="/" render={Pages.Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
