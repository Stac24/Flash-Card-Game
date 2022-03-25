import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateCardPage from './pages/CreateCardPage';
import Navigation from './components/Navigation';



function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Router>
          <Navigation />
          <header className='App-header'>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/create">
              <CreateCardPage />
            </Route>
          </header>
        </Router>
      </header>
    </div>
  );
}

export default App;
