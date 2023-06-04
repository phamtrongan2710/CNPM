import React from "react";

const LoginLayout = ({ children }) => {
    return (
        <div className="flex">
            <div className="m-auto lg:w-1/3">{children}</div>
        </div>
    );
};

export default LoginLayout;
