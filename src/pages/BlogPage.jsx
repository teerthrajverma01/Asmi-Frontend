import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { setUserName } from "../store/slices/userInfo";
import Blog from "../components/Blog";
import BASE_URL from "../apis/Config";

import { motion } from "framer-motion";

const BlogPage = () => {
  const dispatch = useDispatch();

  const text1 = "Latest Blogs".split(" ");

  const [posts, setPosts] = useState([]);

  const username = useSelector((state) => state.userInfo.username);

  useEffect(() => {
    fetch(`${BASE_URL}/profile`, {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        dispatch(setUserName(userInfo.username));
      });
    });
  }, [dispatch]);

  useEffect(() => {
    fetch(`${BASE_URL}/post`).then((response) => {
      response.json().then((posts) => {
        console.log(posts);
        setPosts(posts);
      });
    });
  }, []);

  const logout = () => {
    fetch(`${BASE_URL}/logout`, {
      credentials: "include",
      method: "POST",
    });
    dispatch(setUserName(null));
  };

  return (
    <div className="container px-[5%] mx-auto">
      {/* Your blog content goes here */}

      <div className="w-full mx-auto max-w-7xl">
        <section className="container mt-16 md:pt-32">
          <div>
            <div className="w-full max-w-2xl">
              <div className="md:text-6xl text-4xl font-sans font-semibold text-neutral-900 leading-[1.1] md:mb-6">
                {text1.map((el, i) => (
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
              </div>
              <p className="mb-8 md:mb-20 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                enim magnam ut. Veritatis officiis quaerat, odit molestias
                soluta sunt vero.
              </p>
            </div>
            <section className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-[2%] pb-8">
              {posts.length > 0 &&
                posts.map((post) => <Blog key={post._id} {...post} />)}
            </section>
          </div>
        </section>

        <div className="my-16">
          {username && (
            <>
              <Link
                className="inline-block px-4 py-2 text-white rounded-md bg-primary03 hover:bg-primary02 focus:outline-none"
                to={"/create-blog"}
              >
                Create new Blog
              </Link>

              <a
                className="inline-block px-4 py-2 ml-4 text-white rounded-md bg-primary03 hover:bg-primary02 focus:outline-none"
                onClick={logout}
              >
                Logout
              </a>
            </>
          )}

          {!username && (
            <>
              <Link
                to={"/admin-login"}
                className="inline-block px-4 py-2 text-white rounded-md bg-primary03 hover:bg-primary05 focus:outline-none"
              >
                Login as Admin
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
