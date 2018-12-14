import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TeamCard from "../team";

import * as teams from "../api/teams.api";

const styles = {
  list: {
    display: "grid",
    "grid-template-columns": "repeat(20, 80px)",
    "grid-template-rows": "repeat(12, 100px)"
  },
  card: {
    margin: 5
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  button: {
    margin: 0
  }
};

class TeamList extends React.Component {
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
    const cards = teams.map(team => <TeamCard team={team} key={team.ID} />);
    return (
      <div className={classes.root}>
        <div className={classes.list}>{cards}</div>
      </div>
    );
  }
}

TeamList.propTypes = {
  classes: PropTypes.object.isRequired,
  teams: PropTypes.array.isRequired
};

export default withStyles(styles)(TeamList);
