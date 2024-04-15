import "./Choice.css";

export default function Choice(props) {
    const { question, choiceA, choiceB } = props;
    return (
        <div class="choice-container">
            <div class="question">{question}</div>
            <div class="choices">
                <button class="choice" onClick={() => props.onChoice(choiceA)}>
                    <span className="choice_">{choiceA}</span>
                </button>
                <button class="choice" onClick={() => props.onChoice(choiceB)}>
                    <span className="choice_">{choiceB}</span>
                </button>
            </div>
        </div>
    );
}
