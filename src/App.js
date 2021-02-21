import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Posts from "./components/Posts";
import Users from "./components/Users";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/users" exact component={Users} />
      </Switch>
    </Router>
  );
};

export default App;
