import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";

import {AddMenu} from "./components/AddMenu";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-info">
        <a href="/menus" className="navbar-brand">
          Restaurant Menu
        </a>
        <div className="navbar-nav mr-auto">
          {/* <li className="nav-item">
            <Link to={"/menus"} className="nav-link">
              Menu
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
           {/* <Route exact path={["/", "/menus"]} component={TutorialsList} /> */}
          <Route exact path="/add" component={AddMenu} />
          {/* <Route path="/tutorials/:id" component={Tutorial} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
