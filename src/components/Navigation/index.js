import React from 'react';
import {Link} from 'react-router-dom';
import SignOutButton from  '../SignOut';
import  {authUserContext} from '../Session';
import * as ROUTES from '../../constants/routes'

const Navigation =() =>(
    <div>
        <authUserContext.Consumer>
            {authUser =>
                authUser
                ? <NavigationAuth />
                : <NavigationNonAuth /> }
        </authUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
        <ul>
            <li>
                <Link to = {ROUTES.LANDING}>Landing</Link>
            </li>
            <li>
                <Link to = {ROUTES.HOME}>Home</Link>
            </li>
            <li>
                <Link to = {ROUTES.ACCOUNT}>Account</Link>
            </li>
            <li>
                <SignOutButton />
            </li>
        </ul>
            );
const NavigationNonAuth = () => (
        <ul>   
            <li>
                <Link to = {ROUTES.LANDING}>Landing</Link>
            </li>
            <li>
                <Link to = {ROUTES.SIGN_IN}>Sign in</Link>
            </li>
        </ul>
);

export default Navigation;