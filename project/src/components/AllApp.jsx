import {useState} from 'react'
import './AllApp.css'



const AllApp = () => {
    // task list
    const [all, setAll] = useState([])

    // text state of task input
    const [inputValue, setInputValue] = useState('')

    // add task
    const handleSubmit= (e) => {
        e.preventDefault();

        if (inputValue.trim() !== '') {
            const newAll = {
                id: Date.now(),
                text: inputValue
            }

            setAll((prevAll) => [...prevAll, newAll])

            setInputValue('') // Clear the input field after adding the task
        }
    }

    // delete task
    const handleDelete = (id) => {
        setAll((prevAll) => prevAll.filter((todo) => todo.id !== id));
    };

    return (
        <div className='app-container'>
            <h1 className='title'>Task List</h1>
            {/* Add a form to input new tasks */}
            <form onSubmit={handleSubmit} className='form-container'>
                <input 
                type="text" 
                className='input-field'
                placeholder='Add a task...' 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                />
                <button type='submit' className='add-button'>Add </button>
            </form>

            {/* Display the list of tasks */}
            {all.length === 0 && <p className='empty'>Nothing tasks.</p>}

            <ul className='todo-list'>
                {all.map((todo) =>  (
                    <li key={todo.id} className='todo-item'>
                        {todo.text}
                        <button 
                            className='delete-button' 
                            onClick={() => handleDelete(todo.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllApp