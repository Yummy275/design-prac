import React from 'react';
import styles from './Intro.module.css';

import tableImg from '../images/bottle-table.jpg';

const Intro = () => {
    return (
        <div>
            <img className={styles.table} src={tableImg}></img>
        </div>
    );
};

export default Intro;
