import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FlagIcon from "@material-ui/icons/Flag";
import "../../index.css";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class RaceList extends React.Component {
  render() {
    const races = this.props.races.map(race => (
      <ListItemLink href={race.url}>
        <ListItemIcon>
          <FlagIcon />
        </ListItemIcon>
        <ListItemText primary={race.Name} />
      </ListItemLink>
    ));

    return (
      <div>
        <List component="nav">{races}</List>
      </div>
    );
  }
}

export default RaceList;
