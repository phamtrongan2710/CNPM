import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

// components
import OutsideAlerter from "./OutsideAlerter";
import CartItem from "./CartItem";

// icons
import { IoMdClose } from "react-icons/io";
import { BsFillTrashFill } from "react-icons/bs";

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
                    <IoMdClose
                        onClick={closeCart}
                        className="cursor-pointer w-8 h-8 flex justify-center items-center"
                    />
                </div>

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
                            <p className="font-medium text-lg">
                                Total:{" "}
                                <span className="text-green-600">
                                    $ {total}
                                </span>
                            </p>

                            {/* trashcan icon (to clear cart) */}
                            <div
                                onClick={() => dispatch(clearCart())}
                                className="cursor-pointer py-4 bg-red-500 text-white w-9 h-9 flex justify-center items-center text-xl"
                            >
                                <BsFillTrashFill />
                            </div>
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
            </OutsideAlerter>
        </div>
    );
};

export default Cart;
