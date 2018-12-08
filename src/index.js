import React, { browserHistory } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import RaceListContainer from './components/containers/race.list.container';
import RaceBoardContainer from './components/containers/race.board.container';

ReactDOM.render(
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={RaceListContainer} />
      <Route path="/races/:raceID" component={RaceBoardContainer} />
    </div>
  </Router>
  ,
  document.getElementById('root')
)