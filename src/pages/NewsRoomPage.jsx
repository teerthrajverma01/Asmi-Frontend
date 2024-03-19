import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import BASE_URL from "../apis/Config";

const NewsRoomPage = () => {
  const [news, setNews] = useState([]);
  const [latestnewshead, setLatestnewshead] = useState();
  const [storieshead, setStorieshead] = useState();
  const [latestnews, setLatestnews] = useState();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/news/fetchnews`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const reversenews = data.allNewsItem.reverse();
        setNews((prevstate) => reversenews);

        //seperate latestnews
        const latestnewsall = reversenews.filter((news) => {
          return news.category === "NEWS";
        });

        setLatestnewshead((prevstate) => latestnewsall[0]);
        setLatestnews((prevstate) => latestnewsall.slice(1));
        // seperate stories
        const storiesall = reversenews.filter((news) => {
          return news.category === "STORIES";
        });

        setStorieshead((prevstate) => storiesall[0]);
        setStories((prevstate) => storiesall.slice(1));
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  // console.log(news);
  // console.log(storieshead);
  // console.log(latestnewshead);
  console.log(latestnews);
  // console.log(stories);
  return (
    <>
      <div className="">
        {/* section1 */}
        <div className="bg-[#F5F5F7] pb-8">
          {/* to center all items */}
          <div className="flex flex-col items-center ">
            <div className="pt-12 mx-4 sm:mx-[10%] lg:mx[20%]  ">
              <div className="mb-4 text-3xl font-bold">Latest News</div>
              {/* highlight news */}

              <div className="relative mb-8 ">
                <Link to={`/news/${latestnewshead && latestnewshead._id}`}>
                  <div className="flex bg-yellow-200">
                    <img
                      className="object-cover "
                      src={
                        latestnewshead && latestnewshead.coverImage
                          ? latestnewshead.coverImage
                          : ""
                      }
                      alt=""
                    />
                  </div>
                  <div className="absolute pr-3 bottom-[5%] left-[4%] ">
                    <div className="font-medium">
                      {latestnewshead && latestnewshead.tag
                        ? latestnewshead.tag
                        : ""}
                    </div>
                    <div className="pt-2 text-2xl font-bold leading-6 sm:text-3xl lg:text-5xl text-wrap">
                      {latestnewshead && latestnewshead.headline
                        ? latestnewshead.headline
                        : ""}
                    </div>
                    <div className="font-medium">
                      {latestnewshead && latestnewshead.date
                        ? latestnewshead.date
                        : ""}
                    </div>
                  </div>
                </Link>
              </div>

              {/* rest news grid */}

              <div className="grid mb-8 lg:grid-cols-3 sm:gap-6 lg:gap-8 sm:grid-cols-2">
                {latestnews ? (
                  latestnews.map((latestnewsitem) => (
                    <div
                      key={latestnewsitem._id}
                      className="bg-white overflow-hidden rounded-[3%]"
                    >
                      <Link
                        to={`/news/${latestnewsitem && latestnewsitem._id}`}
                      >
                        <img
                          src={
                            latestnewsitem && latestnewsitem.coverImage
                              ? latestnewsitem.coverImage
                              : ""
                          }
                          alt=""
                        />
                        <div className="p-6">
                          <div className="font-medium text-gray-600">
                            {latestnewsitem && latestnewsitem.tag
                              ? latestnewsitem.tag
                              : ""}
                          </div>
                          <div className="text-xl">
                            {latestnewsitem && latestnewsitem.headline
                              ? latestnewsitem.headline
                              : ""}
                          </div>
                          <div className="font-medium text-gray-600">
                            {latestnewsitem && latestnewsitem.date
                              ? latestnewsitem.date
                              : ""}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <p>no news</p>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* section2 */}
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
                <Link to={`/news/${storieshead && storieshead._id}`}>
                  <img
                    className="rounded-3xl"
                    src={
                      storieshead && storieshead.coverImage
                        ? storieshead.coverImage
                        : ""
                    }
                    alt=""
                  />
                  <div className="absolute pr-3 bottom-[5%] left-[4%] ">
                    <div className="font-medium">
                      {storieshead && storieshead.tag ? storieshead.tag : ""}
                    </div>
                    <div className="pt-2 text-2xl font-bold leading-6 sm:text-3xl lg:text-5xl text-wrap">
                      {storieshead && storieshead.headline
                        ? storieshead.headline
                        : ""}
                    </div>
                    <div className="font-medium">
                      {storieshead && storieshead.date ? storieshead.date : ""}
                    </div>
                  </div>
                </Link>
              </div>
              {/* lap view */}
              <Link to={`/news/${storieshead && storieshead._id}`}>
                <div className="hidden mb-12 sm:grid sm:grid-cols-2 ">
                  <div className="flex">
                    <img
                      src={
                        storieshead && storieshead.coverImage
                          ? storieshead.coverImage
                          : ""
                      }
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 ">
                    <div className="mb-3 font-medium">
                      {storieshead && storieshead.tag ? storieshead.tag : ""}
                    </div>
                    <div className="pt-2 font-bold leading-6 sm:text-2xl xl:text-3xl text-wrap">
                      {storieshead && storieshead.headline
                        ? storieshead.headline
                        : ""}
                    </div>
                    <div className="mb-4 text-lg">
                      {storieshead && storieshead.subheadline
                        ? storieshead.subheadline
                        : ""}
                    </div>
                    <div className="font-medium">
                      {storieshead && storieshead.date ? storieshead.date : ""}
                    </div>
                  </div>
                </div>
              </Link>

              {/* rest stories grid */}
              <div className="grid mb-8 lg:grid-cols-3 sm:gap-6 lg:gap-8 sm:grid-cols-2">
                {stories ? (
                  stories.map((story) => (
                    <div key={story._id} className="relative mb-4">
                      <Link to={`/news/${story && story._id}`}>
                        <div className="flex">
                          <img
                            className="object-cover rounded-3xl"
                            src={
                              story && story.coverImage ? story.coverImage : ""
                            }
                            alt=""
                          />
                        </div>
                        <div className="absolute pr-3 bottom-[5%] left-[4%] ">
                          <div className="font-medium">
                            {" "}
                            {story && story.tag ? story.tag : ""}
                          </div>
                          <div className="pt-2 text-xl font-bold 2xl:text-2xl text-wrap">
                            {story && story.headline ? story.headline : ""}
                          </div>
                          <div className="font-medium">
                            {story && story.date ? story.date : ""}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <p>no stories to show</p>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* section3 */}
        <div className="bg-[#f5f5f7]">
          {/* to center all items */}

          <div className="flex flex-col items-center ">
            <div className="pt-12 mx-4 sm:mx-[10%] lg:mx[20%]  ">
              <div className="mb-4 text-3xl font-bold">More From NewsRoom</div>
              {/* grid all-news-items */}
              <div className="grid gap-8 mb-8 lg:grid-cols-2">
                {news ? (
                  news.map((indinews) => (
                    <Link
                      key={indinews._id}
                      to={`/news/${indinews && indinews._id}`}
                    >
                      <div className="grid grid-cols-3">
                        <div className="flex col-span-1 bg-black">
                          <img
                            src={
                              indinews && indinews.coverImage
                                ? indinews.coverImage
                                : ""
                            }
                            className="object-cover"
                            alt=""
                          />
                        </div>
                        <div className="col-span-2 px-2 m-2">
                          <div className="pb-2 font-semibold text-gray-600">
                            {indinews && indinews.tag ? indinews.tag : ""}
                          </div>
                          <div className="pb-2 font-semibold">
                            {indinews && indinews.headline
                              ? indinews.headline
                              : ""}
                          </div>
                          <div className="font-semibold text-gray-600">
                            {indinews && indinews.date ? indinews.date : ""}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p>no news</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsRoomPage;
