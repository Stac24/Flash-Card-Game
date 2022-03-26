import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';

function PlayRound() {
  const [flashcards, setCards] = useState([]);
  const [flashcards2, setCards2] = useState([]);
  const [cardset, setCardSet] = useState([]);
  const [play, setPlay] = useState(false);

  const loadCards = async () => {
    const response = await fetch('/getcards');
    const data = await response.json();
    setCards(data);
    setCards2(data);
  };

  useEffect(() => {
    loadCards();
  }, []);

  // get the cardset
  useEffect(() => {
    setCardSet([...new Set(flashcards.map((item) => item.cardset))]);
  }, [flashcards]);

  const filterCards = (ele) => {
    setCards2(flashcards.filter((card) => card.cardset === ele));
  };

  return (
    <div className="text-white">
      {!play
      && (
      <Dropdown>
        <Dropdown.Toggle className="my-3" variant="success" id="dropdown-basic">
          Choose cardset to play
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {cardset.length > 0 && cardset.map((ele) => (
            <Dropdown.Item key={ele} onClick={() => filterCards(ele)}>{ele}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      )}
    </div>
  );
}

export default PlayRound;
