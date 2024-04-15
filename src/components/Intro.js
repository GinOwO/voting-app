import "./Intro.css";

export default function Intro(props) {
    return (
        <div className="intro-container">
            <p className="intro">Click the button below to start voting</p>
            <p>
                Source code at{" "}
                <a href="https://github.com/GinOwO/voting-app">here</a>
            </p>
            <button className="start" onClick={() => props.onStart()}>
                Start
            </button>
        </div>
    );
}
