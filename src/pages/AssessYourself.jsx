import React, { useEffect, useState } from "react";

import { FaIndianRupeeSign } from "react-icons/fa6";
import { GrLinkNext } from "react-icons/gr";

import BASE_URL from "../apis/Config";
import { Link } from "react-router-dom";

import img1 from "../assets/image/assessyourself/assesmentmain.svg";
import alcoholic from "../assets/image/assessyourself/alcoholic.svg";

const AssessYourself = () => {
  const registerHandler = () => {
    navigate();
  };

  return (
    <div>
      {/* layout  */}
      <div classname="">
        {/* first section */}
        <div>
          {/* layout */}
          <div className="m-8 sm:m-20">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:m-8">
                <div className="text-3xl text-center">
                  <div className="text-4xl">Confused !</div>
                  <div className="mb-4 text-4xl">About your condition </div>
                  <div>Whether it needs Professional attention?</div>
                </div>
                <div className="my-12 text-xl">
                  <div>
                    We all get confused about whether or not the condition we
                    think
                  </div>
                  <div>We might have needs professional attention or not. </div>
                  <div className="mt-4">Find out right here</div>
                  <div>through standardised and generalizable tests</div>
                  <div className="flex gap-4 my-12">
                    <div className="self-center text-3xl text-center">
                      Right now only for{" "}
                      <FaIndianRupeeSign className="inline-block" />
                      99
                    </div>
                    <div className="px-2 py-1 text-3xl text-center text-white sm:ml-8 rounded-xl bg-primary04 ">
                      Assess here
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img className="object-cover sm:p-4" src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* second section */}
        <div className="text-white bg-primary04">
          {/* layout */}
          <div className="py-20 mx-8 sm:py-40 sm:m-20 ">
            <div className="flex flex-col justify-around gap-6 sm:flex-row">
              <div className="text-3xl text-center sm:text-4xl sm:px-12 sm:mx-8">
                <div className="my-4">Follow the easy steps </div>
                <div className="my-4">To take an Assessment</div>
              </div>
              <div className="text-xl sm:text-2xl sm:m-4">
                <div className="grid grid-cols-12 my-2">
                  <GrLinkNext className="col-span-1 justify-self-center " />
                  <div className="col-span-11 px-4">
                    Press the button of the concern you have.
                  </div>
                </div>
                <div className="grid grid-cols-12 my-2">
                  <GrLinkNext className="col-span-1 justify-self-center " />

                  <div className="col-span-11 px-4">Make the payment.</div>
                </div>
                <div className="grid grid-cols-12 my-2">
                  <GrLinkNext className="col-span-1 justify-self-center" />

                  <div className="col-span-11 px-4">
                    Take the test from the link received on your email ID
                    registered with us
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* third section */}
        <div className="">
          {/* layout */}
          <div className="mx-8 my-12 sm:mx-40 ">
            <div className="">
              {/* individual assessments */}
              <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
                {/* eating problem */}
                <div className="grid grid-cols-4 gap-4 overflow-hidden border rounded-3xl">
                  <div className="flex col-span-1">
                    <img className="object-cover" src={alcoholic} alt="" />
                  </div>
                  <div className="self-center col-span-3">
                    <div className="mt-4 mb-2 text-xl font-medium sm:text-3xl">
                      Eating Problem
                    </div>
                    <div className="sm:mb-4 sm:text-xl">
                      Explore how stress has been taking toll on you
                    </div>
                    <Link to={`/registeruser/eatingproblem`}>
                      <button
                        className="p-1 my-4 text-white rounded-lg sm:text-xl bg-primary04"
                        onClick={registerHandler}
                      >
                        Take Test {">"}
                      </button>
                    </Link>
                  </div>
                </div>
                {/* Substance Use */}
                <div className="grid grid-cols-4 gap-4 overflow-hidden border rounded-3xl">
                  <div className="flex col-span-1">
                    <img className="object-cover" src={alcoholic} alt="" />
                  </div>
                  <div className="self-center col-span-3">
                    <div className="mt-4 mb-2 text-xl font-medium sm:text-3xl">
                      Substance Use
                    </div>
                    <div className="sm:mb-4 sm:text-xl">
                      Explore how stress has been taking toll on you
                    </div>
                    <Link to={`/registeruser/substance-use`}>
                      <button
                        className="p-1 my-4 text-white rounded-lg sm:text-xl bg-primary04"
                        onClick={registerHandler}
                      >
                        Take Test {">"}
                      </button>
                    </Link>
                  </div>
                </div>
                {/* Mood Imbalance */}
                <div className="grid grid-cols-4 gap-4 overflow-hidden border rounded-3xl">
                  <div className="flex col-span-1">
                    <img className="object-cover" src={alcoholic} alt="" />
                  </div>
                  <div className="self-center col-span-3">
                    <div className="mt-4 mb-2 text-xl font-medium sm:text-3xl">
                      Mood Imbalance
                    </div>
                    <div className="sm:mb-4 sm:text-xl">
                      Explore how stress has been taking toll on you
                    </div>
                    <Link to={`/registeruser/mood-imbalance`}>
                      <button
                        className="p-1 my-4 text-white rounded-lg sm:text-xl bg-primary04"
                        onClick={registerHandler}
                      >
                        Take Test {">"}
                      </button>
                    </Link>
                  </div>
                </div>
                {/* Sucide Risk*/}
                <div className="grid grid-cols-4 gap-4 overflow-hidden border rounded-3xl">
                  <div className="flex col-span-1">
                    <img className="object-cover" src={alcoholic} alt="" />
                  </div>
                  <div className="self-center col-span-3">
                    <div className="mt-4 mb-2 text-xl font-medium sm:text-3xl">
                      Sucide Risk
                    </div>
                    <div className="sm:mb-4 sm:text-xl">
                      Explore how stress has been taking toll on you
                    </div>
                    <Link to={`/registeruser/sucide-risk`}>
                      <button
                        className="p-1 my-4 text-white rounded-lg sm:text-xl bg-primary04"
                        onClick={registerHandler}
                      >
                        Take Test {">"}
                      </button>
                    </Link>
                  </div>
                </div>
                {/* Sleep Disturbance */}
                <div className="grid grid-cols-4 gap-4 overflow-hidden border rounded-3xl">
                  <div className="flex col-span-1">
                    <img className="object-cover" src={alcoholic} alt="" />
                  </div>
                  <div className="self-center col-span-3">
                    <div className="mt-4 mb-2 text-xl font-medium sm:text-3xl">
                      Sleep Disturbance
                    </div>
                    <div className="sm:mb-4 sm:text-xl">
                      Explore how stress has been taking toll on you
                    </div>
                    <Link to={`/registeruser/sleep-disturbance`}>
                      <button
                        className="p-1 my-4 text-white rounded-lg sm:text-xl bg-primary04"
                        onClick={registerHandler}
                      >
                        Take Test {">"}
                      </button>
                    </Link>
                  </div>
                </div>
                {/* Depression, Anxiety and Stress */}
                <div className="grid grid-cols-4 gap-4 overflow-hidden border rounded-3xl">
                  <div className="flex col-span-1">
                    <img className="object-cover" src={alcoholic} alt="" />
                  </div>
                  <div className="self-center col-span-3">
                    <div className="mt-4 mb-2 text-xl font-medium sm:text-3xl">
                      Depression, Anxiety and Stress
                    </div>
                    <div className="sm:mb-4 sm:text-xl">
                      Explore how stress has been taking toll on you
                    </div>
                    <Link to={`/registeruser/das`}>
                      <button
                        className="p-1 my-4 text-white rounded-lg sm:text-xl bg-primary04"
                        onClick={registerHandler}
                      >
                        Take Test {">"}
                      </button>
                    </Link>
                  </div>
                </div>
                {/* Stress */}
                <div className="grid grid-cols-4 gap-4 overflow-hidden border rounded-3xl">
                  <div className="flex col-span-1">
                    <img className="object-cover" src={alcoholic} alt="" />
                  </div>
                  <div className="self-center col-span-3">
                    <div className="mt-4 mb-2 text-xl font-medium sm:text-3xl">
                      Stress
                    </div>
                    <div className="sm:mb-4 sm:text-xl">
                      Explore how stress has been taking toll on you
                    </div>
                    <Link to={`/registeruser/stress`}>
                      <button
                        className="p-1 my-4 text-white rounded-lg sm:text-xl bg-primary04"
                        onClick={registerHandler}
                      >
                        Take Test {">"}
                      </button>
                    </Link>
                  </div>
                </div>
                {/* Low Self Esteem */}
                <div className="grid grid-cols-4 gap-4 overflow-hidden border rounded-3xl">
                  <div className="flex col-span-1">
                    <img className="object-cover" src={alcoholic} alt="" />
                  </div>
                  <div className="self-center col-span-3">
                    <div className="mt-4 mb-2 text-xl font-medium sm:text-3xl">
                      Low Self Esteem
                    </div>
                    <div className="sm:mb-4 sm:text-xl">
                      Explore how stress has been taking toll on you
                    </div>
                    <Link to={`/registeruser/low-self-esteem`}>
                      <button
                        className="p-1 my-4 text-white rounded-lg sm:text-xl bg-primary04"
                        onClick={registerHandler}
                      >
                        Take Test {">"}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessYourself;
