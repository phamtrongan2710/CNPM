import { useState, useEffect } from "react";
import axios from "../../api";

import ProductItem from "../../components/ProductItem";

const HomeBestSeller = () => {
    const [data, setData] = useState([]);
    // item limit: 5
    const [limitItem, setLimitItem] = useState(5);

    // fetch all products
    useEffect(() => {
        axios
            .get("product/getAllProduct")
            .then((res) => setData(res.data))
            .catch((e) => console.log(e));
    }, []);

    return (
        <div className="">
            {/* header */}
            <p className="text-3xl text-center mb-10">Best Seller</p>

            {/* Bestseller items */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                {data.map((item, index) => {
                    if (index >= limitItem) return;

                    return <ProductItem key={item.id} data={item} />;
                })}
            </div>

            {/* button to load the next 5 items */}
            {data.length > limitItem && (
                <div className="mt-12 flex justify-center">
                    <button
                        onClick={() => setLimitItem((prev) => prev + 5)}
                        className="w-full lg:w-auto py-2 px-7 font-medium border border-black rounded hover:text-white hover:bg-black hover:scale-110 transition duration-300"
                    >
                        Load more
                    </button>
                </div>
            )}
        </div>
    );
};

export default HomeBestSeller;
