import React, {Component} from 'react';
import { connect } from "react-redux";

import Card from '../../components/card/card.js';
import SearchBar from 'material-ui-search-bar';
	
import axios from 'axios';
import { addMovies } from '../../store/actions/index';

function mapDispatchToProps(dispatch) {
  return {
    addMovies: movies => dispatch(addMovies(movies))
  };
}

const mapStateToProps = state => {
  return { movies: state.movies };
}


class TopRated extends Component {


  state = {
    movies: []
  }

  componentDidMount() {
    // Fetch Movie data
    axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=bcd70f2cf4d81d390caf5210f4273487')
    .then(json => {
      this.props.addMovies(json.data.results);
      this.setState({ movies: this.props.movies });
    });
  }

  


  render() {
    const { movies } = this.state;
    const { isLoggedIn } = this.props;
    const placeHolder = <h3> No Movies to dispay</h3>;

    // console.log('[Toprated]this.props', this.props);

    return(
      <div> 
        <div style={{ display:'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', width:'100%'}}>
          <h2>Top rated movies</h2>
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
            movies.length > 0 ?
            movies.map((movie) => <Card key={movie.id} movie={movie} isLoggedIn={isLoggedIn} posterPath={'custom' }/>) :
            placeHolder
          }          
        </div>
      </div>
    );
  };
}

const TopRatedComponent = connect(mapStateToProps, mapDispatchToProps)(TopRated)
export default TopRatedComponent;