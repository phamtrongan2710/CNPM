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
        // automatically scroll to the top of the page
        window.scrollTo(0, 0);

        axios
            .get(`search/items?keyword=${keyword}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(""));
    }, [location.search]);

    let setKeyWord = (value) => {
        window.location.search = `?keyword=${value}`;
    };

    return (
        <>
            {keyword != "" ? (
                <div>
                    <div className="text-center">
                        {/* search box */}
                        <div className="w-[700px] h-11 relative m-auto mt-28">
                            <input
                                className="w-full h-full p-4 outline-0 border rounded focus:border-black"
                                type="text"
                                placeholder="Search our products"
                                ref={inputValue}
                            ></input>

                            <button
                                className="absolute mt-3 px-4 right-0 text-xl"
                                onClick={() =>
                                    setKeyWord(inputValue.current.value)
                                }
                            >
                                <BiSearch />
                            </button>
                        </div>

                        <h1 className="text-4xl mt-5 mb-20">
                            We found {data.length} results for "{keyword}"
                        </h1>
                    </div>

                    <div className="mt-7 mb-7 px-20">
                        <div className="w-78/100 m-auto">
                            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                                {data.map((item, index) => (
                                    <ProductItem data={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <h1 className="text-4xl mb-7 mt-28">
                        Discover your style with us
                    </h1>

                    {/* search box */}
                    <div className="w-[700px] h-11 relative m-auto mb-32">
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
                </div>
            )}
        </>
    );
};

export default Search;
