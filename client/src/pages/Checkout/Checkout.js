// components
import OrderSummary from "./OrderSummary";
import AddressForm from "./AddressForm";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

const Checkout = () => {
    // user state (logged in or not)
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.user) {
            navigate("/");
        }

        // automatically scroll to the top of the page
        window.scrollTo(0, 0);
    }, []);

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
