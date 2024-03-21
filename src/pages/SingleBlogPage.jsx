import React, { useEffect, useState } from "react";
import BASE_URL from "../apis/Config";
import { NavLink, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const SingleBlogPage = () => {
  const [postInfo, setPostInfo] = useState();
  const { id } = useParams();

  const username = useSelector((state) => state.userInfo.username);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/post/${id}`)
      .then((response) => {
        if (response.ok) {
          response.json().then((postInfo) => {
            setPostInfo(postInfo);
          });
        } else {
          navigate("/blogs");
        }
      })
      .catch((error) => {
        console.error("Error fetching post", error);
        navigate("/blogs");
      });
  }, [id, navigate]);

  // console.log(heading);

  const handleDelete = async () => {
    try {
      const response = await fetch(`${BASE_URL}/post/${id}`, {
        method: "DELETE",
        // headers: {
        //   Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`, // Replace with your actual access token
        // },
      });

      if (response.ok) {
        navigate("/blogs");
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post", error);
    }
  };

  if (!postInfo) return "";

  const heading = `${postInfo.summary}`.split(" ");
  return (
    <div className="container px-[5%] mx-auto">
      <div className="w-full max-w-5xl mx-auto">
        <div className="w-full max-w-5xl mt-8 md:mt-32">
          <div className="flex justify-between ">
            <div className="px-2 py-1 mb-4 border border-solid rounded-md border-neutral-900 max-w-fit">
              {postInfo.title}
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

          <h1 className="md:text-6xl text-4xl font-sans font-semibold text-neutral-900 leading-[1.1] md:mb-6">
            {heading.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </h1>

          <img className="w-3/4 mx-auto my-6" src={postInfo.cover} alt="img" />

          <p className="mb-8 md:mt-20 ">
            <div dangerouslySetInnerHTML={{ __html: postInfo.content }}></div>
          </p>
        </div>

        <div className="mb-12">
          <NavLink to={"/blogs"}>
            <IoIosArrowRoundBack className="size-9 hover:scale-110" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
