import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Section1 from "../Pages/Home/Section1";
import Section2 from "../Pages/Home/Section2";
import Section3 from "../Pages/Home/Section3";
import Section4 from "../Pages/Home/Section4";
import Section5 from "../Pages/Home/Section5";
import AllBlogs from "../Pages/Blog/AllBlogs";
import BlogContent from "../Pages/Blog/BlogContent";
import AboutSection1 from "../Pages/About/AboutSection1";
import AboutSection2 from "../Pages/About/AboutSection2";
import AboutSection3 from "../Pages/About/AboutSection3";
import AboutSection4 from "../Pages/About/AboutSection4";
import Spingame from "../SpinWheelGame/Spingame";
import Login from "../Registration/Login";
import Navbar from "../Pages/Ecommerce/Navbar";
import Banner from "../Pages/Ecommerce/Banners";
import Options from "../Pages/Ecommerce/Options/Options";
import DeviceCards from "../Pages/Ecommerce/DeviceCards";
import Services from "../Pages/Ecommerce/Services";
import DeviceSpecifications from "../Pages/Ecommerce/DeviceSpecifications";
import Purchase from "../Pages/Ecommerce/Purchase";
import DiaglogBox from "../Pages/Ecommerce/DiaglogBox";
import Cart from "../Pages/Ecommerce/Cart";
import Footer from "../Footer/Footer";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Nav />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                {/* <Section5 /> */}
                <Footer />
            </>
        ),
    },
    {
        path: "/About",
        element: (
            <>
                <Nav />
                <AboutSection1 />
                <AboutSection2 />
                <AboutSection3 />
                <AboutSection4 />
                <Footer />
            </>
        ),
    },
    {
        path: "/AllBlogs",
        element: (
            <>
                <Nav />
                <AllBlogs filterKeyword="" />
                <Footer />
            </>
        ),
    },
    {
        path: "/BlogContent",
        element: (
            <>
                <Nav />
                <BlogContent />
                <Footer />
            </>
        ),
    },
    {
        path: "/Spingame",
        element: (
            <>
                <Nav />
                <Spingame />
                <Footer />
            </>
        ),
    },
    {
        path: "/Login",
        element: (
            <>
                <Nav />
                <Login />
                <Footer />
            </>
        ),
    },
    {
        path: "/Ecommerce",
        element: (
            <>
                <Navbar />
                <Banner />
                <Options />
                <DeviceCards />
                <Services />
            </>
        ),
    },
    {
        path: "/DiaglogBox/Ecommerce",
        element: (
            <>
                <Navbar />
                <Banner />
                <Options />
                <DeviceCards />
                <Services />
            </>
        ),
    },
    {
        path: "/Specifications",
        element: (
            <>
                <Navbar />
                <DeviceSpecifications />
            </>
        ),
    },
    {
        path: "/Purchase",
        element: (
            <>
                <Navbar />
                <Purchase />
            </>
        ),
    },
    {
        path: "/DiaglogBox",
        element: (
            <>
                <Navbar />
                <DiaglogBox />

            </>
        ),
    },

    {
        path: "/Cart",
        element: (
            <>
                <Navbar />
                <Cart />
            </>
        ),
    },

]);

function LandingPage() {
    return (
        <RouterProvider router={router}>
            <>{router}</>
        </RouterProvider>
    );
}

export default LandingPage;
