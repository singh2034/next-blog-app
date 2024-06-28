import { assets } from "@/public/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image
        src={assets.logo_light}
        width={120}
        height={120}
        alt="logo-light-footer"
      />
      <p className="text-sm text-white"> All Right Reserved. &#169; Blogger</p>
      <div className="flex">
        <Image
          src={assets.facebook_icon}
          width={40}
          height={40}
          alt="facebook-blogger"
        />
        <Image
          src={assets.twitter_icon}
          width={40}
          height={40}
          alt="facebook-blogger"
        />
        <Image
          src={assets.googleplus_icon}
          width={40}
          height={40}
          alt="facebook-blogger"
        />
      </div>
    </div>
  );
};

export default Footer;
