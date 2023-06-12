import { Link } from "react-router-dom";
// icons
import { HiMinusSm } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import { useDispatch } from "react-redux";
import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
} from "../features/cart/cartSlice";

const CartItem = ({ data }) => {
    const dispatch = useDispatch();

    console.log(data.data.data);

    return (
        <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light">
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                {/* image */}
                <Link
                    to={`/product/${data.data.data.id}`}
                    state={data.data.data}
                >
                    <img
                        className="max-w-[80px]"
                        src={data.data.data.image[0]}
                    ></img>
                </Link>

                <div className="w-full flex flex-col">
                    {/* product name & remove button */}
                    <div className="flex font-medium hover:underline justify-between mb-2">
                        {/* product name */}
                        <Link
                            to={`/product/${data.data.data.id}`}
                            state={data.data.data}
                        >
                            {data.data.data.name}
                        </Link>

                        {/* remove icon (to remove item from cart) */}
                        <div
                            onClick={() =>
                                dispatch(removeFromCart(data.data.data.id))
                            }
                            className="text-xl cursor-pointer"
                        >
                            <IoMdClose />
                        </div>
                    </div>

                    {/* quantity control section, item price  & final price */}
                    <div className="flex gap-x-2 h-[36px] text-sm">
                        {/* quantity control section */}
                        <div className="flex flex-1 max-w-[100px] items-center h-full  text-primary font-medium  rounded bg-slate-200">
                            {/* minus icon (to decrease product's quantity) */}
                            <div
                                onClick={() =>
                                    dispatch(
                                        decreaseQuantity(data.data.data.id)
                                    )
                                }
                                className="flex-1 flex justify-center items-center cursor-pointer h-full"
                            >
                                <HiMinusSm />
                            </div>

                            {/* product quantity */}
                            <div className="h-full flex justify-center items-center px-2">
                                {data.data.amount}
                            </div>

                            {/* plus icon (to increase product quantity) */}
                            <div
                                onClick={() =>
                                    dispatch(
                                        increaseQuantity(data.data.data.id)
                                    )
                                }
                                className="flex-1 flex justify-center items-center cursor-pointer h-full"
                            >
                                <IoMdAdd />
                            </div>
                        </div>

                        {/* item price */}
                        <div className="flex-1 flex items-center justify-around font-normal text-gray-500">
                            $ {data.data.data.price}
                        </div>

                        {/* final price (round to 2 decimals place) */}
                        {/* <div className="flex-1 flex justify-end items-center text-primary font-bold">{`$ ${parseFloat(
                            data.data.data.price * data.data.amount
                        ).toFixed(2)}`}</div> */}
                        <div className="flex-1 flex justify-end items-center text-primary font-bold">
                            {`$ ${data.data.data.price * data.data.amount}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
