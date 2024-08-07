"use client";

import BlogList from "@/Components/BlogList";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  return (
    <div>
      <ToastContainer theme="dark" />
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
};

export default page;
