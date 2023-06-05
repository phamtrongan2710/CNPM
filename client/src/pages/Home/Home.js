import React from "react";

// components
import HomeCollection from "./HomeCollection";
import Bestseller from "./Bestseller";

const Home = () => {
    return (
        <div>
            <div className="py-16">
                <HomeCollection />
            </div>

            <Bestseller />
        </div>
    );
};

export default Home;
