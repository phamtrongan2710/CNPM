import { useState } from "react";
import { Link } from "react-router-dom";

// icons
import { BiLocationPlus, BiPhoneCall } from "react-icons/bi";
import Cart from "./Cart";

import { useSelector } from "react-redux";

const Footer = () => {
    const [showCart, setShowCart] = useState(false);
    const onClickCart = () => {
        setShowCart(true);
    };

    const user = useSelector((state) => state.user);

    return (
        <footer className="bg-neutral-100">
            <div className="flex justify-center px-8 border-b">
                <div className="flex flex-wrap w-full py-7 md:py-0">
                    {/* about us section */}
                    <div className="w-full lg:w-1/4 lg:border-r lg:border-color-border md:py-20">
                        <div className="lg:px-8">
                            <h3 className="font-bold mb-4 text-xl">About us</h3>

                            <div className="mt-0 md:mt-4 block-text">
                                <p>
                                    We are Se7en Store, the fashion destination
                                    for trendy and affordable clothing in Ho Chi
                                    Minh city. Our brand was founded by a group
                                    of students with a passion for fashion and a
                                    vision to create a one-stop-shop for all
                                    your fashion needs. We offer a wide range of
                                    clothing options for men and women,
                                    including casual wear, party wear, and
                                    accessories to complete your look.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* quick links section */}
                    <div className="w-full lg:w-1/4 lg:border-r lg:border-color-border md:py-20">
                        <div className="lg:px-8">
                            <h3 className="font-bold mb-4 text-xl">
                                Quick links
                            </h3>

                            <ul className="max-height-set overflow-hidden">
                                <div className="pb-5 md:pb-0">
                                    <li className="leading-8">
                                        <a href="/">My account</a>
                                    </li>
                                    <li className="leading-8">
                                        <Link to="/product">Products</Link>
                                    </li>

                                    {user.user ? (
                                        <li className="leading-8">
                                            <div
                                                className="cursor-pointer"
                                                onClick={onClickCart}
                                            >
                                                Cart
                                            </div>
                                            {showCart && (
                                                <Cart
                                                    setShowCart={setShowCart}
                                                />
                                            )}
                                        </li>
                                    ) : (
                                        <></>
                                    )}

                                    <li className="leading-8">
                                        <a href="/">Blog</a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    {/* shop section */}
                    <div className="w-full lg:w-1/4 lg:border-r lg:border-color-border md:py-20">
                        <div className="lg:px-8">
                            <h3 className="font-bold mb-4 text-xl">Shop</h3>

                            <ul className="max-height-set overflow-hidden">
                                <div className="pb-5 md:pb-0">
                                    <li className="leading-8">
                                        <a href="/search?query=Shirt">Shirt</a>
                                    </li>

                                    <li className="leading-8">
                                        <a href="/search?query=Jeans">Pants</a>
                                    </li>

                                    <li className="leading-8">
                                        <a href="/search?query=Dress">Dress</a>
                                    </li>

                                    <li className="leading-8">
                                        <a href="/search?query=Hat">Hat</a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    {/* contact us section */}
                    <div className="w-full lg:w-1/4 md:py-20">
                        <div className="lg:px-8">
                            <h3 className="font-bold mb-4 text-xl">
                                Contact us
                            </h3>

                            <ul className="md:mt-4">
                                {/* address */}
                                <li className="flex items-baseline justify-round">
                                    <BiLocationPlus className="w-6 h-6 mr-2" />

                                    <p>Linh Trung, Thu Duc, Ho Chi Minh</p>
                                </li>

                                {/* phone number */}
                                <li className="flex items-baseline">
                                    <BiPhoneCall className="w-6 h-6 mr-2" />

                                    <a
                                        href="tel:+84261 517 265"
                                        className="hover:text-red-500"
                                    >
                                        0261 517 265
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* copyright */}
            <h1 className="px-4 md:px-16 py-4 text-center">
                Copyright © 2023 Se7en Store. All rights reserved.
            </h1>
        </footer>
    );
};

export default Footer;
