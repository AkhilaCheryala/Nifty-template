import React from 'react';
import './Timebtn.css';
import logo from '../assets/logo.svg';

const Timebtn = ({ onButtonClick }) => {
    return (
        <div className='header'>
            <button className='min-bar'>
                <p onClick={() => onButtonClick(5)}>5 min</p>
                <p onClick={() => onButtonClick(10)}>10 min</p>
                <p onClick={() => onButtonClick(15)}>15 min</p>
                <p onClick={() => onButtonClick(30)}>30 min</p>
                <p onClick={() => onButtonClick('hour')}>hour</p>
                <p onClick={() => onButtonClick('week')}>1 week</p>
            </button>
            <div className='logo-container'>
                <span className='bi bi-chevron-left'></span>
                <img src={logo} alt='' className='logo' />
                <span>NIFTY 500</span>
                <p> 17568.40 <span className='bi bi-arrow-up-short'>(+0.49)</span> </p>
            </div>
        </div>
    );
};

export default Timebtn;
