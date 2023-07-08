import React from "react";
import { useState, useEffect } from "react";
import axios from "../api";
import Filter from "../components/Filter";
// component
import ProductItem from "../components/ProductItem";

const Products = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    // fetch all products
    useEffect(() => {
        axios
            .get("product/getAllProduct")
            .then((res) => {
                setData(res.data);

                // Initialize filteredData with all products
                setFilteredData(res.data);
            })
            .catch((e) => console.log(e));
    }, []);
    console.log(data);

    const resetProduct = () => {
        setFilteredData(data);
    };

    // filter shirts from data
    const getDataShirt = () => {
        const filteredShirt = data.filter((item) => item.type === "shirts");

        setFilteredData(filteredShirt);
    };

    // filter pants from data
    const getDataPants = () => {
        const filteredPants = data.filter((item) => item.type === "pants");

        setFilteredData(filteredPants);
    };

    // filter dresses from data
    const getDataDress = () => {
        const filteredDress = data.filter((item) => item.type === "dresses");

        setFilteredData(filteredDress);
    };

    // filter hats from data
    const getDataHat = () => {
        const filteredHat = data.filter((item) => item.type === "hats");

        setFilteredData(filteredHat);
    };

    return (
        <div className="w-full px-16 mt-[110px]">
            {/* heading */}
            <div className="m-auto text-center">
                <h1 className="text-3xl mt-[20px] item-center mb-10">
                    Our products
                </h1>
            </div>

            {/* filter & product items container */}
            <div className="flex justify-between pb-4">
                {/* filter */}
                <div className="w-36 flex-none text-left">
                    {/* heading */}
                    <h3 className="text-2xl mb-[25px] font-bold">Filters</h3>

                    {/* price filter */}
                    <div className="w-full mt-[25px]">
                        <h4 className=" mb-4 !text-lg font-medium">Prices</h4>

                        <div className="text-gray-400">
                            <p className="mb-[10px] hover:cursor-pointer transition ease-in-out hover:text-black">
                                <div>$0-$50</div>
                            </p>

                            <p className="mb-[10px] hover:cursor-pointer transition ease-in-out hover:text-black">
                                $50-$100
                            </p>

                            <p className="mb-[10px] hover:cursor-pointer transition ease-in-out hover:text-black">
                                $100-$150
                            </p>

                            <p className="mb-[10px] hover:cursor-pointer transition ease-in-out hover:text-black">
                                $150-$200
                            </p>

                            <p className="mb-[10px] hover:cursor-pointer transition ease-in-out hover:text-black">
                                $300-$400
                            </p>
                        </div>
                    </div>

                    {/* category filter */}
                    <div className="w-full mt-[45px]">
                        <h4 className=" mb-4 !text-lg font-medium">Category</h4>

                        <div className="text-gray-400">
                            <p
                                className="mb-[10px] hover:underline hover:cursor-pointer transition ease-in-out hover:text-black"
                                onClick={getDataShirt}
                            >
                                Shirt
                            </p>

                            <p
                                className="mb-[10px] hover:underline hover:cursor-pointer transition ease-in-out hover:text-black"
                                onClick={getDataPants}
                            >
                                Pants
                            </p>

                            <p
                                className="mb-[10px] hover:underline hover:cursor-pointer transition ease-in-out hover:text-black"
                                onClick={getDataDress}
                            >
                                Dress
                            </p>

                            <p
                                className="mb-[10px] hover:underline hover:cursor-pointer transition ease-in-out hover:text-black"
                                onClick={getDataHat}
                            >
                                Hat
                            </p>
                        </div>
                    </div>

                    {/* back to all products */}
                    {JSON.stringify(data) !== JSON.stringify(filteredData) ? (
                        <h4
                            className="mb-4 mt-[20px] !text-lg font-medium hover:underline hover:cursor-pointer"
                            onClick={resetProduct}
                        >
                            All products
                        </h4>
                    ) : (
                        <></>
                    )}
                </div>

                <div className="w-11/12">
                    <div className="flex flex-start flex-wrap">
                        {filteredData.map((item, index) => (
                            <ProductItem key={index} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
