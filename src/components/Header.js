import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return(
        <header className='app-header'>
            <h1>מילי מצלם</h1>
            <p>צילומים אישיים וצילומי פעילות</p>
            <Navigation />
        </header>
    )
}

export default Header;