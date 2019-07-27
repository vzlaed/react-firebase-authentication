import React from 'react'
import authUserContext from './context';
import {withFirebase} from '../Firebase';


const withAuthenticator = Component => {
    class withAuthenticator extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                authUser : null,
            }
        }
    componentDidMount(){
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser
            ? this.setState({authUser})
            : this.setState({authUser:null});
        });
    }
    componentWillUnmount(){
        this.listener();
    }
        render(){
            return (
                <authUserContext.Provider value ={this.state.authUser}>
                    <Component {...this.props} />
                </authUserContext.Provider>
            );
        }

    }
    return withFirebase(withAuthenticator);
}

export default withAuthenticator
