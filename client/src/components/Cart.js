import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

// components
import OutsideAlerter from "./OutsideAlerter";
import CartItem from "./CartItem";

// icons
import { BsFillTrashFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Cart = ({ setShowCart }) => {
    const [cartStyle, setCartStyle] = useState("translate-x-full");
    const dispatch = useDispatch();

    const closeCart = () => {
        setCartStyle("translate-x-full");

        setTimeout(() => {
            setShowCart(false);
        }, 300);
    };

    useEffect(() => {
        setCartStyle("translate-x-0");
    }, []);

    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);

    let items = useSelector((state) => state.cart.cart);

    const InitData = () => {
        setData(items);

        let temp = 0;
        items.forEach(
            (item) => (temp += +item.data.data.price * +item.data.amount)
        );
        setTotal(temp);
    };

    useEffect(() => {
        InitData();
    }, [items]);

    let itemAmount = useSelector((state) => state.cart.cart).length;

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
                    <p className="text-2xl font-medium">Cart ({itemAmount})</p>

                    {/* close button */}
                    <HiArrowRight
                        onClick={closeCart}
                        className="cursor-pointer w-6 h-6 flex justify-center items-center"
                    />
                </div>

                {/* check if cart is empty or not */}
                {data.length ? (
                    <div className="flex flex-col h-full pt-3 pb-10">
                        {/* cart items */}
                        <div className="flex-1 overflow-y-auto no-scroll">
                            {data.map((item, index) => (
                                <CartItem key={index} data={item} />
                            ))}
                        </div>

                        {/* total price, clear-cart button, & checkout button container */}
                        <div>
                            <div className="flex items-center justify-between py-4">
                                {/* total price */}
                                <p className="font-bold text-lg">
                                    Total:{" "}
                                    <span className="text-green-600">
                                        $ {total}
                                    </span>
                                </p>

                                {/* trashcan icon (to clear cart) */}
                                <Tippy content="Empty cart">
                                    <div
                                        onClick={() => dispatch(clearCart())}
                                        className="cursor-pointer py-4 bg-red-500 text-white w-9 h-9 flex justify-center items-center text-xl"
                                    >
                                        <BsFillTrashFill />
                                    </div>
                                </Tippy>
                            </div>

                            {/* checkout button */}
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
                ) : (
                    <div className="mt-4">
                        <h1 className="font-medium text-lg">
                            Your cart is currently empty.
                        </h1>

                        <h1 className="font-medium text-lg">
                            Take at look at our{" "}
                            <span
                                className="text-red-500 font-bold hover:underline"
                                onClick={closeCart}
                            >
                                <Link to="/product">products</Link>
                            </span>{" "}
                            and discover your style.
                        </h1>
                    </div>
                )}
            </OutsideAlerter>
        </div>
    );
};

export default Cart;
