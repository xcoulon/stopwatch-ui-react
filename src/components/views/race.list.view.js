// import React from "react";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import FlagIcon from "@material-ui/icons/Flag";
// import "../../index.css";

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

// class RaceList extends React.Component {
//   render() {
//     const races = this.props.races.map(race => (
//       <ListItemLink href={race.url}>
//         <ListItemIcon>
//           <FlagIcon />
//         </ListItemIcon>
//         <ListItemText primary={race.Name} />
//       </ListItemLink>
//     ));

//     return (
//       <div>
//         <List component="nav">{races}</List>
//       </div>
//     );
//   }
// }

// export default RaceList;

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import Divider from '@material-ui/core/Divider';
import FlagIcon from "@material-ui/icons/Flag";
import DraftsIcon from "@material-ui/icons/Drafts";
// import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: 360
  },
  lists: {
    backgroundColor: theme.palette.background.paper
  }
});

class ListRaceItem extends React.Component {
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

  render() {
    const { icon, primary } = this.props;
    return (
      <li>
        <ListItem button component={this.renderLink}>
          <ListItemIcon> {icon} </ListItemIcon>{" "}
          <ListItemText primary={primary} />{" "}
        </ListItem>{" "}
      </li>
    );
  }
}

ListRaceItem.propTypes = {
  icon: PropTypes.node.isRequired,
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

function ListRaces(props) {
  const { classes, races } = props;

  //   render() {
  //     const races = this.props.races.map(race => (
  //       <ListItemLink href={race.url}>
  //         <ListItemIcon>
  //           <FlagIcon />
  //         </ListItemIcon>
  //         <ListItemText primary={race.Name} />
  //       </ListItemLink>
  //     ));

  //     return (
  //       <div>
  //         <List component="nav">{races}</List>
  //       </div>
  //     );
  //   }

  const raceItems = races.map(race => (
    <ListRaceItem to={race.Href} primary={race.Name} icon={<FlagIcon />} />
  ));
  return (
    <div className={classes.root}>
      <div className={classes.lists}>
        <List component="nav"> {raceItems} </List>{" "}
      </div>{" "}
    </div>
  );
}

ListRaces.propTypes = {
  classes: PropTypes.object.isRequired,
  races: PropTypes.object.isRequired
};

export default withStyles(styles)(ListRaces);
