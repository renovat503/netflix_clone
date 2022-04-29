import React, { Component } from 'react';
import '../styles/footer.css'
class Footer extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className='main-box'>
                    <div className='column one'>
                        <h6 className='small-big'>Questions? Contact us.</h6>
                        <h6 className='small-text'>FAQ</h6>
                        <h6 className='small-text'>Investor Relations</h6>
                        <h6 className='small-text'>Ways to Watch</h6>
                        <h6 className='small-text'>Corporate Information</h6>
                        <h6 className='small-text'>Only on Netflix</h6>
                    </div>
                    <div className='column two'>
                        <h6 className='small-text'>Help center</h6>
                        <h6 className='small-text'>Jobs</h6>
                        <h6 className='small-text'>Terms of service</h6>
                        <h6 className='small-text'>Contact us</h6>
                    </div>
                    <div className='column three'>
                        <h6 className='small-text'>Account</h6>
                        <h6 className='small-text'>Redeem Gift Cards</h6>
                        <h6 className='small-text'>Privacy</h6>
                        <h6 className='small-text'>Speed test</h6>
                    </div>
                    <div className='column four'>
                        <h6 className='small-text'>Media Center</h6>
                        <h6 className='small-text'>Buy Gift Cards</h6>
                        <h6 className='small-text'>Cookie Preferences</h6>
                        <h6 className='small-text'>Legal Notices</h6>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Footer;