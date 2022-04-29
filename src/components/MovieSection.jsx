import React, { Component } from 'react';
import '../styles/moviesection.css';
class MovieSection extends Component {
    render() { 
        return (
            <React.Fragment>
                 <section className="p-3 movies-bg">
                    <div className="container-fluid py-6 movies-mod">
                        <h1 className="display-5 fs-30 fw-bold text-start white text-margin ">Movies</h1>
                        <p className="col-md-5 fs-4 text-start text-break white text-margin ">Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
                    </div>
                    </section>
            </React.Fragment>
        );
    }
}
 
export default MovieSection;