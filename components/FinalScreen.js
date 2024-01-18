import React from "react";
import FetchButton from "./FetchButton";
import { useSelector, useDispatch } from 'react-redux';

function FinalScreen() {
    const score = useSelector((state) => state.score);
    const dispatch = useDispatch();
    
    const replay = () => {
        dispatch({
            type: 'SET_INDEX',
            index: 0,
        });

        dispatch({
            type: 'SET_SCORE',
            score: 0,
        });
    }

    const setting = () => {
        dispatch({
            type: 'SET_QUESTION',
            question: [],
        });

        dispatch({
            type: 'SET_SCORE',
            score: 0,
        });

        // Reload the page
        window.location.reload();
    }

    return (
        <div>
            <h3>Final Score: {score}</h3>
            <button onClick={replay}>Try Again?</button>
            <FetchButton text="Fetch new Questions"/>
            <button onClick={setting}>Settings</button>
        </div>
    )
}

export default FinalScreen;
