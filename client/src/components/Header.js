import React, { useContext, useEffect, useState } from "react";

// icons
import SevenIcon from "../assets/Se7enStore.svg";
import { BiSearch } from "react-icons/bi";
import { VscSignOut } from "react-icons/vsc";
import { RiShoppingBagLine } from "react-icons/ri";

const Header = () => {
    // header state
    const [isActive, setIsActive] = useState(false);

    // event listener
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100 ? setIsActive(true) : setIsActive(false);
        });
    });

    return (
        // <div className="flex items-center px-4 lg:px-12 py-3 shadow">
        //     {/* logo */}
        //     <div className="w-36">
        //         <a href="/">
        //             <img className="w-[50px]" src={SevenIcon} />
        //         </a>
        //     </div>

        //     <div className="flex-1 flex items-center">
        //         <h1>Products</h1>
        //     </div>

        //     <div className="flex-1 flex items-center justify-end">
        //         {/* search icon */}
        //         <div className="cursor-pointer px-2 lg:px-3">
        //             <BiSearch className="text-xl" />
        //         </div>

        //         {/* cart icon */}
        //         <div className="relative cursor-pointer px-2 lg:px-3">
        //             <RiShoppingBagLine className="text-xl" />
        //         </div>

        //         {/* sign-out icon */}
        //         <div className="hidden lg:flex cursor-pointer px-2 lg:px-3">
        //             <VscSignOut className="text-xl" />
        //         </div>
        //     </div>
        // </div>

        <header
            className={`${
                isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
            } fixed w-full z-10 transition-all`}
        >
            <div className="container mx-auto flex items-center justify-between h-full">
                {/* logo */}
                <div className="w-24">
                    <a href="/">
                        <img className="w-[50px]" src={SevenIcon} />
                    </a>
                </div>

                <div className="flex-1 flex items-center">
                    <h1>Products</h1>
                </div>

                <div className="flex-1 flex items-center justify-end">
                    {/* search icon */}
                    <div className="cursor-pointer px-2 lg:px-3">
                        <BiSearch className="text-xl" />
                    </div>

                    {/* cart icon */}
                    <div className="relative cursor-pointer px-2 lg:px-3">
                        <RiShoppingBagLine className="text-xl" />
                    </div>

                    {/* sign-out icon */}
                    <div className="hidden lg:flex cursor-pointer px-2 lg:px-3">
                        <VscSignOut className="text-xl" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
