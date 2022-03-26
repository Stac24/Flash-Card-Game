import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const CreateCardPage = () => {
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const [cardSet, setCardSet] = useState('');
    

    const history = useHistory();

    const addCard = async () => {
        const newCard = {front, back, cardSet};
        const response = await fetch('/createcard', {
            method: 'POST',
            body: JSON.stringify(newCard),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added flashcard!")
        }else{
            alert(`Failed to add flashcard, status code = ${response.status}`);
        }
        history.push('/');
    };


    return (
        <div>
             <h1>Add a Flashcard</h1>
            <div>
                <label> Front </label>
                <label> Back </label>
                <label>Topic</label>
              
            </div>
         
            <input
                type="text"
                placeholder='Enter front here'
                value={front}
                onChange={e => setFront(e.target.value)}/>
            <input
                type="text"
                placeholder='Enter back here'
                value={back}
                onChange={e => setBack(e.target.value)}/>

            <input
                type="text"
                placeholder='Enter topic here'
                value={cardSet}
                onChange={e => setCardSet(e.target.value)}/>

            <button
                onClick={addCard}
            >Add</button>
        </div>
    );
    };

export default CreateCardPage;