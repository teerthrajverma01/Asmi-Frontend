import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <div className="max-w-full overflow-hidden">
        <MainNavigation />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
