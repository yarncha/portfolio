import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

// CSS
import './App.css';

// Components
import { MainPage } from "./components/MainPage.js";

function App() {
  return (
    <div className="App">
      <div className="nav-var">
        
      </div>

      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>

<footer></footer>
    </div>
  );
}

export default App;
