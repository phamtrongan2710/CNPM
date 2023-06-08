import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// icons
import { HiMinusSm } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";

const CartItem = ({ data }) => {
    return (
        <div className="flex items-center mb-2">
            {/* product image */}
            <Link to={`/product/${data.data.data.id}`} state={data.data.data}>
                <img className="w-24" src={data.data.data.image[0]} />
            </Link>

            <div className="pl-4">
                {/* product name */}
                <Link
                    to={`/product/${data.data.data.id}`}
                    state={data.data.data}
                >
                    <p className="font-medium hover:underline">
                        {data.data.data.name}
                    </p>
                </Link>

                {/* product price */}
                <p className="">$ {data.data.data.price}.00</p>

                <div className="flex items-center mt-2.5">
                    {/* quantity */}
                    <div className="flex items-center overflow-hidden rounded bg-slate-200">
                        {/* "-" icon */}
                        <button className="p-2">
                            <HiMinusSm />
                        </button>

                        {/* amount */}
                        <p className="w-4">{data.data.amount}</p>

                        {/* "+" icon */}
                        <button className="p-2">
                            <IoMdAdd />
                        </button>
                    </div>

                    {/* remove button */}
                    <button className="opacity-80 text-sm underline p-2 ml-2">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
