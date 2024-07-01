import { assets } from "@/public/assets";
import Image from "next/image";

const AddProduct = () => {
  return (
    <>
      <form className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            src={assets.upload_area}
            width={140}
            height={70}
            alt="upload-area"
            className="mt-4 cursor-pointer"
          />
        </label>
        <input type="file" id="image" hidden required />
      </form>
    </>
  );
};

export default AddProduct;
