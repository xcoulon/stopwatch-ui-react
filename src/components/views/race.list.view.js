
import React from 'react';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

// import { BrowserRouter, Route, Link } from 'react-router-dom'
import '../../index.css';

class RaceList extends React.Component {
    render() {
        const races = this.props.races.map((race) =>
            <Link
                    to={`/races/${race.ID}`}
                    key={race.ID}
                    >
                    {race.Name}
            </Link>
        );
  
        return (
            <div className="race-list">{races}</div>
        );
    }
}
  
export default RaceList;
  