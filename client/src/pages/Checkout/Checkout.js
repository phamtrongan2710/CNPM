// components
import OrderSummary from "./OrderSummary";
import AddressForm from "./AddressForm";

const Checkout = () => {
    return (
        // <div className="my-24 mx-20">
        //     <OrderSummary />
        // </div>
        // <div className="flex lg:flex-row-reverse flex-wrap px-3 lg:pt-4 lg:px-12">
        <div className="flex lg:flex-row-reverse flex-wrap px-3 lg:pt-4 lg:px-12 mt-28 mb-7">
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
