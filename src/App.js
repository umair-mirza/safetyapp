import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainWindow from './components/MainWindow';
import NavBar from './components/NavBar';
import Home from './pages/Home'

function App() {
  return (
    <>
      <Router>
      <Route path='/' element={<Home />} />
        <NavBar />
        <MainWindow />
      </Router>
    </>
  );
}

export default App;
