import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import MoviesList from "./components/MoviesList/MoviesList ";
import { MovieInfo } from './components/MovieInfo/MovieInfo';
import './App.css'


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" component={MoviesList} exact />
        {/* <Route path="/movie/:id" component={MovieInfo}/> */}
      </Switch>
    </Router>
  );
}


export default App;
