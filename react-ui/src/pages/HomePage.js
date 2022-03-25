import React, { useEffect, useState } from "react";
import Flashcardgroup from "../components/Flashcardgroup";

function HomePage() {
  const [flashcards, setCards] = useState([]);

  const loadCards = async () => {
    const response = await fetch("/getcards");
    const data = await response.json();
    setCards(data);
  };

  useEffect(() => {
    loadCards();
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <div className="container my-5">
        <Flashcardgroup flashcards={flashcards}></Flashcardgroup>
      </div>
    </>
  );
}

export default HomePage;
