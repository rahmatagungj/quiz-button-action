import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PlayerProvider from "./contexts/playerActions";
import ActionOne from "./pages/ActionOne";
import ActionTwo from "./pages/ActionTwo";
import Home from "./pages/Home";

function App() {
  return (
    <PlayerProvider>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/one" component={ActionOne} exact />
          <Route path="/two" component={ActionTwo} exact />
        </Switch>
      </Router>
    </PlayerProvider>
  );
}

export default App;
