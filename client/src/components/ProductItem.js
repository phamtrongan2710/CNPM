import { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
// toast messages
import { toast } from "react-toastify";
// icons
import { FiPlus } from "react-icons/fi";
import { AiFillEye } from "react-icons/ai";

const ProductItem = ({ data }) => {
    // hover state
    const [isHoverCard, setIsHoverCard] = useState(false);
    const [isHoverImage, setIsHoverImage] = useState(false);

    const dispatch = useDispatch();

    // user state (logged in or not)
    const user = useSelector((state) => state.user);

    // toast message
    const notify = (message, waitingTime) =>
        toast(message, {
            position: "top-right",
            autoClose: waitingTime,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    const handleAddToCart = (data) => {
        dispatch(addToCart(data));

        if (user.user) {
            notify("Added to cart.", 1500);
        } else {
            notify(
                "Added to cart. Login to see what's inside your cart.",
                2500
            );
        }
    };

    return (
        <div>
            <div
                className={
                    "md:px-4 pb-10 transition duration-200 " +
                    (isHoverCard ? "shadow-xl" : "shadow-none")
                }
                onMouseEnter={() => setIsHoverCard(true)}
                onMouseLeave={() => setIsHoverCard(false)}
            >
                {/* product preview  & buttons */}
                <div className="relative">
                    <div
                        className="overflow-hidden relative"
                        onMouseEnter={() => setIsHoverImage(true)}
                        onMouseLeave={() => setIsHoverImage(false)}
                    >
                        {/* product images */}
                        <div>
                            {/* main image */}
                            <div>
                                <img className="w-64" src={data.image[0]} />
                            </div>

                            {/* secondary image (shown on mouse hover) */}
                            <div>
                                <img
                                    className={
                                        "w-64 absolute top-0 left-0 transition duration-700 " +
                                        (isHoverImage
                                            ? "opacity-100"
                                            : "opacity-0")
                                    }
                                    src={data.image[1] || data.image[0]}
                                />
                            </div>
                        </div>

                        {/* view button & "add to cart" button */}
                        <div
                            className={
                                "hidden md:block w-full px-2 absolute -bottom-12 left-0 transition duration-200 z-5 " +
                                (isHoverCard ? "-translate-y-16" : "")
                            }
                        >
                            {/* view-product-detail button */}
                            <Link to={`/product/${data.id}`} state={data}>
                                <button
                                    className={
                                        "w-1/2 shadow-md font-medium rounded p-2 bg-white hover:bg-black hover:text-white transition duration-200"
                                    }
                                >
                                    <div className="flex justify-center ">
                                        <AiFillEye className="h-5 w-5" />
                                    </div>
                                </button>
                            </Link>

                            {/* add-to-cart button */}
                            <button
                                className={
                                    "w-1/2 shadow-md font-bold rounded p-2 bg-white hover:bg-red-500 hover:text-white transition duration-200 text-red-500"
                                }
                                onClick={() =>
                                    handleAddToCart({ data, amount: 1 })
                                }
                            >
                                <div className="flex justify-center ">
                                    <FiPlus className="h-5 w-5" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* product info */}
                <div className="mt-3">
                    {/* name */}
                    <Link to={`/product/${data.id}`} state={data}>
                        <p className="font-medium mb-1">{data.name}</p>
                    </Link>

                    {/* price */}
                    <p className="">$ {data.price}.00</p>

                    {/* color(s) */}
                    <div className="mt-3 flex items-center flex-wrap">
                        {data.colors.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{
                                        backgroundColor: `${item}`,
                                    }}
                                    className={
                                        "w-6 h-6 rounded-full " +
                                        (index != 0 ? "ml-2" : "")
                                    }
                                ></div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
