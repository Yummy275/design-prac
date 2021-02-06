import React from 'react';
import styles from './Intro.module.css';

import tableImg from '../images/bottle-table.jpg';
import vineyardImg from '../images/intro-vineyard.jpg';

const Intro = () => {
    return (
        <div>
            <div className={`${styles.tableDiv} d-lg-flex`}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    convallis tincidunt urna sit amet bibendum. Donec accumsan
                    non mauris vel dapibus. Pellentesque ac elit nibh. Curabitur
                    id mauris ac ipsum sollicitudin eleifend. Proin mauris
                    ipsum, tincidunt ut eros ut, fringilla pharetra neque.
                    Maecenas aliquam massa a ipsum semper accumsan. Nulla
                    efficitur sodales arcu non hendrerit. Sed maximus est sem,
                    ut viverra leo varius vitae. Phasellus venenatis laoreet
                    malesuada. Aliquam ullamcorper metus non elit vestibulum, eu
                    eleifend erat blandit.
                </p>
                <div className="d-flex flex-column text-center ml-lg-1">
                    <img
                        className={`${styles.tableImg} stdBoxShadow`}
                        src={tableImg}
                    ></img>
                    <img
                        style={{ marginTop: '1rem' }}
                        className={`${styles.tableImg} stdBoxShadow`}
                        src={vineyardImg}
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default Intro;
