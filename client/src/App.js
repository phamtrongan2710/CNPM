import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// routing
import { publicRoutes } from "./routes";
// header & footer
import Header from "./components/Header";
import Footer from "./components/Footer";
// default layout
import DefaultLayout from "./layouts/DefaultLayout";
// toast messages container
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// socket
import SocketContext from "./contexts/socket";
import io from "socket.io-client";

function App() {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io("http://localhost:8080");
        setSocket(newSocket);

        return () => {
            setSocket(null);
            newSocket.close();
        };
    }, []);

    return (
        <SocketContext.Provider value={socket}>
            <div className="overflow-hidden">
                <Router>
                    <ToastContainer />

                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;

                            // console.log(`index: ${index}`);

                            if (route.layout) Layout = route.layout;

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </Router>
            </div>
        </SocketContext.Provider>
    );
}

export default App;
