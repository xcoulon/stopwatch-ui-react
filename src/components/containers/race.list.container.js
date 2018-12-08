import React, { Component } from 'react';
import * as api from '../../api/races.api'
import RaceList from '../views/race.list.view';

class RaceListContainer extends Component {
  state = {
    fetched: false,
    races: []
  };
  componentDidMount() {
    api.getRaces().then(races => this.setState({ 
        fetched: true, 
        races: races
    }));
  }
  render() {
    if (!this.state.fetched) {
      return (<div className='spinner'></div>);
    }
    return (<RaceList races={this.state.races} />);
  }
}

export default RaceListContainer;
