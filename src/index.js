import React, { browserHistory } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import RaceList from './components/race.list';
import TeamListContainer from './components/containers/team.list.container';

ReactDOM.render(
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={RaceList} />
      <Route path="/races/:raceID" component={TeamListContainer} />
    </div>
  </Router>
  ,
  document.getElementById('root')
)