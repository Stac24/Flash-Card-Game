import React from 'react';
import HighScore from './HighScore';

function HighScoresTables ({ players }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Place</th>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player,i) => <HighScore )}
            </tbody>
        </table>
    )
}