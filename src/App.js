import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import MainWindow from './components/MainWindow';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <MainWindow />
      </Router>
    </>
  );
}

export default App;
