"use client";

import { assets } from "@/public/assets";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      const response = await axios.get("/api/blog", {
        params: {
          id: params.id,
        },
      });
      setData(response.data);
    };
    fetchBlogData();
  }, [params.id]);
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
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.authorImg}
            width={60}
            height={60}
            alt="image-for-blogger-best-blog-in-delhi-ncr"
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-large max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={data.image}
          width={1280}
          height={720}
          alt="blogger-image-data-best-blog-in-delhi-ncr"
          className="rounded-2xl border-4 border-white"
        />

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <Image
              src={assets.facebook_icon}
              width={50}
              alt="share-on-facebook-blogger-best-blogging-in-delhi-ncr"
            />
            <Image
              src={assets.twitter_icon}
              width={50}
              alt="share-on-facebook-blogger-best-blogging-in-delhi-ncr"
            />
            <Image
              src={assets.googleplus_icon}
              width={50}
              alt="share-on-facebook-blogger-best-blogging-in-delhi-ncr"
            />
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Page;
