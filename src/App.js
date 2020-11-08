import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Job from "./Pages/Job";
import User from "./Pages/User";
import NavBar from "./Layout/NavBar";
import { Container } from "react-bootstrap";
import { useState } from "react";

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

  const [search, setSearch] = useState([]);

  return (
    <Router>
      <NavBar setSearch={setSearch}/>
      <Switch>
        <Container>
          <Route path="/" exact>
            <Home search={search} />
          </Route>
          <Route path='/job' exact component={Job} />
          <Route path='/user/:username' component={User} />
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
