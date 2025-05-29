import { useState } from 'react';

const EventHandlingExamples = () => {

    const handleClick = () => {
        alert("Testing...");
    }

    const handleGreeting = (name) => {
        alert(`Hello, ${name}`);
    }

    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        alert("Form submitted!");
    }

    return (
        <div>
            <button onClick={() => alert("Hi!")}>Click here</button>
            <button onClick={handleClick}>Click here 2</button>
            <br />
            <button onClick={() => handleGreeting("Gabriel")}>Say "Hello, Gabriel"</button>
            <button onClick={() => handleGreeting("Ana")}>Say "Hello, Ana"</button>
            <br />
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
                <input type="submit" value='Send' />
            </form>
        </div>
    )
}

export default EventHandlingExamples;