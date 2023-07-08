import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../api";
// components
import OutsideAlerter from "./OutsideAlerter";
import ProductItem from "./ProductItem";
// icons
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ setShowSearch }) => {
    const [searchStyle, setSearchStyle] = useState("-translate-y-full");
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResult] = useState([]);

    const closeSearch = () => {
        setSearchStyle("-translate-y-full");

        setTimeout(() => {
            setShowSearch(false);
        }, 300);
    };

    useEffect(() => {
        setSearchStyle("translate-y-0");
    }, []);

    useEffect(() => {
        axios
            .get(`search/items?keyword=${searchInput}`)
            .then((res) => setSearchResult(res.data))
            .catch((err) => console.log("err: ", err));
    }, [searchInput]);

    console.log(searchInput);

    return (
        <div className="flex fixed top-0 right-0 w-full h-screen bg-black bg-opacity-30 z-50">
            <OutsideAlerter
                todo={closeSearch}
                compStyle={
                    "relative w-full h-full h-full lg:h-fit bg-white px-4 lg:px-12 py-4 md:py-8 transition duration-300 " +
                    searchStyle
                }
            >
                <div className="flex justify-center">
                    <div className="w-full md:w-2/3 flex justify-center items-center">
                        {/* search box */}
                        <div className="relative w-full md:mx-28 flex border border-black rounded">
                            {/* input field */}
                            <input
                                type="text"
                                className="w-full h-11 outline-none px-4"
                                placeholder="Search our products"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />

                            {/* search button */}
                            <button
                                className="absolute top-px right-0 py-3 px-3.5 text-xl"
                                onClick={closeSearch}
                            >
                                <Link to={`/search?query=${searchInput}`}>
                                    {" "}
                                    <BiSearch />{" "}
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

                {/* if user doesn't type anything to the search box, show popular searches. Else, show search results */}
                {!searchInput ? (
                    <div className="flex md:justify-center mt-3 flex-wrap">
                        <span className="text-[#666] mr-4">
                            Popular searches:
                        </span>

                        <div className="flex items-center flex-wrap">
                            {/* search for t-shirt */}
                            <button onClick={closeSearch}>
                                <Link
                                    to={"/search?query=T-Shirt"}
                                    className="cursor-pointer underline mr-4 hover:text-gray-800 whitespace-nowrap"
                                >
                                    T-Shirt
                                </Link>
                            </button>

                            {/* search for jacket */}
                            <button onClick={closeSearch}>
                                <Link
                                    to={"/search?query=Jacket"}
                                    className="cursor-pointer underline mr-4 hover:text-gray-800 whitespace-nowrap"
                                >
                                    Jacket
                                </Link>
                            </button>
                        </div>

                        {/* search for hat */}
                        <button onClick={closeSearch}>
                            <Link
                                to={"/search?query=hat"}
                                className="cursor-pointer underline mr-4 hover:text-gray-800 whitespace-nowrap"
                            >
                                Hat
                            </Link>
                        </button>
                    </div>
                ) : (
                    <div>
                        <p className="mt-9 mb-7 text-center text-2xl text-slate-400">
                            We found {searchResults.length} results for "
                            <span className="text-black">{searchInput}</span>"
                        </p>

                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 overflow-y-auto no-scroll h-[350px]">
                            {searchResults.map((item, index) => (
                                <div key={index}>
                                    <button class="w-48" onClick={closeSearch}>
                                        {" "}
                                        <ProductItem data={item} />{" "}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </OutsideAlerter>
        </div>
    );
};

export default SearchBar;
