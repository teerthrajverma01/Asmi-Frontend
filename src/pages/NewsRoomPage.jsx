import React, { useState, useEffect } from "react";
import lh from "../assets/image/news/lh.jpg";
import l1 from "../assets/image/news/l1.jpg";
import s1 from "../assets/image/news/s1.jpg";
import sh from "../assets/image/news/sh.jpg";
import all from "../assets/image/news/all.jpg";

import BASE_URL from "../apis/Config";

const NewsRoomPage = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}/news/fetchnews`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setNews(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <>
      <div className="">
        <div className="bg-[#F5F5F7] pb-8">
          {/* to center all items */}
          <div className="flex flex-col items-center ">
            <div className="pt-12 mx-4 sm:mx-[10%] lg:mx[20%]  ">
              <div className="mb-4 text-3xl font-bold">Latest News</div>
              {/* highlight news */}
              <div className="relative mb-8 ">
                <div className="flex">
                  <img className="object-cover rounded-3xl" src={lh} alt="" />
                </div>
                <div className="absolute pr-3 bottom-[5%] left-[4%] ">
                  <div className="font-medium"> Apple Stories</div>
                  <div className="pt-2 text-2xl font-bold leading-6 sm:text-3xl lg:text-5xl text-wrap">
                    South America’s Atlantic Forest
                  </div>
                  <div className="font-medium">12-02-2024</div>
                </div>
              </div>
              {/* rest news grid */}
              <div className="grid mb-8 lg:grid-cols-3 sm:gap-6 lg:gap-8 sm:grid-cols-2">
                <div className="bg-white overflow-hidden rounded-[3%]">
                  <img src={l1} className="" alt="" />
                  <div className="p-6">
                    <div className="font-medium text-gray-600">
                      APPLE STATEMENT
                    </div>
                    <div className="text-xl">
                      The App Store, Spotify, and Europe’s thriving digital
                      music market
                    </div>
                    <div className="font-medium text-gray-600">
                      March 4, 2024
                    </div>
                  </div>
                </div>
                <div className="bg-white overflow-hidden rounded-[3%]">
                  <img src={l1} className="" alt="" />
                  <div className="p-6">
                    <div className="font-medium text-gray-600">
                      APPLE STATEMENT
                    </div>
                    <div className="text-xl">
                      The App Store, Spotify, and Europe’s thriving digital
                      music market
                    </div>
                    <div className="font-medium text-gray-600">
                      March 4, 2024
                    </div>
                  </div>
                </div>
                <div className="bg-white overflow-hidden rounded-[3%]">
                  <img src={l1} className="" alt="" />
                  <div className="p-6">
                    <div className="font-medium text-gray-600">
                      APPLE STATEMENT
                    </div>
                    <div className="text-xl">
                      The App Store, Spotify, and Europe’s thriving digital
                      music market
                    </div>
                    <div className="font-medium text-gray-600">
                      March 4, 2024
                    </div>
                  </div>
                </div>
                <div className="bg-white overflow-hidden rounded-[3%]">
                  <img src={l1} className="" alt="" />
                  <div className="p-6">
                    <div className="font-medium text-gray-600">
                      APPLE STATEMENT
                    </div>
                    <div className="text-xl">
                      The App Store, Spotify, and Europe’s thriving digital
                      music market
                    </div>
                    <div className="font-medium text-gray-600">
                      March 4, 2024
                    </div>
                  </div>
                </div>
                <div className="bg-white overflow-hidden rounded-[3%]">
                  <img src={l1} className="" alt="" />
                  <div className="p-6">
                    <div className="font-medium text-gray-600">
                      APPLE STATEMENT
                    </div>
                    <div className="text-xl">
                      The App Store, Spotify, and Europe’s thriving digital
                      music market
                    </div>
                    <div className="font-medium text-gray-600">
                      March 4, 2024
                    </div>
                  </div>
                </div>
                <div className="bg-white overflow-hidden rounded-[3%]">
                  <img src={l1} className="" alt="" />
                  <div className="p-6">
                    <div className="font-medium text-gray-600">
                      APPLE STATEMENT
                    </div>
                    <div className="text-xl">
                      The App Store, Spotify, and Europe’s thriving digital
                      music market
                    </div>
                    <div className="font-medium text-gray-600">
                      March 4, 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className=" mx-4 sm:mx-[10%] lg:mx[20%] ">
            {/* to center all items */}
            <div className="flex flex-col items-center mb-12">
              <div className="pt-12 pb-4 text-5xl font-semibold">Stories</div>
              <div className="font-medium">
                The creators, developers, and innovators leaving the world
                better than they found it.
              </div>
            </div>
            {/* highlight story */}

            <div className="">
              {/*  mobile view*/}
              <div className="relative mb-8 sm:hidden">
                <img className="rounded-3xl" src={sh} alt="" />
                <div className="absolute pr-3 bottom-[5%] left-[4%] ">
                  <div className="font-medium"> Apple Stories</div>
                  <div className="pt-2 text-2xl font-bold leading-6 sm:text-3xl lg:text-5xl text-wrap">
                    South America’s Atlantic Forest
                  </div>
                  <div className="font-medium">12-02-2024</div>
                </div>
              </div>
              {/* lap view */}
              <div className="hidden mb-12 sm:grid sm:grid-cols-2 ">
                <div className="flex">
                  <img src={sh} className="object-cover" alt="" />
                </div>
                <div className="flex flex-col justify-center p-8 ">
                  <div className="mb-3 font-medium"> Apple Stories</div>
                  <div className="pt-2 font-bold leading-6 sm:text-2xl xl:text-3xl text-wrap">
                    South America’s Atlantic Forest
                  </div>
                  <div className="mb-4 text-lg">
                    Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet
                    consectetur adipisicing elit ipsum dolor sit amet
                    consectetur. Ratione, sint.
                  </div>
                  <div className="font-medium">12-02-2024</div>
                </div>
              </div>

              {/* rest stories grid */}
              <div className="grid mb-8 lg:grid-cols-3 sm:gap-6 lg:gap-8 sm:grid-cols-2">
                <div className="relative mb-4">
                  <div className="flex">
                    <img className="object-cover rounded-3xl" src={s1} alt="" />
                  </div>
                  <div className="absolute pr-3 bottom-[5%] left-[4%] ">
                    <div className="font-medium"> Apple Stories</div>
                    <div className="pt-2 text-xl font-bold sm:text-2xl lg:text-3xl text-wrap">
                      South America’s Atlantic Forest
                    </div>
                    <div className="font-medium">12-02-2024</div>
                  </div>
                </div>
                <div className="relative mb-4">
                  <div className="flex">
                    <img className="object-cover rounded-3xl" src={s1} alt="" />
                  </div>
                  <div className="absolute pr-3 bottom-[5%] left-[4%] ">
                    <div className="font-medium"> Apple Stories</div>
                    <div className="pt-2 text-xl font-bold sm:text-2xl lg:text-3xl text-wrap">
                      South America’s Atlantic Forest
                    </div>
                    <div className="font-medium">12-02-2024</div>
                  </div>
                </div>
                <div className="relative mb-4">
                  <div className="flex">
                    <img className="object-cover rounded-3xl" src={s1} alt="" />
                  </div>
                  <div className="absolute pr-3 bottom-[5%] left-[4%] ">
                    <div className="font-medium"> Apple Stories</div>
                    <div className="pt-2 text-xl font-bold sm:text-2xl lg:text-3xl text-wrap">
                      South America’s Atlantic Forest
                    </div>
                    <div className="font-medium">12-02-2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f5f5f7]">
          {/* to center all items */}

          <div className="flex flex-col items-center ">
            <div className="pt-12 mx-4 sm:mx-[10%] lg:mx[20%]  ">
              <div className="mb-4 text-3xl font-bold">More From NewsRoom</div>
              {/* grid all-news-items */}
              <div className="grid gap-8 mb-8 lg:grid-cols-2">
                <div className="grid grid-cols-3">
                  <div className="flex col-span-1 bg-black">
                    <img src={all} className="object-cover" alt="" />
                  </div>
                  <div className="col-span-2 px-2 m-2">
                    <div className="pb-2 font-semibold text-gray-600">
                      PRESS RELEASE
                    </div>
                    <div className="pb-2 font-semibold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero blanditiis sit incidunt
                    </div>
                    <div className="font-semibold text-gray-600">
                      Feb-14 2022
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex col-span-1 bg-black">
                    <img src={all} className="object-cover" alt="" />
                  </div>
                  <div className="col-span-2 px-2 m-2">
                    <div className="pb-2 font-semibold text-gray-600">
                      PRESS RELEASE
                    </div>
                    <div className="pb-2 font-semibold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero blanditiis sit incidunt
                    </div>
                    <div className="font-semibold text-gray-600">
                      Feb-14 2022
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex col-span-1 bg-black">
                    <img src={all} className="object-cover" alt="" />
                  </div>
                  <div className="col-span-2 px-2 m-2">
                    <div className="pb-2 font-semibold text-gray-600">
                      PRESS RELEASE
                    </div>
                    <div className="pb-2 font-semibold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero blanditiis sit incidunt
                    </div>
                    <div className="font-semibold text-gray-600">
                      Feb-14 2022
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex col-span-1 bg-black">
                    <img src={all} className="object-cover" alt="" />
                  </div>
                  <div className="col-span-2 px-2 m-2">
                    <div className="pb-2 font-semibold text-gray-600">
                      PRESS RELEASE
                    </div>
                    <div className="pb-2 font-semibold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero blanditiis sit incidunt
                    </div>
                    <div className="font-semibold text-gray-600">
                      Feb-14 2022
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex col-span-1 bg-black">
                    <img src={all} className="object-cover" alt="" />
                  </div>
                  <div className="col-span-2 px-2 m-2">
                    <div className="pb-2 font-semibold text-gray-600">
                      PRESS RELEASE
                    </div>
                    <div className="pb-2 font-semibold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero blanditiis sit incidunt
                    </div>
                    <div className="font-semibold text-gray-600">
                      Feb-14 2022
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex col-span-1 bg-black">
                    <img src={all} className="object-cover" alt="" />
                  </div>
                  <div className="col-span-2 px-2 m-2">
                    <div className="pb-2 font-semibold text-gray-600">
                      PRESS RELEASE
                    </div>
                    <div className="pb-2 font-semibold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero blanditiis sit incidunt
                    </div>
                    <div className="font-semibold text-gray-600">
                      Feb-14 2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsRoomPage;
