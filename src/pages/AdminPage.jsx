import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUserName } from "../store/slices/userInfo";
import BASE_URL from "../apis/Config";

const AdminPage = () => {
  const dispatch = useDispatch();

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

  const logout = () => {
    fetch(`${BASE_URL}/logout`, {
      credentials: "include",
      method: "POST",
    });
    dispatch(setUserName(null));
  };
  return (
    <div className="my-16 h-[35vh] text-center">
      {username && (
        <>
          <Link
            className="inline-block px-4 py-2 mx-2 text-white rounded-md bg-primary03 hover:bg-primary02 focus:outline-none"
            to={"/create-blog"}
          >
            Create new Blog
          </Link>
          {/* <Link
            className="inline-block px-4 py-2 mx-2 text-white rounded-md bg-primary03 hover:bg-primary02 focus:outline-none"
            to={"/create-newsitem"}
          >
            Create new NewsItem
          </Link> */}

          <a
            className="inline-block px-4 py-2 mx-2 ml-4 text-white rounded-md bg-primary03 hover:bg-primary02 focus:outline-none"
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
  );
};

export default AdminPage;
