import React from 'react'

class GoogleAuth extends  React.Component {
    state = { isSignedIn: null};

    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '282299389095-1bua7bhs96qse2kg1lduoa9r7n5vgood.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });

    }



    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return null;
        }
        else if(this.state.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>
                    Sing Out
                </button>
            );
        }
        else{
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign In
                </button>
            );
        }
    }

    onAuthChange = () =>{
        this.setState({ isSignedIn: this.auth.isSignedIn.get()});
    }

    onSignInClick = () =>{
        this.auth.signIn();
    }

    onSignOutClick = () =>{
        this.auth.signOut();
    }

    render(){
        return(
            <div>
               {this.renderAuthButton()}
            </div>
        );
    }
}

export default GoogleAuth;