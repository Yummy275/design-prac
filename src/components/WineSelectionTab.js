import React from 'react';
import styles from './WineSelectionTab.module.css';
import houseBlendImg from '../images/house-wine.jpg';
import Card from 'react-bootstrap/Card';

const WineTastingTab = () => {
    return (
        <Card className="stdBoxShadow" className={styles.mainContainer}>
            <Card.Img variant="top" src={houseBlendImg} />
            <Card.Body style={{ backgroundColor: '#373e4033' }}>
                <Card.Title>
                    <span className="redText">House</span> Blend
                </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default WineTastingTab;
