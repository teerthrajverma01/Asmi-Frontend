import React, { useEffect, useState } from "react";

import BASE_URL from "../apis/Config";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { MdDelete } from "react-icons/md";
import { AiFillCaretRight } from "react-icons/ai";
import { motion } from "framer-motion";

const SingleNewsPage = () => {
  const [postInfo, setPostInfo] = useState();
  const { id } = useParams();

  const username = useSelector((state) => state.userInfo.username);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/news/fetchnews/${id}`)
      .then((response) => {
        if (response.ok) {
          response.json().then((postInfo) => {
            setPostInfo(postInfo.NewsItem);
          });
        } else {
          navigate("/news");
        }
      })
      .catch((error) => {
        console.error("Error fetching news post", error);
        navigate("/news");
      });
  }, [id, navigate]);

  // console.log(heading);

  const handleDelete = async () => {
    try {
      const response = await fetch(`${BASE_URL}/news/deletenews/${id}`, {
        method: "DELETE",
        // headers: {
        //   Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`, // Replace with your actual access token
        // },
      });

      if (response.ok) {
        navigate("/news");
      } else {
        console.error("Failed to delete news");
      }
    } catch (error) {
      console.error("Error deleting post", error);
    }
  };

  if (!postInfo) return "";

  const heading = `${postInfo.headline}`.split(" ");

  return (
    <div className="container px-[5%] mx-auto">
      <div className="w-full max-w-5xl mx-auto">
        <div className="w-full max-w-5xl mt-8 md:mt-32">
          <div className="flex justify-between ">
            <div className="px-2 py-1 mb-4 border border-solid rounded-md border-neutral-900 max-w-fit">
              {postInfo.tag}
            </div>

            {username && (
              <div>
                <MdDelete
                  onClick={handleDelete}
                  className="text-3xl cursor-pointer hover:scale-105"
                />
              </div>
            )}
          </div>
          <div>{postInfo.date}</div>

          <div className="my-8 text-5xl font-bold">{postInfo.headline}</div>
          <div className="mb-4 text-3xl font-medium">
            {postInfo.subheadline}
          </div>
          {postInfo.socialmedialink && (
            <div className="mb-4">
              <a
                className="inline-block"
                href={postInfo.socialmedialink}
                target={"_blank"}
                rel={"noreferrer"}
              >
                Click here to Watch{"   "}{" "}
                <AiFillCaretRight className="inline-block" />
              </a>
            </div>
          )}

          <div>
            <img src={postInfo.coverImage} alt="" />
          </div>

          <p className="my-12">
            <div dangerouslySetInnerHTML={{ __html: postInfo.content }}></div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsPage;
