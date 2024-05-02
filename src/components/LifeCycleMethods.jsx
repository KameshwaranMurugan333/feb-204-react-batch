import React from "react";

class LifeCycleMethods extends React.Component {
    // Mounting: 1. Constructor
    constructor(props) {
        super(props);

        console.log("-----I am constructor--------");
    }

    // Mounting: 2. getDerivedStateFromProps 
    // Updating: 1. getDerivedStateFromProps
    static getDerivedStateFromProps() {
        console.log("-----I am in getDerivedStateFromProps--------");
    }

    // Updating: 2. shouldComponentUpdate()
    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextState:', nextState);
        console.log('nextProps:', nextProps);
        console.log('currentState:', this.state);
        console.log('currentProps:', this.props)
        console.log("------I am in shouldComponentUpdate---------");
        return nextProps.count % 2 === 0;
    }

    // Mounting: 4. componentDidMount()
    componentDidMount() {
        // All the API calls will be there
        console.log("------I am in Component Did Mount----------");
    }

    // Updating: 4. getSnapshotBeoreUpdate
    getSnapshotBeforeUpdate(prevProps, prevState, state, props) {
        console.log("--------Executing getSnapshotBeforeUpdate--------");
        return { favoritecolor: "black", name: "Kamesh" };
    }

    // Updating: 5. componentDidUpdate()
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("--------Executing ComponentDidUpdate-------------");
        console.log('snapshot:', snapshot)
        console.log('prevState:', prevState)
        console.log('prevProps:', prevProps)
    }

    // Unmounting: 1. componentWillUnmount()
    componentWillUnmount(){
        console.log("--------Component Will Un Mount-----------")
    }

    // Mounting: 3. render()
    // Updating: 3. render()
    render() {
        console.log('------- I am render -----------')
        return <div>
            <h1>I am a class Component</h1>
            <p>Count: {this.props.count}</p>
        </div>
    }
}

export default LifeCycleMethods;