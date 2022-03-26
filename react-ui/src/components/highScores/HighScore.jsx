import React from 'react';

function HighScore({ player }) {
  return (
    <tr>
      <td>{player.name}</td>
      ;
      <td>{player.stars}</td>
      ;
    </tr>
  );
}

export default HighScore;
