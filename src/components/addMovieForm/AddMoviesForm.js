import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import DateRangeIcon from '@material-ui/icons/CalendarToday';
import UploadIcon from '@material-ui/icons/CloudUpload';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import { connect } from "react-redux";
import { addMovie } from '../../store/actions/index';
import uuid from "uuid";

const styles = theme => ({
  textInput:{
    backgroundColor: '#3d3d5c',
    color:'white'
  },
  text: {
    color: 'white',
  },
  dialogPaper: {
    minHeight: '45vh',
    maxWidth: '70vh',
},
});

function mapDispatchToProps(dispatch) {
  return {
    addMovie: myMovies => dispatch(addMovie(myMovies))
  };
}

class AddMovieForm extends Component {

  state = {
    id: uuid.v4(),
    original_title: '',
    vote_average: null,
    release_date: '',
    poster_path: '',
    overview: '',
  }

  onClose = () => {
    this.props.onCloseAddMovies()
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });

  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addMovie(this.state);
    this.setState({
      id: uuid.v4(),
      original_title: '',
      vote_average: 0,
      release_date: '',
      poster_path: '',
      overview: '',
    })
    this.props.onNotifyAdd();
    this.onClose();
  }

  render() {
    const { isAddMovieOpen, onCloseAddMovies, classes } = this.props;
    const {original_title, vote_average, release_date, overview, poster_path} = this.state;
    return(
      <div>
        <Dialog
          onClose={onCloseAddMovies}
          aria-labelledby="customized-dialog-title"
          open={isAddMovieOpen}
          fullWidth={true}
          classes={{ paper: classes.dialogPaper }}
        >
        <DialogTitle           
          style={{
            backgroundColor: '#33334d',
          }}>
            <div style={{ display:'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
              <IconButton aria-label="Close" onClick={onCloseAddMovies}>
                <CloseIcon />
              </IconButton>
            </div> 
        </DialogTitle>
        <DialogContent
          style={{
            backgroundColor: '#33334d',
          }}
        >
          <form>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <span style={{ color: '#ffffff' }}><strong>NEW MOVIE</strong></span>
              </div>            
                <TextField
                  name="original_title"
                  value={original_title}
                  margin="normal"
                  variant="outlined"
                  type="text"
                  placeholder="Movie Title"
                  onChange={this.handleChange}
                  InputProps={{
                    classes: {
                      input: classes.textInput
                    }
                  }}
                />
                <TextField
                  name="vote_average"
                  value={vote_average}
                  margin="normal"
                  variant="outlined"
                  type="number"                  
                  placeholder="rating"
                  onChange={this.handleChange}
                  InputProps={{
                    classes: {
                      input: classes.textInput
                    }
                  }}
                />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent:' space-between'}}>
                  <TextField
                    name="release_date"
                    value={release_date}
                    margin="normal"
                    variant="outlined"
                    type="date"
                    placeholder="Date of launch"
                    onChange={this.handleChange}
                    InputProps={{
                      classes: {
                        input: classes.textInput
                      },
                      endAdornment: (
                        <InputAdornment position="end">
                          <DateRangeIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                  name="poster_path"
                  value={poster_path}
                  margin="normal"
                  variant="outlined"
                  type="text"
                  placeholder="Movie Poster"
                  onChange={this.handleChange}
                  InputProps={{
                    classes: {
                      input: classes.textInput
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <UploadIcon />
                      </InputAdornment>
                    ),
                  }}
                  />
                </div>
                <TextField
                  name="overview"
                  value={overview}
                  multiline
                  rows="4"
                  placeholder="Movie overview"
                  margin="normal"
                  variant="outlined"
                  onChange={this.handleChange}
                  InputProps={{
                    classes: {
                      input: classes.textInput
                    }
                  }}
                />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent:' space-between'}}>
                  <Button color="primary" style={{ color: 'white'}} onClick={this.onClose}>
                  Cancel
                  </Button>
                  <Button type="submit" variant="contained" size="large" color="primary" style={{ marginTop: '16px', marginBottom: '16px'}} onClick={this.onSubmit}>
                    Add Movie
                  </Button>
                </div>                                        
            </div> 
          </form> 
        </DialogContent>          
        </Dialog>
      </div>

    );
  }


}

const AddMovieFormComponent = connect(null, mapDispatchToProps)(AddMovieForm)

export default withStyles(styles)(AddMovieFormComponent);