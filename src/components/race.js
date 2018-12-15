import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TeamCard from "./team";
import Button from "@material-ui/core/Button";

import * as races from "../api/races.api";
import * as teams from "../api/teams.api";

const styles = {
  root: {
    display: "grid"
    // "grid-template-columns": "repeat(4, 1fr)",
    // "grid-gap": "10px",
    // "grid-auto-rows": "200px",
  },
  list: {
    "align-self": "center",
    "justify-self": "center",
    display: "grid",
    "grid-template-columns": "repeat(15, 80px)",
    "grid-template-rows": "repeat(12, 100px)"
  },
  title: {
    "text-align": "center",
    "font-family": "'Roboto', sans-serif;"
  },
  button: {
    margin: 0
  },
  startButton: {
    float: "right",
    "margin-right": 10
  }
};

class Race extends React.Component {
  state = {
    fetched: false
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
  startRace = event => {
    races.startRace(this.state.race.ID).then(race => {
      console.log("race started at " + race.StartTime);
      this.setState({ race: race });
    });
  };
  firstLap = event => {
    console.log("race " + this.state.race.Name);
    races.startRace(this.state.race.ID).then(race => {
      console.log("race started at " + race.StartTime);
      this.setState({ race: race });
    });
  };
  render() {
    const { classes } = this.props;
    if (!this.state.fetched) {
      return <div className="spinner" />;
    }
    const cards = this.state.teams.map(team => (
      <TeamCard key={team.ID} team={team} />
    ));
    return (
      <div>
        <div>
          <Button
            className={classes.startButton}
            variant="contained"
            color="primary"
            onClick={this.startRace}
            disabled={this.state.race.StartTime > "2018-12-15 11:52:13"}
          >
            start
          </Button>
          <Button
            className={classes.startButton}
            variant="contained"
            color="primary"
            onClick={this.firstLap}
          >
            1st lap
          </Button>
          <h1 className={classes.title}>{this.state.race.Name}</h1>
        </div>
        <div className={classes.root}>
          <div className={classes.list}>{cards}</div>
        </div>
      </div>
    );
  }
}

Race.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Race);
