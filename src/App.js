import './App.css';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Intro from './components/Intro';

function App() {
    return (
        <div className="App">
            <Container style={{ maxWidth: '1400px', padding: '1rem 0 0 0' }}>
                <Header></Header>
                <Intro></Intro>
            </Container>
        </div>
    );
}

export default App;
