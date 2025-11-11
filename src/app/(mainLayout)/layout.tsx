import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <div className="absolute top-8 right-0 left-0">
        <Navbar />
      </div>

      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
