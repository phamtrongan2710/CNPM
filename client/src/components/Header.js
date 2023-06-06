import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// icons
import SevenIcon from "../assets/Se7enStore.svg";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscSignOut } from "react-icons/vsc";

// components
import SearchBar from "./SearchBar";
import Cart from "./Cart";

const Header = () => {
    // header state
    const [isActive, setIsActive] = useState(false);
    // search bar state
    const [showSearch, setShowSearch] = useState(false);
    // cart state
    const [showCart, setShowCart] = useState(false);

    // event listener
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100 ? setIsActive(true) : setIsActive(false);
        });
    });

    const openSearch = () => {
        setShowSearch(true);
    };

    const onClickCart = () => {
        setShowCart(true);
    };

    return (
        <header
            className={`${
                isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
            } fixed w-full z-10 transition-all`}
        >
            <div className="container mx-auto flex items-center justify-between h-full">
                {/* logo */}
                <div className={`${isActive ? "w-24" : "w-32"} transition-all`}>
                    <a href="/">
                        <img
                            className={`${
                                isActive ? "w-[50px]" : "w-[70px]"
                            } transition-all`}
                            src={SevenIcon}
                        />
                    </a>
                </div>

                <div className="flex-1 flex items-center">
                    <Link to="/product">
                        <h1>Products</h1>
                    </Link>
                </div>

                <div className="flex-1 flex items-center justify-end">
                    {/* signin button */}
                    <div className="cursor-pointer px-2 lg:px-3">
                        <Link to="/signin">
                            <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center">
                                Log in
                            </button>
                        </Link>
                    </div>

                    {/* search icon */}
                    <div
                        className="cursor-pointer px-2 lg:px-3"
                        onClick={openSearch}
                    >
                        <BiSearch className="text-xl" />
                    </div>
                    {showSearch && <SearchBar setShowSearch={setShowSearch} />}

                    {/* cart icon */}
                    <div
                        className="relative cursor-pointer px-2 lg:px-3"
                        onClick={onClickCart}
                    >
                        <AiOutlineShoppingCart className="text-xl" />
                    </div>
                    {showCart && <Cart setShowCart={setShowCart} />}

                    {/* sign-out icon */}
                    <div className="hidden lg:flex cursor-pointer px-2 lg:px-3">
                        <VscSignOut className="text-xl" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
