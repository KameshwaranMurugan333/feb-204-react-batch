import React from "react";
import MyClassComponent from "./ClassComponent";

const MyFunctionalComponent = (props) => {

    //1. Creating and initializing state
    const [count, setCount] = React.useState(1);
    const [name] = React.useState("Kameh");
    const [student, updateStudent] = React.useState({
        name: "Kamesh",
        age: 27,
        gender: "Male"
    });

    const increment = () => {
        // 3. Updating the state
        setCount(count + 1);
        updateStudent({ ...student, name: "Kameshwaran" });
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (<div style={{
        backgroundColor: 'aqua',
        marginTop: "24px"
    }}>
        <div>
            {/* 2. Utilizing the created state */}
            <h1>Count: {count}</h1>
            <p>Name: {name}</p>

            <p>Student Name: {student.name}</p>
            <p>Student Age: {student.age}</p>
            <p>Student Gender: {student.gender}</p>

            <h3>Received Prop: {props.name}</h3>
            <h3>Received Prop: {props.age}</h3>

            <button onClick={() => increment(true)}>+</button>
            <button onClick={decrement}>-</button>

            <MyClassComponent name={"I am from functional component"} age={19} />
        </div>
        <div>

        </div>
    </div>)
}

export default MyFunctionalComponent;