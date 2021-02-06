import React from 'react';
import style from './VineyardTour.module.css';
import grapeCutImg from '../images/grape-cutting.jpg';
import wineMakingImg from '../images/winemaking.jpg';

const VineyardTour = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.titleDiv}>
                <h2>
                    <span className="redText">Vineyard</span> Tour
                </h2>
            </div>
            <div className={`${style.exploreDiv} text-center`}>
                <span
                    style={{
                        fontWeight: 'bold',
                    }}
                    className={style.exploreWord}
                >
                    EXPLORE
                </span>
            </div>
            <div className={style.infoDiv}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque bibendum velit urna, non mollis sapien venenatis ac.
                    Nam commodo, leo eget venenatis ornare, diam ipsum sodales
                    augue, efficitur ultrices mauris eros at arcu. Pellentesque
                    dapibus tortor est, non rhoncus est lobortis vitae.
                    Pellentesque ac sem interdum, consequat nunc cursus, viverra
                    purus. Integer ut scelerisque lorem.
                </p>
                <img
                    className={`${style.tourImg} stdBoxShadow`}
                    src={wineMakingImg}
                    alt="cutting grapes"
                ></img>
                <p>
                    Proin ipsum sapien, scelerisque sed vulputate ac, sodales
                    fermentum sapien. Fusce vulputate tristique ligula in
                    convallis. Nam vitae pharetra mi, at dictum nibh. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae; Aliquam in laoreet turpis, a euismod
                    neque. Pellentesque ut efficitur ante, non ullamcorper
                    ligula. Nunc congue ligula a enim porttitor viverra. In
                    convallis ultricies ante, sed malesuada mauris consectetur
                    sed. Aenean id tincidunt massa.
                </p>
                <img
                    className={`${style.tourImg} stdBoxShadow`}
                    src={grapeCutImg}
                    alt="cutting grapes"
                ></img>
            </div>
        </div>
    );
};

export default VineyardTour;
