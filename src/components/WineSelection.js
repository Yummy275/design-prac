import React, { useState, useRef } from 'react';
import styles from './WineSelection.module.css';

import WineSelectionTab from './WineSelectionTab';

import la from '../images/arrowbtnL.svg';
import ra from '../images/arrowbtnR.svg';
import tabOneImg from '../images/house-wine.jpg';
import tabTwoImg from '../images/famous-wine.jpeg';
import tabThrImg from '../images/wine-tasting-one.jpg';

const WineSelection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabsContainerRef = useRef();

    const tabOneDesc =
        'Our classic house wines created right here, with love and care.';
    const tabTwoDesc =
        'Famous wines from around the world inluding Marchesi Antinori, Harlan Estate, and more.';
    const tabThrDesc =
        'House and famous wines that are in limited supply. VIP Only.';

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
                        <WineSelectionTab
                            title="House Wines"
                            pic={tabOneImg}
                            desc={tabOneDesc}
                        ></WineSelectionTab>
                        <WineSelectionTab
                            title="World Famous"
                            pic={tabTwoImg}
                            desc={tabTwoDesc}
                        ></WineSelectionTab>
                        <WineSelectionTab
                            title="Private Selection"
                            pic={tabThrImg}
                            desc={tabThrDesc}
                        ></WineSelectionTab>
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
