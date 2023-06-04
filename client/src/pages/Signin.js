import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
    return (
        <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0 w-full">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
                <div className="flex justify-between">
                    <div></div>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl w-4/5">
                        LOG IN
                    </h1>
                </div>

                <div className="space-y-4 md:space-y-6">
                    <div className="flex items-baseline justify-between">
                        <label className="block mb-2 font-medium text-gray-900">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-4/5 p-2.5"
                        />
                    </div>

                    <div className="flex items-baseline justify-between">
                        <label className="block mb-2 font-medium text-gray-900">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-4/5 p-2.5"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label className="text-gray-700">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <a
                            href="#"
                            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                            Forgot password?
                        </a>
                    </div>
                    <button className="w-full text-red-500 border border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold px-3 py-1 rounded outline-none focus:outline-none ease-linear transition-all duration-150">
                        Log in
                    </button>
                    <p className="text-sm font-medium text-gray-900">
                        Need an account?{" "}
                        <Link
                            to="/signup"
                            className="font-bold text-primary-600 hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signin;
