import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

function Header() {
    return (
        <>            
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/react/">
                <img src={logo} alt='logoImg' width='70vw' />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/react/Home">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/react/About">About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/react/Contact">Contact</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </>    
    );
}

export default Header;