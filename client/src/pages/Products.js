import React from "react";
import { useState, useEffect } from "react";
import axios from "../api";
import Filter from "../components/Filter";
// component
import ProductItem from "../components/ProductItem";

const Products = () => {
    const [data, setData] = useState([]);

    // fetch all products
    useEffect(() => {
        axios
            .get("product/getAllProduct")
            .then((res) => setData(res.data))
            .catch((e) => console.log(e));
    }, []);

    return (
        <div id="right" class="w-9/12 mt-[110px] m-auto mb-10">
            {/* heading */}
            <div class="m-auto text-center">
                <h1 class="text-3xl m-auto mt-[20px] item-center mb-10">
                    Our products
                </h1>
            </div>

            {/* products */}
            {/* <div class="grid grid-cols-5 gap-x-4 gap-y-90"> */}
            {/* <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                {data.map((item, index) => (
                    <ProductItem data={item} />
                ))}
            </div> */}

            <div
                id="img-product"
                class=" flex mt-[110px] w-11/12 m-auto justify-between "
            >
                <Filter />

                <div id="right" class="w-9/12 flex-none">
                    {/* <div className="grid grid-cols-2 lg:grid-cols-5 gap-4"> */}
                    <div class="grid grid-cols-4 gap-x-6 gap-y-90">
                        {data.map((item, index) => (
                            <ProductItem data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
