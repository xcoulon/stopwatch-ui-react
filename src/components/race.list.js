import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FlagIcon from "@material-ui/icons/Flag";
import { Link } from "react-router-dom";

import * as api from "../api/races.api";

const styles = theme => ({
  root: {
    margin: "auto",
    width: 360
  },
  lists: {
    backgroundColor: theme.palette.background.paper
  }
});

class RaceList extends React.Component {
  state = {
    fetched: false,
    races: []
  };

  componentDidMount() {
    api.getRaces().then(races =>
      this.setState({
        fetched: true,
        races: races
      })
    );
  }

  render() {
    const { classes } = this.props;
    if (!this.state.fetched) {
      return <div className="spinner" />;
    }
    const raceItems = this.state.races.map(race => (
      <RaceListItem to={race.Href} primary={race.Name} icon={<FlagIcon />} />
    ));
    return (
      <div className={classes.root}>
        <div className={classes.lists}>
          <List component="nav"> {raceItems} </List>{" "}
        </div>{" "}
      </div>
    );
  }
}

class RaceListItem extends React.Component {
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

RaceListItem.propTypes = {
  icon: PropTypes.node.isRequired,
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};


RaceList.propTypes = {
  classes: PropTypes.object.isRequired,
  races: PropTypes.object.isRequired
};

export default withStyles(styles)(RaceList);
