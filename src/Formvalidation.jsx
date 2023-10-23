import React, { useRef, useState } from 'react'
import './App.css'

const Formvalidation = () => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);
    const [value, setvalue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
        setvalue(inputValue)

    };

    const handleInputChange = (e) => {
        console.log(e)
        setInputValue(e.target.value);
    };

    const handleFocusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <div>
                <p>Output</p>
                <p>{value}</p>
            </div>
            <br />
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <input className='inputfordata' placeholder='Enter the content'
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        ref={inputRef}
                    />
                </label>
                <button type='submit'> Submit </button>
            </form>
            <button onClick={handleFocusInput}>Select Input Box</button>
        </div>
    )
}

export default Formvalidation
