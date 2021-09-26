import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="nav-bar">
                <div>
                    <a href="/Home">Home</a>
                    <a href="/Bilionaries">Top Donar</a>
                    <a href="/Learn">Learn More</a>
                </div>
                <div>
                    <input type="text" name="" id="" />
                    <button className='search-button'>Search</button>
                </div>
            </nav>
            <div className='top-section'>
                <h1>Sacrifice-Gift</h1>
                <p>Donate Your Money To Help Homeless People And Save Some Life.</p>
                <p>Donation Collect(2020): 100 Million</p>
            </div>
            <p style={{ textAlign: 'center' }}>Top donar</p>
        </div >
    );
};

export default Header;