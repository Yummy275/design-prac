import React, { useRef } from 'react';
import styles from './WineSelection.module.css';

import WineSelectionTab from './WineSelectionTab';

import la from '../images/arrowbtnL.svg';
import ra from '../images/arrowbtnR.svg';

const WineSelection = () => {
    const tabsContainerRef = useRef();

    const raClick = () => {
        tabsContainerRef.current.style.transform.translate('12rem');
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleDiv}>
                <h2>
                    <span className="redText">Wine</span> Selection
                </h2>
            </div>
            <div className={styles.blendsContainer}>
                <img
                    className={`${styles.arrow} ${styles.la} </div>la} d-md-none`}
                    src={la}
                ></img>
                <div className={styles.tabsWindow}>
                    <div
                        ref={tabsContainerRef}
                        className={styles.tabsContainer}
                    >
                        <WineSelectionTab></WineSelectionTab>
                        <WineSelectionTab></WineSelectionTab>
                        <WineSelectionTab></WineSelectionTab>
                    </div>
                </div>
                <img
                    className={`${styles.arrow} ${styles.ra} d-md-none`}
                    src={ra}
                    onClick={raClick}
                ></img>
            </div>
        </div>
    );
};

export default WineSelection;
