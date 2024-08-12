import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

   
    const increment = () => {
        setCount(prevCount => prevCount + 0.1);
    };

    return (
        <div>
            <p>العدد: {count.toFixed(1)}</p>
            <button onClick={increment}>increase</button>
        </div>
    );
}

export default Counter;
