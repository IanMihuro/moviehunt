
import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { connect } from "react-redux";

import { deleteMovie } from '../../store/actions/index';

function mapDispatchToProps(dispatch) {
  return {
    deleteMovie: movie => dispatch(deleteMovie(movie))
  };
}

class MovieMenu extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  hanldeDelete = () => {
    this.props.deleteMovie(this.props.movie);
    this.props.onNotifyDelete();
    this.handleClose();

  }

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}          
        >
          <MenuItem onClick={this.handleClose}>Edit</MenuItem>
          <MenuItem onClick={this.hanldeDelete}>Delete</MenuItem>
          
        </Menu>
      </div>
    );
  }
}

const MovieMenuComponent = connect(null, mapDispatchToProps)(MovieMenu)
export default MovieMenuComponent;