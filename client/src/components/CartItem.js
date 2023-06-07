const CartItem = ({ data }) => {
    return (
        <div className="flex items-center mb-2">
            {/* product image */}
            <img className="w-24" src={data.data.data.image[0]} />

            <div className="pl-4">
                {/* product name */}
                <p className="font-medium hover:underline">
                    {data.data.data.name}
                </p>

                {/* product price */}
                <p className="">$ {data.data.data.price}.00</p>

                {/* amount */}
                <p className="w-4">Amount: {data.data.amount}</p>

                {/* remove button */}
                <button className="opacity-80 text-sm underline">Remove</button>
            </div>
        </div>
    );
};

export default CartItem;
