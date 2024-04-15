import "./Results.css";

export default function Results(props) {
    return (
        <div className="results-container">
            <h1>Results</h1>
            <span className="results">
                {props.results.map((result, index) => (
                    <span key={index} className="result">
                        {index + 1}. {result}
                    </span>
                ))}
            </span>
            <button className="restart" onClick={() => props.onRestart()}>
                Restart
            </button>
        </div>
    );
}
