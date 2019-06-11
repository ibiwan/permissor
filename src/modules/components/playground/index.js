import React, { useState, useEffect } from "react";

function Playground() {
    const [pingResult, setPingResult]     = useState('Hello Wurld');
    const [initDbResult, setInitDbResult] = useState('Initializing DB...');

    useEffect(() => {

        (async () => {
            const result = await window.fetch('/ping');
            const text   = await result.text();
            setPingResult(text + '!');
        })();

        (async () => {
            const result = await window.fetch('/init-test-data');
            const text   = await result.text();
            setInitDbResult(text);
        })();

    });

    return (
        <>
            <div>{pingResult}</div>
            <div>{initDbResult}</div>
        </>
    );
}

export default Playground;
