import React from 'react';
import styles from './Header.module.css';
const Header = () => {
    return (
        <div className={`${styles.headerCon} stdBoxShadow`}>
            <div className={`${styles.words} stdBoxShadow`}>
                <h1 style={{ color: '#ff3f3f', fontFamily: 'Charm, cursive' }}>
                    Globules Vineyard
                </h1>
            </div>
        </div>
    );
};

export default Header;
