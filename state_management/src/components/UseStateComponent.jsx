import {useState} from 'react';

// useState is a React Hook that lets you add state to functional components.

// always that go set state, you should use the function form of setState to ensure you are working with the most recent state value.
// if it is just a simple value, you can use the value form of setState, but if it is an object or array, you should use the function form to avoid closure issues.

const UseStateComponent = () => {
    const [count, setCount] = useState(0); // Initialize state with a default value of 0

    const increment = () => {
        setCount((prevCount) => prevCount + 1); // Update the state by incrementing the previous count
        // setCount(count + 1); // This would not work as expected due to closure issues
        console.log(`Count is now: ${count}`);
    }

    const [user, setUser] = useState({ 
        name: 'John', 
        age: 30,
        hobbies: ['reading', 'gaming', 'coding']
    }); // Example of an object state

    const updateUserAge = () => {
        setUser((prevUser) => ({
            ...prevUser, // Spread the previous user object
            age: prevUser.age + 1 // Increment the age property
        }));
        console.log(`User's age is now: ${user.age}`);
    }

    return (
        <div>
            <h2>Counter</h2>
            <p>You have clicked {count} times</p>
            <button onClick={increment}>Increment</button>
            
            <p>Name: {user.name}, and age: {user.age}</p>
            <button onClick={updateUserAge}>Increment age</button>
        </div>
    )
}

export default UseStateComponent