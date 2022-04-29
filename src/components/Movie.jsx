import React, { Component } from 'react';
import '../styles/movie.css';
class Movie extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className='movie-container'>
                    <img className = 'movie-poster'src={this.props.image}/>
                    <h5 className='movie-title'>{this.props.name}</h5>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Movie ;