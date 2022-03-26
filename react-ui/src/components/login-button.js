// Following tutorial: https://auth0.com/blog/complete-guide-to-react-user-authentication/#Set-Up-the-Auth0-React-SDK

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button
        className="btn btn-primary btn-block"
        onClick={() => loginWithRedirect()}  //"loginWithRedirect() is a method exposed by the Auth0Context -prompts user for auth"
        >
            Log In
        </button>
    )
}

export default LoginButton