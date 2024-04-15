import "./Intro.css";

export default function Intro(props) {
    return (
        <div className="intro-container">
            <p className="intro">Click the button below to start voting</p>
            <button className="start" onClick={() => props.onStart()}>
                Start
            </button>
        </div>
    );
}
