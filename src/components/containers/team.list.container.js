import React, { Component } from "react";
import * as teams from "../../api/teams.api";
import * as races from "../../api/races.api";
import TeamList from "../views/team.list.view";

class TeamListContainer extends Component {
  state = {
    fetched: false,
    teams: []
  };
  componentDidMount() {
    // fetch the race by its id, then the teams
    races.getRace(this.props.match.params.raceID).then(race => {
      this.setState({ race: race });
      teams.getTeams(this.state.race.ID).then(teams =>
        this.setState({
          fetched: true,
          teams: teams,
          race: race
        })
      );
    });
  }
  render() {
    if (!this.state.fetched) {
      return <div className="spinner" />;
    }
    return (
      <TeamList racename={this.state.race.Name} teams={this.state.teams} />
    );
  }
}

export default TeamListContainer;
