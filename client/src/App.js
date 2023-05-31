// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// routing
import { publicRoutes } from "./routes";

function App() {
    return (
        <div className="overflow-hidden">
            <Router>
                <Routes>
                    {publicRoutes.map((route) => {
                        const Page = route.component;

                        return <Route path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
