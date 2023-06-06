import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ProductDetail = (props) => {
    const location = useLocation();
    const state = location.state;

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
                        <button
                            type="button"
                            class="py-4 px-8 h-[50px] rounded-md border-black border border-solid flex-none transition ease-in-out duration-300 hover:bg-black hover:text-white hover:scale-105 "
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
