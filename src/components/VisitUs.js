import React from 'react';
import style from './VisitUs.module.css';

import reuben from '../images/thumbs-up.jpg';

const VisitUs = () => {
    return (
        <div className={style.mainContainer}>
            <div className="text-center">
                <h2>
                    <span className="redText">Come</span> Visit Us
                </h2>
            </div>
            <div className={style.infoDiv}>
                <img
                    className={`${style.glob} stdBoxShadow`}
                    src={reuben}
                    alt="thumbs-up"
                ></img>
                <p style={{ margin: '1rem 0 0 1rem' }}>
                    <span className="redText">Lorem</span> ipsum dolor sit amet,
                    consectetur adipiscing elit. Aliquam tincidunt elit a augue
                    fermentum, at ultricies orci vestibulum. Donec posuere
                    feugiat facilisis. Ut quis finibus est. Etiam ipsum libero,
                    iaculis id lorem vel, sollicitudin dictum urna. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae; Vivamus rutrum, magna eget tincidunt
                    tristique, sem risus fermentum nisl, in condimentum nunc
                    elit malesuada leo. Fusce viverra interdum nisi, in rhoncus
                    justo.
                </p>
            </div>
        </div>
    );
};

export default VisitUs;
