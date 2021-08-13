import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ActionOne from "./pages/ActionOne";
import ActionTwo from "./pages/ActionTwo";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/one" component={ActionOne} />
        <Route path="/two" component={ActionTwo} />
      </Switch>
    </Router>
  );
}

export default App;
