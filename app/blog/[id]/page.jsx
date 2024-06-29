"use client";

import { assets, blog_data } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };
  useEffect(() => {
    fetchBlogData();
  });
  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={assets.logo}
              width={180}
              height={180}
              className="w-[130px] sm:w-auto"
              alt="logo-blogger"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000]">
            Get Started
            <Image src={assets.arrow} alt="arrow-get-started-with-blogger" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700]">
            {data.title}
          </h1>
        </div>
      </div>
    </>
  ) : null;
};

export default Page;
