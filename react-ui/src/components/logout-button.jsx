// following https://auth0.com/blog/complete-guide-to-react-user-authentication/#Add-User-Authentication

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout } = useAuth0(); 
    /*
    The logout method is exposed by Auth0Context; it clears the application session and redirects to the Auth0 /v2/logout endpoint
    We can pass an object argument to logout() to define parameters for the logout call. 
    More info:
    https://auth0.com/docs/authenticate/login/logout
    https://auth0.github.io/auth0-react/interfaces/auth0_context.auth0contextinterface.html#logout
    */
    return (
        <button
        className="btn btn-danger btn-blcok"
        onClick={() =>
        logout({
            returnTo: window.location.origin,  //returnTo specifies the URL where Auth0 redirects users

        })
    }
    >Log Out
    </button>)
}

export default LogoutButton;