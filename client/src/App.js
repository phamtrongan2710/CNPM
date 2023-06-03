// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// routing
import { publicRoutes } from "./routes";
// header & footer
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="overflow-hidden">
            <Router>
                <Header />

                <Routes>
                    {publicRoutes.map((route) => {
                        const Page = route.component;

                        return <Route path={route.path} element={<Page />} />;
                    })}
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
