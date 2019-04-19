import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Fab from '@material-ui/core/Fab';

// import TopRatedPage from '../../containers/TopRated';

function TabContainer(props) {
  return (
    <div component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#3d3d5c',
    color: '#ffffff',
  },
  grow: {
    flexGrow: 0.8
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    backgroundColor: '#33334d',
    color: '#ffffff',
  },
  indicator: {
    backgroundColor: '#66a3ff',
  },
  signUp: {
    backgroundColor: '#ffffff',
    color: '0066ff',
  },
});
class CenteredTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              MovieHunt
            </Typography>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={this.handleChange}
              classes={{
                indicator: classes.indicator
              }}
            >
              <Tab label="Top Rated" />
              <Tab label="Movies" />
              <Tab label="Discover" />
            </Tabs>
            <hr style={{ width: '0.2px', height: '55px', marginLeft: '35px', marginRight: '35px', borderColor: 'grey' }}/>
            <Button color="inherit">Login</Button>
            <Fab
            variant="extended"
            size="medium"
            aria-label="sign-up"
            style={{ color: 'blue'}}
            >          
            Sign up
          </Fab>
          </Toolbar>
        </AppBar>
        {value === 0 && <TabContainer>Top Rated</TabContainer>}
        {value === 1 && <TabContainer>Movies</TabContainer>}
        {value === 2 && <TabContainer>Discover</TabContainer>}
      </div>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredTabs);
