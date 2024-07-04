import { assets } from "@/public/assets";
import Image from "next/image";

const BlogTableItem = ({ authorImg, title, author,date }) => {
    const BlogDate = new Date(date)
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          src={authorImg ? authorImg : assets.profile_icon}
          width={40}
          height={40}
          alt="author-image"
        />
        <p>{author?author:"No Author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "no title"}</td>
      <td className="px-6 py-4">{BlogDate.toDateString()}</td>
      <td className="px-6 py-4 cursor-pointer">X</td>
    </tr>
  );
};

export default BlogTableItem;
