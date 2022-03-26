import React from 'react';
import HighScoresTable from '../components/highScores/HighScoreTable'

const HighHighScoresPage = async() => {
    const response = await fetch('/topTen');  // need to build a top ten route to return top ten highest players

    return (
        <>
            <h2>High Scores</h2>
            <HighScoresTable highScores = {highScores}>
            </HighScoresTable>
        </>
    )

}

export default HighScoresPage