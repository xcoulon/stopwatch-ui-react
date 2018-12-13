import React, { browserHistory } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import RaceListContainer from './components/containers/race.list.container';
import RaceBoardContainer from './components/containers/race.board.container';
import ComponentProperty from './components/containers/home';

ReactDOM.render(
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={ComponentProperty} />
      <Route exact path="/races" component={RaceListContainer} />
      <Route path="/races/:raceID" component={RaceBoardContainer} />
    </div>
  </Router>
  ,
  document.getElementById('root')
)