import React from 'react';
import styles from './WineSelection.module.css';

import WineSelectionTab from './WineSelectionTab';

import la from '../images/arrowbtnL.svg';
import ra from '../images/arrowbtnR.svg';

const WineSelection = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleDiv}>
                <h2>
                    <span className="redText">Wine</span> Selection
                </h2>
            </div>
            <div className={styles.blendsContainer}>
                <img className={styles.arrow} src={la}></img>
                <div className={styles.tabsWindow}>
                    <div className={styles.tabsContainer}>
                        <WineSelectionTab></WineSelectionTab>
                        <WineSelectionTab></WineSelectionTab>
                        <WineSelectionTab></WineSelectionTab>
                    </div>
                </div>
                <img className={styles.arrow} src={ra}></img>
            </div>
        </div>
    );
};

export default WineSelection;
