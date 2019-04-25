import React,  {Component} from 'react';
import { connect } from "react-redux";

import Card from '../../components/card/card.js';
import SearchBar from 'material-ui-search-bar';

const mapStateToProps = state => {
  return { myMovies: state.myMovies };
}

class MyMovies extends Component {

  render() {
    const { isLoggedIn, myMovies, onNotifyDelete } = this.props;
    const placeHolder = <span>No Movies Yet</span>;
    return(
      <div style={{height: '100vh'}}>
        <div style={{ display:'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', width:'100%'}}>
          <h2> My movies</h2>
          <SearchBar
            onChange={() => console.log('onChange')}
            onRequestSearch={() => console.log('onRequestSearch')}
            style={{
              margin: '0 300px',
              maxWidth: 800,
            }}
          />          
        </div>        
        <div style={{ display: 'flex', direction: 'row', marginTop: '150px', marginBottom: '150px', flexWrap: 'wrap'}}>
          { 
            myMovies.length > 0 ?
            myMovies.map((movie) => <Card key={movie.id} movie={movie} isLoggedIn={isLoggedIn} onNotifyDelete={onNotifyDelete} />) :
            placeHolder
          }          
        </div>
      </div>
    );
  }
}

const MyMoviesComponent = connect(mapStateToProps, )(MyMovies)
export default MyMoviesComponent;