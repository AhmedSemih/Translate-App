import React from 'react';

function TextArea({ isFrom, text, setText }) {

    const handleInput = (e) => {
        setText(e.target.value);
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 13 || e.key === "Enter") {
            e.preventDefault();
        }
    }

    return (
        <textarea
            readOnly={!isFrom}
            className='area'
            cols="30"
            rows="11"
            placeholder={isFrom ? "Enter Text" : "Translation"}
            value={text}
            onInput={handleInput}
            onKeyDown={onKeyDown}
        ></textarea>
    )
}

export default TextArea