import './App.css'
import { useState } from 'react';
import Card from './components/Card'

const App = () => {

    const cardSet = [
        {question: "test1", answer: "test2"},
        {question: "test3", answer: "test4"},
    ]

    return(
        <div className="App">
            <h1>City Flashcards</h1>
            <h3>Test your knowledge of cities from around the world!</h3>
        </div>
    )
}

export default App