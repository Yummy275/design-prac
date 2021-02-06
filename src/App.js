import './App.css';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Intro from './components/Intro';
import WineSelection from './components/WineSelection';
import VineyardTour from './components/VineyardTour';

function App() {
    return (
        <div className="App">
            <Container style={{ maxWidth: '1600px', padding: '1rem 0 1rem 0' }}>
                <Header></Header>
                <Intro></Intro>
                <WineSelection></WineSelection>
                <VineyardTour></VineyardTour>
            </Container>
        </div>
    );
}

export default App;
