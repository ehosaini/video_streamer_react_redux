import React, { Component } from 'react';

class GoogleOAuth extends Component {
    constructor (props) {
        super(props);
        this.state = { isSignedIn: null };
    }

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
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                // Listen for user signIn status
                this.auth.isSignedIn.listen(this.isSignedIn);
            });
        });
        
    }

    isSignedIn = (singedIn) => {
        this.setState({ isSignedIn: singedIn });
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderSignInButton(){
        if(this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <button className="ui red google button" onClick={ this.onSignOutClick }>
                    <i className="google icon"/>
                    Sing Out
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={ this.onSignInClick }>
                    <i className="google icon"/>
                    Sing In with Google
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

export default GoogleOAuth;