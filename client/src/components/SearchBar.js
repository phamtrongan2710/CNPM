import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// components
import OutsideAlerter from "./OutsideAlerter";

// icons
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ setShowSearch }) => {
    const [searchStyle, setSearchStyle] = useState("-translate-y-full");

    const closeSearch = () => {
        setSearchStyle("-translate-y-full");

        setTimeout(() => {
            setShowSearch(false);
        }, 300);
    };

    useEffect(() => {
        setSearchStyle("translate-y-0");
    }, []);

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
                                placeholder="Search products"
                            />

                            {/* search button */}
                            <button
                                className="absolute top-px right-0 py-3 px-3.5 text-xl"
                                onClick={closeSearch}
                            >
                                <BiSearch />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex md:justify-center mt-3 flex-wrap">
                    <span className="text-[#666] mr-4">Popular searches:</span>
                    <div className="flex items-center flex-wrap">
                        <button>
                            <Link className="cursor-pointer underline mr-4 hover:text-gray-800 whitespace-nowrap">
                                T-Shirt
                            </Link>
                        </button>

                        <button>
                            <Link className="cursor-pointer underline mr-4 hover:text-gray-800 whitespace-nowrap">
                                Jacket
                            </Link>
                        </button>

                        <button>
                            <Link className="cursor-pointer underline mr-4 hover:text-gray-800 whitespace-nowrap">
                                Dress
                            </Link>
                        </button>
                    </div>
                </div>
            </OutsideAlerter>
        </div>
    );
};

export default SearchBar;
