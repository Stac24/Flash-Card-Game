import './App.css';
import { React } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateCardPage from './pages/CreateCardPage';
import Navigation from './components/Navigation';
import Login from './pages/Login';

function App() {
  console.log(process.env.REACT_APP_API_URL);
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navigation />
          <header className="App-header">
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/create">
              <CreateCardPage />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
          </header>
        </Router>
      </header>
    </div>
  );
}

export default App;
