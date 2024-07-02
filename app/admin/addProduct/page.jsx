"use client";

import { assets } from "@/public/assets";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Aayush Singh",
    authorImg: "/profile_icon.png",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
    // for only data show in console otherwise useless
    // console.log(data);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);
    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "Startup",
        author: "Aayush Singh",
        authorImg: "/profile_icon.png",
      });
    } else {
      toast.error("Error");
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={70}
            alt="upload-area"
            className="mt-4 cursor-pointer rounded-md"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4">Blog Title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          type="text"
          placeholder="Type Here"
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border rounded-md"
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          type="text"
          placeholder="write content here"
          required
          rows={6}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border rounded-md"
        />
        <p className="text-xl mt-4">Blog Category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="mt-4 w-40 px-4 py-3 border text-gray-500 rounded-md"
        >
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Startup">Startup</option>
        </select>
        <br />
        <button
          type="submit"
          className="mt-8 w-40 h-12 bg-black text-white rounded-md"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddProduct;
