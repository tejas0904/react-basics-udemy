import React from 'react';

const userInput = (props) => {

    return (
        <div>
            <label>Please enter your username :: </label>
            <input onChange={props.click} value={props.username} type='textArea'></input>
        </div>
    )
}

export default userInput;