// components
import OrderSummary from "./OrderSummary";
import AddressForm from "./AddressForm";

import { useSelector } from "react-redux";

const Checkout = () => {
    // user state (logged in or not)
    const user = useSelector((state) => state.user);

    return (
        <div className="flex md:flex-row-reverse flex-wrap px-3 lg:pt-4 lg:px-12 mt-28 mb-7">
            <div className="w-full lg:w-3/5">
                <AddressForm />
            </div>

            <div className="w-full lg:w-2/5">
                <OrderSummary />
            </div>
        </div>
    );
};

export default Checkout;
