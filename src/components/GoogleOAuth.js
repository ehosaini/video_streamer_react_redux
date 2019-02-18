import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleOAuth extends Component {

    componentDidMount() {
        // load the auth2 library via gapi which is attached to the window object
        // gapi library is added as a script to public/index.html
        window.gapi.load('client:auth2', () => {
            // Iniital the GoogleAuth Object with clientId and scope 
            window.gapi.client.init({
                clientId: '161776705737-elortrko3ria40mslr0vghcp1hjiubbq.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => { 
                this.auth = window.gapi.auth2.getAuthInstance();
                // Set state based on whether user is signed in
                this.onAuthChange(this.auth.isSignedIn.get());
                // Listen for user signIn status and update store when it changes
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        }); 
    }

    onAuthChange = (isSignedIn) => {
       if(isSignedIn) {
         this.props.signIn();
       } else {
         this.props.signOut();
       }
    }

    onSignInClick = () => {
        this.auth.signIn();        
    }

    onSignOutClick = () => {   
        this.auth.signOut();   
    }

    renderSignInButton(){
        if(this.props.isSignedIn === null){
            return null;
        } else if(this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={ this.onSignOutClick }>
                    <i className="google icon"/>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={ this.onSignInClick }>
                    <i className="google icon"/>
                    Sign In with Google
                </button>
            );
        }   
    }

    render(){
        return(
            <div>{ this.renderSignInButton() }</div>
        );
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, {
    signIn,
    signOut
})(GoogleOAuth);