import React from "react";

function Button({ count, setCount }) {
    console.log("Button rendered...");
    const onClickButton = () => {
        setCount(count + 1);
    };
    return <div onClick={onClickButton}>button</div>;
}

export default Button;
