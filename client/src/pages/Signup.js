import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
                {/* sign up header */}
                <div className="flex justify-between">
                    <div></div>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl w-8/12">
                        SIGN UP
                    </h1>
                </div>

                {/* input fields */}
                <div className="space-y-4 md:space-y-6">
                    {/* username */}
                    <div className="flex items-baseline justify-between">
                        <label className="block mb-2 font-medium text-gray-900">
                            Username
                        </label>
                        <input
                            type="text"
                            name="userName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-8/12 p-2.5"
                        />
                    </div>

                    {/* email */}
                    <div className="flex items-baseline justify-between">
                        <label className="block mb-2 font-medium text-gray-900 text-right mr-0">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-8/12 p-2.5"
                        />
                    </div>

                    {/* password */}
                    <div className="flex items-baseline justify-between">
                        <label className="block mb-2 font-medium text-gray-900">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-8/12 p-2.5"
                        />
                    </div>

                    {/* confirm password */}
                    <div className="flex items-baseline justify-between">
                        <label className="block mb-2 font-medium text-gray-900">
                            Confirm password
                        </label>
                        <input
                            type="password"
                            name="repeatPassword"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-8/12 p-2.5"
                        />
                    </div>

                    {/* sign up button */}
                    <button className="w-full text-red-500 border border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold px-3 py-1 rounded outline-none focus:outline-none ease-linear transition-all duration-150">
                        Sign up
                    </button>

                    {/* link to sign in page */}
                    <p className="text-sm font-medium text-gray-900">
                        Have an account?{" "}
                        <Link
                            to="/signin"
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
