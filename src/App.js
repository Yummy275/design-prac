import './App.css';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Intro from './components/Intro';
import WineSelection from './components/WineSelection';
import VineyardTour from './components/VineyardTour';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Container style={{ maxWidth: '1600px', paddingBottom: '1rem' }}>
                <Header></Header>
                <Intro></Intro>
                <WineSelection></WineSelection>
                <VineyardTour></VineyardTour>
                <VisitUs></VisitUs>
                <Footer></Footer>
            </Container>
        </div>
    );
}

export default App;
