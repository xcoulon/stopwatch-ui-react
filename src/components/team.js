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
    console.log(
      "one more lap for team with number " + this.state.team.BibNumber
    );
    teams
      .addLap(this.state.team.RaceID, this.state.team.BibNumber)
      .then(team => {
        console.log("updated team " + team.BibNumber);
        this.setState({ team: team });
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