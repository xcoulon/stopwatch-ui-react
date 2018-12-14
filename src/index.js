import React, { browserHistory } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import RaceList from './components/race.list';
import Race from './components/race';

ReactDOM.render(
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={RaceList} />
      <Route path="/races/:raceID" component={Race} />
    </div>
  </Router>
  ,
  document.getElementById('root')
)