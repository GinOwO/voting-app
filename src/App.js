import { useState } from "react";

import "./App.css";
import Choice from "./components/Choice";
import Results from "./components/Results";
import Intro from "./components/Intro";

function App() {
    const data = [
        {
            question: "What is your favorite programming language?",
            choiceA: "Python",
            choiceB: "JavaScript",
        },
        {
            question: "What is your favorite front-end framework?",
            choiceA: "React",
            choiceB: "Vue",
        },
        {
            question: "What is your favorite back-end framework?",
            choiceA: "Express",
            choiceB: "Django",
        },
        {
            question: "What is your favorite database?",
            choiceA: "MongoDB",
            choiceB: "PostgreSQL",
        },
        {
            question: "What is your favorite cloud platform?",
            choiceA: "AWS",
            choiceB: "GCP",
        },
    ];

    const [state, setState] = useState(0);
    const [question, setQuestion] = useState(0);
    const [choiceA, setChoiceA] = useState(0);
    const [choiceB, setChoiceB] = useState(0);
    const [result, setResult] = useState([]);

    const nextQuestion = (choice) => {
        if (choice !== -1) {
            setResult([...result, choice]);
        }
        if (question < data.length - 1) {
            setQuestion(question + 1);
            setChoiceA(data[question + 1].choiceA);
            setChoiceB(data[question + 1].choiceB);
        } else {
            setState(2);
        }
    };

    const restart = () => {
        setState(0);
        setQuestion(-1);
        setResult([]);
    };

    document.addEventListener("DOMContentLoaded", () => restart());

    const start = () => {
        setState(1);
        nextQuestion(-1);
    };

    return (
        <>
            {state === 0 && <Intro onStart={start} />}
            {state === 1 && (
                <Choice
                    question={data[question].question}
                    choiceA={choiceA}
                    choiceB={choiceB}
                    onChoice={nextQuestion}
                />
            )}
            {state === 2 && <Results onRestart={restart} results={result} />}
        </>
    );
}

export default App;
