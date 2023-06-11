import { BiSearch } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import axios from "../api";
// component
import ProductItem from "../components/ProductItem";

const Search = (props) => {
    const inputValue = useRef("");

    let location = useLocation();

    let keyword = location.search.split("=")[1];

    if (keyword.includes("%20")) {
        keyword = keyword.replaceAll("%20", " ");
    }

    let [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`search/items?keyword=${keyword}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(""));
    }, [location.search]);

    let setKeyWord = (value) => {
        window.location.search = `?keyword=${value}`;
    };

    return (
        <div>
            <div className="text-center">
                {/* search box */}
                {/* <div className="w-31/100 h-11 relative m-auto mt-20"> */}
                <div className="w-[800px] h-11 relative m-auto mt-28">
                    <input
                        className="w-full h-full p-4 outline-0 border rounded focus:border-black"
                        type="text"
                        placeholder="Search our products"
                        ref={inputValue}
                    ></input>

                    <button
                        className="absolute mt-3 px-4 right-0 text-xl"
                        onClick={() => setKeyWord(inputValue.current.value)}
                    >
                        <BiSearch />
                    </button>
                </div>

                <h1 className="text-4xl mt-5 mb-7">
                    Found {data.length} results for "{keyword}"
                </h1>
            </div>

            <div className="mt-7 mb-7 px-20">
                <div className="w-78/100 m-auto">
                    {/* <div className="grid grid-cols-4 gap-x-6 gap-4"> */}
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                        {data.map((item, index) => (
                            <ProductItem data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
