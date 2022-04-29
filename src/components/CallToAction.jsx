import React, { Component } from 'react';
import '../styles/calltoaction.css';
class CallToAction extends Component {
    render() { 
        return (
            <React.Fragment>
                <section className='cust'>
                    <div className='text-cont'>
                        <h1 className='calltitle'>There's even more to watch.</h1>
                        <p className='calltext'>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                        <div>
                            <button type="button" className="btn btn-danger button-cust">JOIN NOW</button>
                        </div>
                        </div>
                </section>
            </React.Fragment>
        );
    }
}
 
export default CallToAction;