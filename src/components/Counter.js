import React, { useState } from "react";
import Button from "./Button";

function Counter({ children }) {
    console.log("Counter rendered...");
    console.log(children);
    const [count, setCount] = useState(1);
    return (
        <div>
            <div>count : {count}</div>
            <Button count={count} setCount={setCount} />
            {children}
        </div>
    );
}

export default Counter;
