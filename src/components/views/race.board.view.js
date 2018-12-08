
import React from 'react';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
import '../../index.css';


class BibNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            team: props.team,
        };
    }

    render() {
        return (
            <button className="bib-number">
                {this.state.team.BibNumber}
            </button>
        );
    }
}

  
class RaceBoard extends React.Component {
  
    render() {
        const bibNumbers = this.props.teams.map((team) =>
            <BibNumber key={team.ID} team={team} /> 
        );
  
        return (
            <div>
                <div className="status"><h1>{this.props.racename}</h1></div>
                <div className="wrapper">{bibNumbers}</div>
            </div>
        );
    }
}
  
export default RaceBoard;
  