import React, { useEffect } from "react";
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
import SingleBlogPage from "./pages/SingleBlogPage";
import FAQs from "./components/FAQs";
import Refunds from "./components/Refunds";
import Privacy from "./components/Privacy";
import TermOfUse from "./components/TermOfUse";
import VendorForm from "./components/VendorForm";
import SubmissionSuccesful from "./components/SubmissionSuccesful";
import OnboardingForm from "./components/OnboardingForm";
import NewsRoomPage from "./pages/NewsRoomPage";
import SingleNewsPage from "./pages/SingleNewsPage";
import CreateNews from "./pages/CreateNews";
import AdminPage from "./pages/AdminPage";
import AssessYourself from "./pages/AssessYourself";
import AssessmentLink from "./pages/AssessmentLink";
import RegisterUserForm from "./pages/RegisterUserForm";
import FormSubmitRedirect from "./pages/FormSubmitRedirect";
import FormSubmitted from "./components/AssessYourself/FormSubmitted";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutPage /> },
      { path: "/counselors", element: <CounselorPage /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/how-it-works", element: <HowItWorks /> },

      { path: "/gift-card", element: <GiftCard /> },
      { path: "/assessment", element: <Assessment /> },
      { path: "/psychologyinternship", element: <PsychoIntern /> },
      { path: "/marketinginternship", element: <MarketingIntern /> },
      { path: "/careers", element: <Careers /> },
      { path: "/yoga-form", element: <YogaForm /> },
      { path: "/test", element: <Test /> },
      { path: "/faq", element: <FAQs /> },
      { path: "/refunds", element: <Refunds /> },
      { path: "/privacypolicy", element: <Privacy /> },
      { path: "/termsandconditions", element: <TermOfUse /> },
      { path: "/vendoronboarding", element: <VendorForm /> },
      { path: "/vendoronboarding", element: <VendorForm /> },
      { path: "/onboarding", element: <OnboardingForm /> },
      { path: "/submission-successful", element: <SubmissionSuccesful /> },
      { path: "/payment-successful", element: <FormSubmitted /> },

      { path: "/admin", element: <AdminPage /> },
      { path: "/admin-login", element: <AdminLoginPage /> },
      { path: "/create-blog", element: <CreateBlog /> },
      { path: "/create-newsitem", element: <CreateNews /> },

      { path: "/blogs", element: <BlogPage /> },
      { path: "/post/:id", element: <SingleBlogPage /> },

      { path: "/news", element: <NewsRoomPage /> },
      { path: "/news/:id", element: <SingleNewsPage /> },

      { path: "/assessyourself", element: <AssessYourself /> },
      { path: "/registeruser/:assessmenttype", element: <RegisterUserForm /> },
      { path: "/assessmentURL/:id", element: <AssessmentLink /> },
      { path: "/submitassessment/:result", element: <FormSubmitRedirect /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
