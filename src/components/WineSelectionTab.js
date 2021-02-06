import React from 'react';
import styles from './WineSelectionTab.module.css';
import houseBlendImg from '../images/house-wine.jpg';
import Card from 'react-bootstrap/Card';

const WineTastingTab = ({ title, pic, desc }) => {
    //splits title into ar of 2 strings
    const wordArr = title.split(' ');
    return (
        <Card className={`${styles.mainContainer} stdBoxShadow`}>
            <Card.Img className={styles.cardImg} variant="top" src={pic} />
            <Card.Body
                className={styles.cardBody}
                style={{ backgroundColor: '#373e4033' }}
            >
                <Card.Title>
                    <span className="redText">{wordArr[0]}</span> {wordArr[1]}
                </Card.Title>
                <Card.Text>{desc}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default WineTastingTab;
