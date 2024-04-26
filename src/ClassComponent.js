import React from "react";

class MyClassComponent extends React.Component {
    constructor(props) {
        super(props);

        // 1. State Initialization
        this.state = {
            count: 0,
            name: "Kamesh",
            age: 21
        }
        this.fullName = "Kameshwaran";
    }

    increment = () => {
        // 3. Update State
        this.setState({ count: this.state.count + 1, age: 22 });
    };

    decrement = () => {
        this.setState({ count: this.state.count - 1, name: "Kamesh Updated" });
    };

    render() {
        // 2. Utilizing State
        return <div>
            <h1>Count: {this.state.count}</h1>
            <h2>Fullname: {this.fullName}</h2>
            <h3>Received Prop: {this.props.name}</h3>
            <h3>Received Prop: {this.props.age}</h3>

            <h1>Is Even? - {this.state.count % 2 === 0 ? 'Yes' : 'No'}</h1>
            
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
        </div>
    }
}

export default MyClassComponent