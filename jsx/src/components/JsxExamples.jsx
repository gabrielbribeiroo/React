import React from 'react';

const JsxExamples = () => {
    const userName = "John Doe";

    const user = {
        name: "Alice Smith",
        lastName: "Johnson",
        age: 30,
    };

    function getGreeting(name) {
        return `Hello, ${name}`;
    }

    const userIsLoggedIn = false; // Change this to true to see the logged-in case

    const userRole = "admin"; // Example user role

    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 35 },
    ];

    return (
        <div>
            {/* BASIC JSX EXAMPLES */}
            <h2>JSX Examples</h2>
            <p>JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML elements in JavaScript and place them in the DOM without using functions like createElement.</p>
            {/* List data from the user */}
            <p>User name: {userName}</p>
            <p>User: {user.name} {user.lastName} {user.age}</p>
            <p>{2+2}</p>
            <p>{getGreeting(userName)}</p>

            {/* DIFFERENT WAYS TO COMPARE HTML AND JSX */}
            <h3>HTML vs JSX</h3>
            <div className='anything'>This man</div>
            <div className="test">Copy</div>
            <button onClick={() => alert("Test")}>Click me</button>    
            <input type="text" placeholder="Write here" />       


            {/* CONDITIONAL RENDERING */}
            {userIsLoggedIn ? (
                <p>Case: logged in</p>
            ) 
            : (
                <p>Case: not logged in</p>
            )}

            <p>
                {userRole === "admin" && <p>You are an admin</p>}
            </p>


            {/* RENDERING LISTS */}
            <h3>Rendering Lists</h3>
            <div>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} - {user.age} years old
                        </li>
                    ))}
                </ul>    
            </div>            
        </div>
    )
}

export default JsxExamples;