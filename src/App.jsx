import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CounselorPage from "./pages/CounselorPage";
import BlogPage from "./pages/BlogPage";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import AdminLoginPage from "./pages/AdminLoginPage";
import CreateBlog from "./pages/CreateBlog";
import GiftCard from "./components/GiftCard";
import Assessment from "./components/Assessment";
import PsychoIntern from "./components/PsychoIntern";
import MarketingIntern from "./components/MarketingIntern";
import Careers from "./components/Careers";
import Test from "./components/Test";
import YogaForm from "./components/YogaForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutPage /> },
      { path: "/counselors", element: <CounselorPage /> },
      { path: "/blogs", element: <BlogPage /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/how-it-works", element: <HowItWorks /> },
      { path: "/admin-login", element: <AdminLoginPage /> },
      { path: "/create-blog", element: <CreateBlog /> },
      { path: "/gift-card", element: <GiftCard /> },
      { path: "/assessment", element: <Assessment /> },
      { path: "/psychologyinternship", element: <PsychoIntern /> },
      { path: "/marketinginternship", element: <MarketingIntern /> },
      { path: "/careers", element: <Careers /> },
      { path: "/test", element: <Test /> },
      { path: "/yoga-form", element: <YogaForm /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
