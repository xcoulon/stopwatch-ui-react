import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InfoFlag from "@material-ui/icons/Flag";

import * as teams from "../api/teams.api";

const styles = {
  list: {
    display: "grid",
    "grid-template-columns": "repeat(20, 80px)",
    "grid-template-rows": "repeat(12, 100px)"
  },
  buttonwrapper: {
    margin: "0 auto"
  },
  button: {
    margin: 0,
    display: "inline",
    "font-size": 18,
  },
  icons: {
    padding: 0,
    display: "block",
    margin: "auto"
  },

  icon: {
    "font-size": 12
  }
};

class TeamCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: props.team
    };
  }

  addLap = event => {
    teams
      .addLap(this.state.team.RaceID, this.state.team.BibNumber)
      .then(team => {
        this.setState({ team: team });
        console.log(
          "team #" + this.state.team.BibNumber + ": " + this.state.team.Laps[this.state.team.Laps.length-1].Time.substring(11, 19)); // 2018-12-16T12:34:56Z
      });
  };

 

  render() {
    const { classes } = this.props;

    return (
      <div className={this.props.classes.buttonwrapper}>
        <Button
          className={this.props.classes.button}
          size="small"
          onClick={this.addLap}
        >
        <div>{this.state.team.BibNumber}</div>  
        <div className={classes.icons}>
          {this.state.team.Laps.map(lap => (
            <InfoFlag key={lap.ID} className={this.props.classes.icon} />
          ))}
        </div>
        </Button>
        <div>
        </div>
      </div>
    );
  }
}

TeamCard.propTypes = {
  classes: PropTypes.object.isRequired,
  team: PropTypes.object.isRequired
};

export default withStyles(styles)(TeamCard);
