import React, {Component} from 'react';

import Menu from '../../components/menu/menu';

class Card extends Component {

  render() {
    const {release_date, first_air_date, poster_path, original_title, overview, vote_average, name } = this.props.movie;
    const {isLoggedIn, posterPath, onNotifyDelete} = this.props;
    return(
      <div style={{ margin: '10px 10px 100px 10px',  backgroundColor: '#33334d', display: 'flex', flexDirection: 'row', paddingBottom: '20px', paddingLeft: '15px', width: '500px'}}>
      { 
        posterPath === 'custom' ? <img alt='movie poster' src={ 'https://image.tmdb.org/t/p/w200/'+ poster_path} style={{zIndex: 1, position: 'relative', bottom: '50px' }} /> :
        <img alt='movie poster' src={poster_path} style={{zIndex: 1, position: 'relative', bottom: '50px' }} />
      }
        
             
          <div style={{ display: 'flex', flexDirection: 'column', margin: '0px 5px'}}>
            { isLoggedIn ? <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}><Menu movie={this.props.movie} onNotifyDelete={onNotifyDelete}/></div> : null }                
            <div style={{ display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'space-between'}}>
              <span><h2>{original_title || name }</h2></span> &nbsp;&nbsp;&nbsp; <span style={{ color: 'lime'}}>{vote_average}</span>
            </div>
            <span style={{ margin: '10px 0px'}}><small>{release_date || first_air_date}</small></span>
            <span style={{ maxHeight: '89px', overflow: 'hidden', textOverflow: 'ellipsis'}}>{overview}...</span>        
          </div>     
      </div>
    );
    }  
}

export default Card;