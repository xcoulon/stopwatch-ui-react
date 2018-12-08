
import React, { Component } from 'react';
import * as teams from '../../api/teams.api'
import * as races from '../../api/races.api'
import RaceBoard from '../views/race.board.view';

class RaceBoardContainer extends Component {
  state = {
    fetched: false,
    teams: []
  };
  componentDidMount() {
    // fetch the race by its id, then the teams 
    races.getRace(this.props.match.params.raceID).then(race => {
      this.setState({race: race});
      console.log("state: " + JSON.stringify(this.state))
      teams.getTeams(this.state.race.ID).then(teams => this.setState({ 
        fetched: true,
        teams: teams, 
        race: race
      }));
      
    });
  }
  render() {
    if (!this.state.fetched) {
      return (<div className='spinner'></div>);
    }
    return (<RaceBoard racename={this.state.race.Name} teams={this.state.teams} />);
  }
}

export default RaceBoardContainer;
