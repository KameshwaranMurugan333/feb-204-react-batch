import React from "react";

function Car(props) {
    return <li>I am a {props.brand}</li>;
}

export function Garage() {
    const cars = ['Ford', 'BMW', 'Audi', 'TATA'];

    const [state,setState] = React.useState("red");

    return (
        <div>
            <h1>Who lives in my garage?</h1>
            <ol style={{ background: state }}>
                {cars.map((car, index) => <Car key={index} brand={car} />)}
            </ol>

            <button onClick={() => setState('blue')}>Change BG to blue</button>
        </div>
    );
}

