import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Favorite from '@material-ui/icons/Favorite';
import Settings from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    backgroundColor: '#33334d',
  },
  list: {
    color: '#ffffff',
  }
});


class SideDrawer extends Component {

  closeDrawer = () => {
    this.props.closeDrawer();
  }

  myMovies =() => {
    this.props.onMyMovies();
    this.closeDrawer();
  }

  render(){
    const listItems = ['Profile', 'My Movies', 'Settings'];
    const {classes} = this.props;
    return(
      <div style={{ flex: 1, flexDirection: 'column', display: 'flex' }}>
        <Drawer open={this.props.isOpen} onClose={this.closeDrawer} classes={{ paper: classes.paper }}>
          <div style={{ display:'flex', justifyContent: 'flex-end' }}>
            <IconButton aria-label="Close" onClick={this.closeDrawer}>
              <CloseIcon />
            </IconButton>
          </div> 
          <div style={{ display:'flex', justifyContent: 'center', flex: 1, flexDirection: 'column' }}>
            <List>
              {
                listItems.map((listItem, index)=> (
                  <ListItem button key={index}>
                  <ListItemIcon >
                    {
                      index === 1 ? <AccountCircle style={{ fill: '#ffffff'}} /> :
                      index === 2 ? <Favorite style={{ fill: '#ffffff'}} /> :
                      <Settings style={{ fill: '#ffffff'}}/>
                    }
                  </ListItemIcon>
                  <strong>
                  <ListItemText primary={listItem} classes={{ primary: classes.list}} onClick={this.myMovies} />
                  </strong>
                  </ListItem>
                ))
              }            
            </List>
          </div>
        </Drawer>  
      </div>  
    );
  }  
}

export default  withStyles(styles)(SideDrawer);