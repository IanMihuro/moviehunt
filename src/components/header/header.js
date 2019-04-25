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
import Avatar from '@material-ui/icons/AccountCircle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import TopRatedPage from '../../containers/TopRated/TopRated.js';
import Login from '../../containers/Login/login.js';
import Drawer from '../drawer/drawer.js';
import MyMovies from "../../containers/MyMovies/MyMovies.js";
import AddMoviesForm from '../addMovieForm/AddMoviesForm.js';

function TabContainer(props) {
  return (
    <div component="div" style={{ padding: '50px', height: '100%' }}>
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
    flexGrow: 0.8,
    textAlign: 'center'
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
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

class CenteredTabs extends React.Component {

  state = {
    value: 0,
    isLoggedIn: false,
    loginDialogOpen: false,
    username: '',
    password: '',
    isDrawerOpen: false,
    isAddMovieOpen: false,
  };

  handleChange = (event, value) => {
    this.setState({ 
      value,
    });
  };

  openLoginDialog = () => {
    this.setState({
      loginDialogOpen: true,
    });    
  }

  closeLoginDialog = () => {
    this.setState({
      loginDialogOpen: false,
    });
  }

  onChangeUsername = (value) => {
    this.setState({
      username: value
    });
  }
  onChangePassword = (value) => {
    this.setState({
      password: value
    });
  }
  onLogin = () => {
    const { username, password } = this.state;

    if (username !== '' && password !== '') {
      this.setState({ isLoggedIn: 'true' });
    }
  }
  onOpenDrawer = () => {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) {
      this.setState({
        isDrawerOpen: true
      });
    }
    
  }
  onCloseDrawer = () => {
    this.setState({
      isDrawerOpen: false
    });
  }
  onMyMovies =() => {
    this.setState({
      value: 3,
    })
  }
  onOpenAddMovies =() => {
    this.setState({
      isAddMovieOpen: true,
    });
  }
  onCloseAddMovies =() => {
    this.setState({
      isAddMovieOpen: false,
    });
  }

  onNotifyAdd = () => {
    toast.success("Movie was succesfully added to movie hunt!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000,
    });
  }
  onNotifyDelete = () => {
    toast.error("Movie was succesfully deleted from movie hunt!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000,
    });
  }

  render() {
    const { classes } = this.props;
    const { value, isLoggedIn, loginDialogOpen, isDrawerOpen, isAddMovieOpen } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.onOpenDrawer}
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
              <Tab label="" style={{ display: 'none'}} />
            </Tabs>
            <hr style={{ width: '0.2px', height: '55px', marginLeft: '35px', marginRight: '35px', borderColor: 'grey' }}/>
            { 
              isLoggedIn ? 
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '15%' }}>
                <Button variant="contained" color="primary" style={{ margin: '15px 0px'}} onClick={this.onOpenAddMovies}>+ Add Movie</Button>
                <Avatar alt="Remy Sharp" className={classes.bigAvatar} />
              </div> :
              <div>
                <Button color="inherit" onClick={this.openLoginDialog}>Login</Button>
                <Fab
                  variant="extended"
                  size="medium"
                  aria-label="sign-up"
                  style={{ color: 'blue', marginLeft: '30px'}}
                >          
                  Sign up
                </Fab>
              </div> 
            }          
            
          </Toolbar>
        </AppBar>
        <ToastContainer autoClose={8000} />
        <Drawer isOpen={isDrawerOpen} closeDrawer={this.onCloseDrawer} onMyMovies={this.onMyMovies} />
        <Login loginDialogOpen={loginDialogOpen} closeLoginDialog={this.closeLoginDialog} onChangeUsername={this.onChangeUsername} onChangePassword={this.onChangePassword} onLogin={this.onLogin} />
        <AddMoviesForm onCloseAddMovies={this.onCloseAddMovies} isAddMovieOpen={isAddMovieOpen} onNotifyAdd={this.onNotifyAdd}/> 
        {value === 0 && <TabContainer><TopRatedPage loginDialogOpen={loginDialogOpen} closeLoginDialog={this.closeLoginDialog} /></TabContainer>}
        {value === 1 && <TabContainer>Movies</TabContainer>}
        {value === 2 && <TabContainer>Discover</TabContainer>}
        {value === 3 && <TabContainer><MyMovies isLoggedIn={isLoggedIn} onNotifyDelete={this.onNotifyDelete} /></TabContainer> }        
      </div>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredTabs);
