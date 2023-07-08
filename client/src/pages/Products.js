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
    console.log(data);

    const getDataShirt = () => {
        const filteredData = data.filter((item) => {
            return item.type === "shirts";
        });

        console.log(filteredData);
    };

    const getDataPants = () => {
        const filteredData = data.filter((item) => {
            return item.type === "pants";
        });

        console.log(filteredData);
    };

    // const displayProducts = (data) => {
    //     return data.map((item, index) => <ProductItem data={item} />);
    // };

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
                {/* <Filter /> */}
                <div id="left" class="w-1/5 flex-none  text-left">
                    <h3 class="text-3xl mb-[50px] font-medium">Filters</h3>

                    <div class="w-95/100 mt-[45px]">
                        <h4 class=" mb-4 !text-lg font-medium">Prices</h4>
                        <div class="text-gray-400">
                            <p class="mb-[10px] hover:cursor-pointer transition ease-in-out hover:text-black">
                                <div>$0-$50</div>
                            </p>

                            <p class="mb-[10px] hover:cursor-pointer transition ease-in-out hover:text-black">
                                <a class="underline-hover-effect" href="">
                                    $50-$100
                                </a>
                            </p>

                            <p class="mb-[10px] hover:cursor-pointer transition ease-in-out hover:text-black">
                                <a class="underline-hover-effect" href="">
                                    $100-$150
                                </a>
                            </p>

                            <p class="mb-[10px] hover:cursor-pointer transition ease-in-out hover:text-black">
                                <a class="underline-hover-effect" href="">
                                    $150-$200
                                </a>
                            </p>

                            <p class="mb-[10px] hover:cursor-pointer transition ease-in-out hover:text-black">
                                <a class="underline-hover-effect" href="">
                                    $300-$400
                                </a>
                            </p>
                        </div>
                    </div>

                    <div class="w-95/100  mt-[45px]">
                        <h4 class=" mb-4 !text-lg font-medium">Category</h4>
                        <div class="text-gray-400">
                            <p class="mb-[10px] hover:underline hover:cursor-pointer transition ease-in-out hover:text-black">
                                {/* <a href="">Shirt</a> */}
                                <div onClick={getDataShirt}>Shirt</div>
                            </p>

                            <p class="mb-[10px] hover:underline hover:cursor-pointer transition ease-in-out hover:text-black">
                                <a href="">Pants</a>
                            </p>

                            <p class="mb-[10px] hover:underline hover:cursor-pointer transition ease-in-out hover:text-black">
                                <a href="">Dress</a>
                            </p>

                            <p class="mb-[10px] hover:underline hover:cursor-pointer transition ease-in-out hover:text-black">
                                <a href="">Hat</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div id="right" class="w-9/12 flex-none">
                    {/* <div className="grid grid-cols-2 lg:grid-cols-5 gap-4"> */}
                    <div class="grid grid-cols-4 gap-x-6 gap-y-90">
                        {data.map((item, index) => (
                            <ProductItem data={item} />
                        ))}
                        {/* {displayProducts(data)} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
