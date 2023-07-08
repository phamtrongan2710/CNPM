import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../api";
// toast messages
import { toast, Flip } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";

import SevenIcon from "../assets/Se7enStore.svg";

const Signin = () => {
    const navigate = useNavigate();

    // user state (logged in or not)
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [signInValue, setSignInValue] = useState({
        username: "",
        password: "",
    });

    const onChangeSignInValue = (e) => {
        setSignInValue((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    // toast messages
    const notifyError = (message) =>
        toast.error(message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    const notifySuccess = (message) =>
        toast.success(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
        });

    const handleLogin = async () => {
        // check if username input field is empty
        if (!signInValue.username) {
            notifyError("Enter your username");
            return;
        }
        // check if password input field is empty
        if (!signInValue.password) {
            notifyError("Enter your password");
            return;
        }

        axios
            .post("/auth/signin", {
                username: signInValue.username,
                password: signInValue.password,
            })
            .then((res) => {
                if (res.data.accessToken) {
                    notifySuccess("Welcome to Se7en Store. Have fun shopping!");

                    dispatch(login(res.data));

                    navigate("/");
                }
            })
            .catch((err) => {
                notifyError(
                    err.response.data.message || "Internal Server Error"
                );
            });
    };

    return (
        <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0 w-full">
            <Link
                to="/"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 blur-[2px] hover:blur-none"
            >
                <img className="w-20 h-20 mr-2" src={SevenIcon} />
            </Link>

            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
                {/* login header */}
                <div className="flex justify-between">
                    <div></div>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl w-4/5">
                        LOG IN
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
                            name="username"
                            onChange={onChangeSignInValue}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-4/5 p-2.5"
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
                            onChange={onChangeSignInValue}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-4/5 p-2.5"
                        />
                    </div>

                    {/* remember me checkbox & forgot password button */}
                    <div className="flex items-center justify-between">
                        {/* remember me checkbox */}
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
                    </div>

                    {/* login button */}
                    <button
                        onClick={handleLogin}
                        className="w-full text-red-500 border border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold px-3 py-1 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
                    >
                        Log in
                    </button>

                    {/* link to signup page */}
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
