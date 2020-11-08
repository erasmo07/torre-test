import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Job from "./Pages/Job";
import User from "./Pages/User";
import NavBar from "./Layout/NavBar";
import { Container } from "react-bootstrap";

/*
  Pages:
    - Search
      - Result
        - Jobs
        - Persons
    - Person
    - Jobs
*/

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Container>
          <Route path="/" exact component={Home} />
          <Route path='/job' exact component={Job} />
          <Route path='/user/:id' component={User} />
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
