import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateCardPage from './pages/CreateCardPage';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import HighScores from './pages/HighScores';

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setisAuthenticated(boolean);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navigation setAuth={setAuth} isAuthenticated={isAuthenticated} />
          <header className="App-header">
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/create">
              <CreateCardPage />
            </Route>
            <Route path="/high-scores" exact>
              <HighScores />
            </Route>
            <Route path="/dashboard" exact>
              <Dashboard isAuthenticated={isAuthenticated} />
            </Route>
            <Route path="/login" exact>
              <Login setAuth={setAuth} isAuthenticated={isAuthenticated} />
            </Route>
          </header>
        </Router>
      </header>
    </div>
  );
}

export default App;
