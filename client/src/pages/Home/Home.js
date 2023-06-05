import React from "react";

// components
import HomeCollection from "./HomeCollection";
import Bestseller from "./Bestseller";

const Home = () => {
    return (
        <div>
            <div className="pt-32 pb-16 lg:pb-24 px-4 lg:px-12">
                {/* season collection */}
                <div className="mb-24">
                    <HomeCollection />
                </div>

                {/* best seller */}
                <Bestseller />
            </div>
        </div>
    );
};

export default Home;
