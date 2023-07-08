import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";

// icons
import SevenIcon from "../assets/Se7enStore.svg";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscSignOut } from "react-icons/vsc";

// components
import SearchBar from "./SearchBar";
import Cart from "./Cart";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { toast, Flip } from "react-toastify";

const Header = () => {
    // header state
    const [isActive, setIsActive] = useState(false);
    // search bar state
    const [showSearch, setShowSearch] = useState(false);
    // cart state
    const [showCart, setShowCart] = useState(false);

    const dispatch = useDispatch();

    // user state (logged in or not)
    const user = useSelector((state) => state.user);

    const navigate = useNavigate();

    const handleSignout = () => {
        dispatch(signOut());
        dispatch(clearCart());
        navigate("/");

        toast("See you soon!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
        });
    };

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

    let itemAmount = useSelector((state) => state.cart.cart).length;

    // console.log(useSelector((state) => state.cart.cart[0].data.amount));

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

                <div className="flex-1 flex items-center font-medium">
                    <Link to="/product">
                        <h1>Products</h1>
                    </Link>

                    <Link to="/search?query=" className="ml-7">
                        <h1>Search our products</h1>
                    </Link>
                </div>

                <div className="flex-1 flex items-center justify-end">
                    {/* <div>{user.user ? <h1>logged in</h1> : <h1>guest</h1>}</div> */}

                    {user.user ? (
                        <>
                            {/* search icon */}
                            <Tippy content="Search our store">
                                <div
                                    className="cursor-pointer px-2 lg:px-3"
                                    onClick={openSearch}
                                >
                                    <BiSearch className="text-xl" />
                                </div>
                            </Tippy>
                            {showSearch && (
                                <SearchBar setShowSearch={setShowSearch} />
                            )}

                            {/* cart icon */}
                            <Tippy content="Cart">
                                <div
                                    className="relative cursor-pointer px-2 lg:px-3"
                                    onClick={onClickCart}
                                >
                                    <AiOutlineShoppingCart className="text-xl" />

                                    {/* item amount on cart icon     */}
                                    <div className="inline-flex absolute -top-2 -right-0.5 justify-center items-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full border-1 border-white dark:border-gray-900">
                                        {itemAmount}
                                    </div>
                                </div>
                            </Tippy>
                            {showCart && <Cart setShowCart={setShowCart} />}

                            {/* sign-out icon */}
                            <Tippy content="Sign out">
                                <div
                                    onClick={handleSignout}
                                    className="hidden lg:flex cursor-pointer px-2 lg:px-3"
                                >
                                    <VscSignOut className="text-xl" />
                                </div>
                            </Tippy>
                        </>
                    ) : (
                        // login button
                        <div className="cursor-pointer px-2 lg:px-3">
                            <Link to="/signin">
                                <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center">
                                    Log in
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
