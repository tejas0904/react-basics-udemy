import React from 'react';

const validationComponent = (props) => {

    const { textLength } = props;

    let outputText = '';

    if(textLength>5){
        outputText = 'Text too long';
    }else{
        outputText = 'Text too short';
    }

    return (
        <div>
            <p> Text Size :: {textLength}</p>
            <p>{outputText}</p>
        </div>
    );

}

export default validationComponent;