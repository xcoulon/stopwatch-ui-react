import React from "react";
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";

import "../../index.css";
import * as teams from "../../api/teams.api";

class BibNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: props.team
    };
  }

  handleClick(raceId, bibNumber) {
    console.log("one more lap for team with number " + bibNumber);
    teams.addLap(raceId, bibNumber).then(team => {
      console.log("updated team: " + team);
      this.setState({ team: team });
    });
  }

  render() {
    const laps = this.state.team.Laps.map(lap => (
      <FontAwesomeIcon icon={faFlagCheckered} />
    ));

    return (
      <div class="team">
        <button
          className="bib-number"
          onClick={() =>
            this.handleClick(this.state.team.RaceID, this.state.team.BibNumber)
          }
        >
          {this.state.team.BibNumber}
        </button>
        <div class="laps">{laps}</div>
      </div>
    );
  }
}

class RaceBoard extends React.Component {
  render() {
    const bibNumbers = this.props.teams.map(team => (
      <BibNumber key={team.ID} team={team} />
    ));

    return (
      <div>
        <div className="status">
          {" "}
          <h1> {this.props.racename} </h1>
        </div>
        <div className="wrapper"> {bibNumbers} </div>{" "}
      </div>
    );
  }
}

export default RaceBoard;
