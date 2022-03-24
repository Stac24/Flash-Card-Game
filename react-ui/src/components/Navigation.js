import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
    return (
        <nav>
            <Link to="/" exact> Home Page </Link>
            <Link to="create"> Create Flash Cards </Link>
        </nav>
    );
}

export default Navigation;