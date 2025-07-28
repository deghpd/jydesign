import { useState, useEffect } from "react";

export function TextBox(){
    
    const [text, setText] = useState("");

    function handleEvent(e) {
        setText(e.target.value);
    }   
    useEffect(() => {
        console.log("text has changed");
    }, [text]);

    return (
        <div>
            <input
                onChange={(e) => handleEvent(e)}
                placeholder="Enter text"/>
            <p>{text}</p>
        </div>
    );
}