import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

// components
import OutsideAlerter from "./OutsideAlerter";
import CartItem from "./CartItem";

// icons
import { IoMdClose } from "react-icons/io";

const Cart = ({ setShowCart }) => {
    const [cartStyle, setCartStyle] = useState("translate-x-full");

    const closeCart = () => {
        setCartStyle("translate-x-full");

        setTimeout(() => {
            setShowCart(false);
        }, 300);
    };

    useEffect(() => {
        setCartStyle("translate-x-0");
    }, []);

    return (
        <div className="flex justify-end fixed top-0 right-0 w-full h-full bg-black bg-opacity-30 z-50">
            <OutsideAlerter
                todo={closeCart}
                compStyle={
                    "relative w-10/12 md:w-1/3 h-full bg-white px-3 lg:px-6 pt-6 pb-4 transition duration-300 " +
                    cartStyle
                }
            >
                <div className="flex items-center justify-between p-2 border-b">
                    <p className="text-2xl font-medium">Cart</p>

                    {/* close button */}
                    <IoMdClose
                        onClick={closeCart}
                        className="cursor-pointer w-8 h-8 flex justify-center items-center"
                        s
                    />
                </div>

                <div className="flex flex-col h-full pt-3 pb-10">
                    <div className="flex-1 overflow-y-auto no-scroll md:scroll1">
                        {/* cart items */}
                    </div>

                    {/* total & checkout button */}
                    <div className="">
                        <div className="flex items-center justify-between py-4">
                            <p className="font-medium text-lg">Total</p>
                        </div>

                        <Link to="/checkout">
                            <button
                                onClick={closeCart}
                                className="w-full py-2 px-7 font-medium border border-black rounded text-white bg-black hover:scale-105 transition duration-300"
                            >
                                Check out
                            </button>
                        </Link>
                    </div>
                </div>
            </OutsideAlerter>
        </div>
    );
};

export default Cart;
