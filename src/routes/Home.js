import Counter from "components/Counter";
import CompanyLogo from "components/CompanyLogo";
import React from "react";
import Button from "components/Button";

function Home() {
    console.log("Home rendered...");
    return (
        <div>
            Home
            <Counter>
                <CompanyLogo />
                <Button />
            </Counter>
        </div>
    );
}

export default Home;
