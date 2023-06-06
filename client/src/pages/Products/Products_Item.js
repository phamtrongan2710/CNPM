import { Link } from "react-router-dom";
import { useState } from "react";

const Products_Item = ({ item }) => {
    // console.log(item)

    // return (
    //     <div class="flex-none">
    //         {/* product image */}
    //         <div>
    //             <Link to={`/product/${item.id}`} state={item}>
    //                 <img
    //                     class="aspect-24/29"
    //                     src={item.image[0]}
    //                     alt="Product image"
    //                 />
    //             </Link>
    //         </div>

    //         {/* product info */}
    //         <div class="text-left mt-5 ">
    //             <p>
    //                 <Link
    //                     to={`/product/${item.id}`}
    //                     state={item}
    //                     class="font-medium hover:text-gray-500 transition ease-in-out"
    //                 >
    //                     {item.name}
    //                 </Link>
    //             </p>

    //             <p>$ {item.price.toFixed(2)}</p>
    //         </div>
    //     </div>
    // );

    const [isHoverCard, setIsHoverCard] = useState(false);
    const [isHoverImage, setIsHoverImage] = useState(false);

    console.log(item);

    return (
        <div>
            <div
                className={
                    "md:px-4  pb-10 transition duration-200 " +
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
                                <img className="w-64" src={item.image[0]} />
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
                                    src={item.image[1] || item.image[0]}
                                />
                            </div>
                        </div>

                        {/* view button & "add to cart" button */}
                        <div
                            className={
                                "hidden md:block w-full px-2 absolute -bottom-12 left-0 transition duration-200 z-20 " +
                                (isHoverCard ? "-translate-y-16" : "")
                            }
                        >
                            <Link to={`/product/${item.id}`} state={item}>
                                <button
                                    className={
                                        "w-1/2 shadow-md font-medium rounded p-2 bg-white hover:bg-black hover:text-white transition duration-200"
                                    }
                                >
                                    View
                                </button>
                            </Link>

                            <button
                                className={
                                    "w-1/2 shadow-md font-bold rounded p-2 bg-white hover:bg-red-500 hover:text-white transition duration-200 text-red-500"
                                }
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>

                {/* product info */}
                <div className="mt-3">
                    {/* name */}
                    <Link to={`/product/${item.id}`} state={item}>
                        <p className="font-medium mb-1">{item.name}</p>
                    </Link>

                    {/* price */}
                    <p className="">$ {item.price}.00</p>

                    {/* color(s) */}
                    <div className="mt-3 flex items-center flex-wrap">
                        {item.colors.map((item, index) => {
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

export default Products_Item;
