import React, { useEffect, useState } from 'react';
import HighScoresTable from '../components/highScores/HighScoreTable';

const HighScoresPage = async () => {
  const [scores, setScores] = useState([]);

  const loadScores = async () => {
    const response = await fetch('/topten'); // need to define this route
    const data = await response.json();
    setScores(data);
  };

  useEffect(() => {
    loadScores();
  }, []);

  return (
    <>
      <h2>High Scores</h2>
      <HighScoresTable scores={scores} />
    </>
  );
};

export default HighScoresPage;
