import { useState } from "react";
import { Link } from "react-router-dom";

const HomeBestSellerItem = ({ data }) => {
    // hover state
    const [isHoverCard, setIsHoverCard] = useState(false);
    const [isHoverImage, setIsHoverImage] = useState(false);

    console.log(data);

    return (
        <div>
            <div
                className={
                    "cursor-pointer md:px-4 pb-10 transition duration-200 " +
                    (isHoverCard ? "shadow-lg" : "shadow-none")
                }
                onMouseEnter={() => setIsHoverCard(true)}
                onMouseLeave={() => setIsHoverCard(false)}
            >
                {/* product preview  & "add to cart" button */}
                <div className="relative">
                    <div
                        className="overflow-hidden relative"
                        onMouseEnter={() => setIsHoverImage(true)}
                        onMouseLeave={() => setIsHoverImage(false)}
                    >
                        {/* product images */}
                        <Link to={`/product/${data.id}`} state={data}>
                            <div>
                                {/* main image */}
                                <div>
                                    <img className="w-64" src={data.image[0]} />
                                </div>

                                {/* secondary image (shown on mouse hover) */}
                                <div>
                                    <img
                                        className={
                                            "w-64 absolute top-0 left-0 z-10 transition duration-700 " +
                                            (isHoverImage
                                                ? "opacity-100"
                                                : "opacity-0")
                                        }
                                        src={data.image[1] || data.image[0]}
                                    />
                                </div>
                            </div>
                        </Link>

                        {/* "add to cart" button */}
                        <div
                            className={
                                "hidden md:block w-full px-2 absolute -bottom-12 left-0 transition duration-200 z-20 " +
                                (isHoverCard ? "-translate-y-16" : "")
                            }
                        >
                            <button
                                className={
                                    "w-full shadow-md font-medium rounded p-2 bg-white hover:bg-black hover:text-white transition duration-200 "
                                }
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>

                {/* product info */}
                <Link to={`/product/${data.id}`} state={data}>
                    <div className="mt-3">
                        {/* name */}
                        <p className="font-medium mb-1">{data.name}</p>

                        {/* price */}
                        <p className="">$ {data.price}.00</p>

                        {/* colors */}
                        <div className="mt-3 flex items-center flex-wrap">
                            <div className="mr-2 mt-1">Available colors:</div>

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
                </Link>
            </div>
        </div>
    );
};

export default HomeBestSellerItem;
