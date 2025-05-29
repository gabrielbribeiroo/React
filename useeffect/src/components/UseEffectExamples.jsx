import {useState, useEffect} from 'react'

const UseEffectExamples = () => {

    // whithout dependencies
    useEffect(() => {
        console.log('Run UE1');
    });

    // with empty dependencies
    useEffect(() => {
        console.log('Run UE2');
    }, []);

    // useState triggers the rendering of the component
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // with dependencies
    useEffect(() => {
        console.log('Run UE3');
    }, [count]);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment counter</button>
            <button onClick={() => setCount2(count2 + 1)}>Increment counter2</button>
        </div>
    )
}

export default UseEffectExamples