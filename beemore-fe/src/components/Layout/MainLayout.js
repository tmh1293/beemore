import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="mt-4">{children}</div>
      <Footer />
    </div>
  );
}
