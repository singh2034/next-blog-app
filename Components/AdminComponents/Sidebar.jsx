import { assets } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <Link href={"/admin"}>
        <div className="px-2 sm:pl-14 py-3 border border-black">
          <Image src={assets.logo} width={120} alt="logo-blogger" />
        </div>
      </Link>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link href={"/admin/addProduct"}>
            <div className="flex items-center border border-black gap-3 font-medium  px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]">
              <Image src={assets.add_icon} width={28} alt="add-icon" />
              <p>Add Blog</p>
            </div>
          </Link>

          <div className="py-5">
            <Link href={"/admin/blogList"}>
              <div className="flex items-center border border-black gap-3 font-medium  px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]">
                <Image src={assets.blog_icon} width={28} alt="add-icon" />
                <p>Blog Lists</p>
              </div>
            </Link>
          </div>

          <Link href={"/admin/subscription"}>
            <div className="flex items-center border border-black gap-3 font-medium  px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]">
              <Image src={assets.email_icon} width={28} alt="add-icon" />
              <p>Subscriptions</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
