import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';

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

class Login extends Component {

  changeUsername = (event, value) => {
    this.props.onChangeUsername(event.target.value);
  }
  changePassword = (event, value) => {
    this.props.onChangePassword(event.target.value);
  }
  login = () => {
    this.props.onLogin();
    this.props.closeLoginDialog();
  }

  render() {
    const { loginDialogOpen, closeLoginDialog, classes } = this.props;
    return (
      <div>
        <Dialog
          onClose={closeLoginDialog}
          aria-labelledby="customized-dialog-title"
          open={loginDialogOpen}
          fullWidth={true}
          classes={{ paper: classes.dialogPaper }}
        >
        <DialogTitle           
          style={{
            backgroundColor: '#33334d',
          }}>
            <div style={{ display:'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
              <IconButton aria-label="Close" onClick={closeLoginDialog}>
                <CloseIcon />
              </IconButton>
            </div> 
        </DialogTitle>
        <DialogContent
          style={{
            backgroundColor: '#33334d',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <span style={{ color: '#ffffff' }}><strong>MOVIE HUNT</strong></span>
            </div>
            <TextField
              id="username"
              defaultValue=""
              margin="normal"
              variant="outlined"
              type="text"
              placeholder="username"
              onChange={this.changeUsername}
              InputProps={{
                classes: {
                  input: classes.textInput
                }
              }}
            />
            <TextField
              id="passowrd"
              defaultValue=""
              margin="normal"
              variant="outlined"
              type="password"
              placeholder="password"
              onChange={this.changePassword}
              InputProps={{
                classes: {
                  input: classes.textInput
                }
              }}
            />
            <Button variant="contained" size="large" color="primary" style={{ marginTop: '16px', marginBottom: '16px'}} onClick={this.login}>
              Login
            </Button>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <small className={classes.text}>Don't have an account? <a href='#'>Sign up</a></small>
              <small className={classes.text}>Recover password</small>
            </div>
          </div>  
        </DialogContent>          
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Login);