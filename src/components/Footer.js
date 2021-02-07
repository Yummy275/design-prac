import React from 'react';

import iconI from '../images/instagram.png';
import iconF from '../images/facebook.png';
import iconT from '../images/twitter.png';

const Footer = () => {
    const iconStyle = {
        margin: '0 .5rem 0 .5rem',
    };

    return (
        <div
            className="d-flex"
            style={{
                height: '3rem',
                margin: '1rem auto 0 auto',
                justifyContent: 'space-evenly',
            }}
        >
            <img style={{ iconStyle }} src={iconI}></img>
            <img style={{ iconStyle }} src={iconF}></img>
            <img style={{ iconStyle }} src={iconT}></img>
        </div>
    );
};

export default Footer;
