import "./App.css";
import { UserList } from "./components/users-list/users-list";
import { UserDetails } from "./components/user-details/user-details";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { history } from "./helpers";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/list" component={UserList}></Route>
        <Route path="/details/:id" component={UserDetails}></Route>
        <Redirect from="*" to="/list" />
      </Switch>
    </Router>
  );
}

export default App;
