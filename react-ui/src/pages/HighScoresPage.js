import React, { useEffect } from 'react';
import HighScoresTable from '../components/highScores/HighScoreTable'

const HighScoresPage = async() => {
    const [scores, setScores] = useState([])
    
    const loadScores = async() => {
        const response = await fetch('/topTen'); // need to define this route
        const data = await response.json();
        setScores(data);
    }

    useEffect(() => {
        loadScores()
    }, []);)


    return (
        <>
            <h2>High Scores</h2>
            <HighScoresTable scores = {scores}>
            </HighScoresTable>
        </>
    )

}

export default HighScoresPage