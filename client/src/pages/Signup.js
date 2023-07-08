import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api";

// toast messages
import { Flip, toast } from "react-toastify";

// icon
import SevenIcon from "../assets/Se7enStore.svg";

const Signup = () => {
    const navigate = useNavigate();

    const [signupInfo, setSignupInfo] = useState({
        username: "",
        email: "",
        password: "",
        confirmedPassword: "",
    });

    const onChangeSignupInfo = (e) => {
        setSignupInfo((prev) => ({
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

    const handleSignUp = () => {
        // check if username input field is empty
        if (!signupInfo.username) {
            notifyError("Enter username");
            return;
        }
        // check if email input field is empty
        if (!signupInfo.email) {
            notifyError("Enter email");
            return;
        }
        // check if password input field is empty
        if (!signupInfo.password) {
            notifyError("Enter a password");
            return;
        }
        // check if the password given is less than 8 characters
        if (signupInfo.password.length < 8) {
            notifyError("Use 8 characters or more for your password");
            return;
        }
        // check if confirmed password input field is empty
        if (!signupInfo.confirmedPassword) {
            notifyError("Confirm your password");
            return;
        }
        // check if password & confirmed password are not the same
        if (signupInfo.password != signupInfo.confirmedPassword) {
            notifyError("Those passwords didn't match Try again");
            return;
        }

        axios
            .post("auth/signup", {
                username: signupInfo.username,
                email: signupInfo.email,
                password: signupInfo.password,
                repeat_password: signupInfo.confirmedPassword,
            })
            .then((res) => {
                notifySuccess("You've successfully signed up. Please log in.");
                navigate("/signin");
            })
            .catch((err) => {
                notifyError(err.response.data.message);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
            <Link
                to="/"
                className="flex items-center mb-3 text-2xl font-semibold text-gray-900 blur-[2px] hover:blur-none"
            >
                <img className="w-20 h-20 mr-2" src={SevenIcon} />
            </Link>

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
                            name="username"
                            onChange={onChangeSignupInfo}
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
                            onChange={onChangeSignupInfo}
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
                            onChange={onChangeSignupInfo}
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
                            name="confirmedPassword"
                            onChange={onChangeSignupInfo}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-8/12 p-2.5"
                        />
                    </div>

                    {/* sign up button */}
                    <button
                        onClick={handleSignUp}
                        className="w-full text-red-500 border border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold px-3 py-1 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
                    >
                        Sign up
                    </button>

                    {/* link to sign in page */}
                    <p className="text-sm font-medium text-gray-900">
                        Have an account?{" "}
                        <Link
                            to="/signin"
                            className="font-bold text-primary-600 hover:underline"
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
