import React, { useEffect } from "react";
import img1 from "../assets/image/img1.png";

import { GrFormNextLink } from "react-icons/gr";

import BASE_URL from "../apis/Config";

const Blog = ({ title, summary, cover, content }) => {
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div
    // className="flex flex-col h-full border rounded-lg border-neutral-200"

    // className="overflow-hidden border border-gray-300 rounded-md indibp_wrapper"
    >
      <a
        href="#"
        className="flex flex-col overflow-hidden hover:translate-y-[-3px] duration-300 transform transition-transform border rounded-lg h-[50vh] border-neutral-200 shadow-box"
      >
        <div className="w-full overflow-hidden h-[50%]">
          <img
            src={`${BASE_URL}/` + cover}
            alt="image not found "
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col h-[50%] px-6 py-2 justify-between">
          <div>
            <div className="flex items-center gap-2 font-semibold text-neutral-900">
              <div className="px-4 py-[2px] font-semibold border-black rounded-md bg-neutral-200 text-neutral-900">
                {title}
              </div>
              <div className="text-sm">4min read</div>
            </div>
            <div className="mt-1 mb-1 text-xl font-semibold text-neutral-900">
              {truncateText(summary, 7)}
            </div>
            <div
              className="mb-2 text-xs"
              dangerouslySetInnerHTML={{ __html: truncateText(content, 15) }}
            ></div>
          </div>
          <div className="flex items-center tex-sm">
            Read More <GrFormNextLink className="size-5" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Blog;
