import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-wrapper'>
        {/*<header className='header'>*/}
            <h1 className='header-logo-title'>Blogotopia</h1>
            <h2 className='header-logo-sign'>...more than text</h2>
        {/*</header>*/}
        </div>
    );
};

export default Header;
