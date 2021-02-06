import React from 'react';
import styles from './Header.module.css';
const Header = () => {
    return (
        <div className={`${styles.headerCon} stdBoxShadow`}>
            <div className={`${styles.words} stdBoxShadow`}>
                <h1
                    className="redText"
                    style={{ fontFamily: 'Charm, cursive' }}
                >
                    Magdalenos Vineyard
                </h1>
            </div>
        </div>
    );
};

export default Header;
