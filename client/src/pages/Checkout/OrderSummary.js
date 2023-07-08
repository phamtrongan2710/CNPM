import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// icons
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import { useSelector } from "react-redux";

const OrderSummary = () => {
    const [showOrderSummary, setShowOrderSummary] = useState(true);
    const [data, setData] = useState(useSelector((state) => state.cart.cart));
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

    return (
        <div className="lg:px-10">
            {/* show/hide order summary option */}
            <div onClick={() => setShowOrderSummary((prev) => !prev)}>
                <div className="py-3 border-y flex items-center justify-between">
                    <div className="flex items-center text-sky-800 cursor-pointer">
                        <span className="text-lg">
                            <AiOutlineShoppingCart />
                        </span>

                        {showOrderSummary ? (
                            <>
                                <p className="mx-2">Hide order summary</p>
                                <span className="text-lg">
                                    <MdKeyboardArrowUp />
                                </span>
                            </>
                        ) : (
                            <>
                                <p className="mx-2">Show order summary</p>
                                <span className="text-lg">
                                    <MdKeyboardArrowDown />
                                </span>
                            </>
                        )}
                    </div>

                    {showOrderSummary ? (
                        <></>
                    ) : (
                        <p className="font-medium text-lg">
                            Total:{" "}
                            <span className="text-green-600">$ {total}</span>
                        </p>
                    )}
                </div>
            </div>

            {showOrderSummary && (
                <>
                    {/* show items in cart */}
                    <div className="w-full h-96 pt-3 pr-3 overflow-y-auto scroll1">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center font-medium mb-3"
                            >
                                <div className="relative">
                                    {/* item image */}
                                    <Link
                                        to={`/product/${item.data.data.id}`}
                                        state={item.data.data}
                                    >
                                        <img
                                            className="w-16 rounded"
                                            src={item.data.data.image[0]}
                                        />
                                    </Link>

                                    {/* item quantity */}
                                    <span className="absolute -top-2 -right-2 flex items-center justify-center text-white text-xs w-5 h-5 rounded-full bg-slate-500">
                                        <span>{item.data.amount}</span>
                                    </span>
                                </div>

                                {/* item name */}
                                <p className="flex-1 px-4 hover:underline">
                                    <Link
                                        to={`/product/${item.data.data.id}`}
                                        state={item.data.data}
                                    >
                                        {item.data.data.name}
                                    </Link>
                                </p>

                                {/* item price */}
                                <p>$ {item.data.data.price}</p>
                            </div>
                        ))}
                    </div>

                    {/* subtotal & shipping fee container */}
                    <div className="py-3 my-4 border-y">
                        <div className="mb-2 flex items-center justify-between">
                            <p className="text-gray-700">Subtotal</p>

                            <p className="font-medium">$ {total}</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-gray-700">Shipping</p>

                            <p className="font-medium">Free</p>
                        </div>
                    </div>

                    {/* COD reminder */}
                    <div className="py-3 my-4 border-b">
                        <p className="text-gray-700">
                            Cash on delivery. Please contact us if you require
                            assistance or wish to make alternate arrangements.
                        </p>
                    </div>

                    {/* total price */}
                    <div className="lg:mb-4 flex items-center justify-between font-medium">
                        <p className="text-xl">Total</p>

                        <p className="text-2xl text-green-600">$ {total}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default OrderSummary;
