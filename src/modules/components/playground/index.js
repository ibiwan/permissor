import React, { useState, useEffect } from "react";

function Playground() {
    const [result, setResult] = useState('Hello Wurld');

    useEffect(() => {
        const setPingResult = async () => {
            const result = await window.fetch('/ping');
            const text = await result.text();
            setResult(text);
        };
        setPingResult();
    });

    return (
        <div>{result}</div>
    );
}

export default Playground;
