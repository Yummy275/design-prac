import React, { useState, useRef } from 'react';
import styles from './WineSelection.module.css';

import WineSelectionTab from './WineSelectionTab';

import la from '../images/arrowbtnL.svg';
import ra from '../images/arrowbtnR.svg';

const WineSelection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabsContainerRef = useRef();

    const raClick = () => {
        if (activeTab == 0) {
            setActiveTab(1);
        } else if (activeTab == 1) {
            setActiveTab(2);
        }
    };

    const laClick = () => {
        if (activeTab == 2) {
            setActiveTab(1);
        } else if (activeTab == 1) {
            setActiveTab(0);
        }
    };

    console.log(activeTab);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleDiv}>
                <h2>
                    <span className="redText">Wine</span> Selection
                </h2>
            </div>
            <div className={styles.blendsContainer}>
                <img
                    className={`${styles.arrow} ${styles.la}  d-md-none`}
                    src={la}
                    onClick={laClick}
                ></img>
                <div className={styles.tabsWindow}>
                    <div
                        style={{
                            transform:
                                activeTab === 0
                                    ? 'translate(0,0)'
                                    : activeTab === 1
                                    ? 'translate(-11.5rem, 0)'
                                    : activeTab === 2
                                    ? 'translate(-23rem, 0)'
                                    : '',
                            transition: 'transform .8s ease-in-out',
                        }}
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
