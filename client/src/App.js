import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// routing
import { publicRoutes } from "./routes";
// header & footer
import Header from "./components/Header";
import Footer from "./components/Footer";
// default layout
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
    return (
        <div className="overflow-hidden">
            <Router>
                <Routes>
                    {publicRoutes.map((route) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) Layout = route.layout;

                        return (
                            <Route
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
    );
}

export default App;
