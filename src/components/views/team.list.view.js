// import React from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// import "typeface-roboto";
// import "../../index.css";
// import * as teams from "../../api/teams.api";

// class BibNumber extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       team: props.team
//     };
//   }

//   handleClick(raceId, bibNumber) {
//     console.log("one more lap for team with number " + bibNumber);
//     teams.addLap(raceId, bibNumber).then(team => {
//       console.log("updated team: " + team);
//       this.setState({ team: team });
//     });
//   }

//   render() {
//     const laps = this.state.team.Laps.map(lap => (
//       <FontAwesomeIcon icon={faFlagCheckered} />
//     ));

//     return (
//       <div class="team">
//         <button
//           className="bib-number"
//           onClick={() =>
//             this.handleClick(this.state.team.RaceID, this.state.team.BibNumber)
//           }
//         >
//           {this.state.team.BibNumber}
//         </button>
//         <div class="laps">{laps}</div>
//       </div>
//     );
//   }
// }

// const styles = {
//   card: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// };

// function BibNumber(props) {
//   const { classes } = props;
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card className={classes.card}>
//       <CardContent>
//         <Typography className={classes.title} color="textSecondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="h2">
//           be
//           {bull}
//           nev
//           {bull}o{bull}
//           lent
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           adjective
//         </Typography>
//         <Typography component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

// BibNumber.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// class RaceBoard extends React.Component {
//   render() {
//     const bibNumbers = this.props.teams.map(team => (
//       withStyles(styles)(BibNumber)
//     ));

//     return (
//       <div>
//         <div className="status">
//           <h1> {this.props.racename} </h1>
//           <Button color="primary">Back</Button>
//         </div>
//         <div className="wrapper"> {bibNumbers} </div>{" "}
//       </div>
//     );
//   }
// }

// export default RaceBoard;

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import InfoIcon from "@material-ui/icons/Info";

import * as teams from "../../api/teams.api";

const styles = {
  list: {
    display: "grid",
    "grid-template-columns": "repeat(20, 80px)",
    "grid-template-rows": "repeat(12, 100px)"
  },
  card: {
    // minWidth: 275,
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

function handleClick(raceId, bibNumber) {
  console.log("one more lap for team with number " + bibNumber);
  teams.addLap(raceId, bibNumber).then(team => {
    console.log("updated team: " + team);
    team.setState({ team: team });
  });
}

function TeamCards(props) {
  const { classes, teams } = props;
  const bull = <span className={classes.bullet}>•</span>;

  const cards = teams.map(team => (
    // <Card className={classes.card}>
    //   <CardContent>
    //     <Typography className={classes.title} color="textSecondary" gutterBottom>
    //       Word of the Day
    //     </Typography>
    //     <Typography >
    //       {team.BibNumber}
    //     </Typography>

    //     <Typography className={classes.pos} color="textSecondary">
    //       adjective
    //     </Typography>
    //     <Typography component="p">
    //       well meaning and kindly.
    //       <br />
    //       {'"a benevolent smile"'}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //   <Button className={classes.button} size="large">{team.BibNumber}</Button>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
    <div>

    <Button
      className={classes.button}
      size="small"
      onClick={() => handleClick(team.RaceID, team.BibNumber)}
      >
      {team.BibNumber}
    </Button>
    {team.Laps.map(lap =>
        <InfoIcon/>
        )}
        </div>

  ));
  return (
    <div className={classes.root}>
      <div className={classes.list}>{cards}</div>
    </div>
  );
}

TeamCards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TeamCards);

