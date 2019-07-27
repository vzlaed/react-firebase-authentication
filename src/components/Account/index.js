import React from 'react'
import {withAuthorization, authUserContext} from '../Session';
import {PasswordForgetForm} from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
    <authUserContext.Consumer>
    {authUser => (
    <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
    </div>  
    )}
    </authUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);

