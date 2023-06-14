import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
// toast messages
import { toast } from "react-toastify";
// icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductDetail = (props) => {
    const location = useLocation();
    const state = location.state;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [count, updateCount] = useState(1);

    // scroll to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // if product can't be found
    if (!state) {
        return (
            <section className="h-screen flex justify-center items-center">
                Loading...
            </section>
        );
    }

    // toast message
    const notify = () =>
        toast("Added to cart.", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    const addCount = () => {
        updateCount(count + 1);
    };

    const minusCount = () => {
        if (count <= 1) {
            updateCount(1);
        } else {
            updateCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                data: state,
                amount: count,
            })
        );

        notify();
    };

    const handleBuyNow = () => {
        dispatch(
            addToCart({
                data: state,
                amount: count,
            })
        );

        navigate("/checkout");
    };

    return (
        <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
            <div className="container mx-auto">
                {/* image & text wrapper */}
                <div className="flex flex-col lg:flex-row items-center">
                    {/* image */}
                    <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
                        <img
                            className="max-w-[200px] lg:max-w-sm hover:scale-110 duration-150 aspect-24/29"
                            src={state.image[0]}
                        />
                    </div>

                    {/* info */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* title */}
                        <h1 className="text-[26px] font-medium mb-2 max-w-[450px]">
                            {state.name}
                        </h1>

                        {/* price */}
                        <div className="text-xl text-red-500 font-medium mb-6">
                            $ {state.price}
                        </div>

                        {/* add-to-cart button */}
                        {/* <button
                            onClick={handleAddToCart}
                            type="button"
                            className="py-3 px-8  rounded-md border border-black border-solid flex-none transition ease-in-out duration-300 hover:bg-black hover:text-white hover:scale-105"
                        >
                            Add to cart
                        </button> */}

                        <p className="font-medium text-lg hidden md:block mt-8">
                            Quantity{" "}
                        </p>

                        <div className="h-[50px] flex justify-between mt-[10px]">
                            {/* quantity control section */}
                            <div className="w-1/6 flex flex-1 items-center h-full text-primary font-medium  rounded bg-slate-200">
                                {/* minus icon (to decrease product's quantity) */}
                                <button
                                    onClick={minusCount}
                                    className="flex-1 flex justify-center items-center cursor-pointer h-full"
                                >
                                    <AiOutlineMinus />
                                </button>

                                {/* product quantity */}
                                <div className="h-full flex justify-center items-center px-2">
                                    {count}
                                </div>

                                {/* plus icon (to increase product quantity) */}
                                <button
                                    onClick={addCount}
                                    className="flex-1 flex justify-center items-center cursor-pointer h-full"
                                >
                                    <AiOutlinePlus />
                                </button>
                            </div>

                            {/* white space */}
                            <div className="w-1/6"></div>

                            {/* "add to cart" button */}
                            <button
                                onClick={handleAddToCart}
                                type="button"
                                className="w-4/6 py-3 px-8 rounded-md border-2 border-red-500 text-red-500 font-bold border-solid flex-none transition ease-in-out duration-300 hover:scale-105"
                            >
                                Add to cart
                            </button>
                        </div>

                        <div>
                            <button
                                onClick={handleBuyNow}
                                type="button"
                                id="button_right"
                                class="w-full h-[50px] rounded-md border-black border border-solid flex-none bg-black text-white font-bold mt-[25px] duration-300 hover:scale-105"
                            >
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
