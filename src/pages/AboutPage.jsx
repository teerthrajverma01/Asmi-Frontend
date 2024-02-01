import { useEffect, useRef, Fragment } from "react";
import { NavLink } from "react-router-dom";

import aboutusimg1 from "../assets/image/team/uhf.png";
import aboutusimg2 from "../assets/image/team/akm.png";
import aboutusimg3 from "../assets/image/team/mrpd.png";
import aboutusimg4 from "../assets/image/team/mspd.png";
import aboutusimg5 from "../assets/image/team/arf.png";
import aboutusimg6 from "../assets/image/team/tghr.png";
import aboutusimg7 from "../assets/image/team/sgp.png";
import aboutusimg8 from "../assets/image/team/skp.png";
import aboutusimg9 from "../assets/image/team/fgp.png";
import aboutusimg10 from "../assets/image/team/skp2.png";

import humming from "../assets/image/humming.jpeg";
import auimage2 from "../assets/image/aboutusimg2.png";

import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import { motion } from "framer-motion";

const AboutPage = () => {
  const text1 = " How it started".split(" ");
  const text2 = " People Behind ASMI".split(" ");
  const text3 = "Still have questions?".split(" ");
  return (
    <Fragment>
      <section>
        <div className="px-[5%]">
          <div className="w-full max-w-screen-xl mx-auto ">
            <div className="py-8">
              <div className="grid items-center gap-y-16 md:grid-cols-2 auto-cols-auto">
                <div className=" w-full max-w-[35rem]">
                  {/* <div className="bg-neutral-100  rounded px-2 py-1  text-neutral-900 text-sm font-semibold leading-[1.4] inline-block">
                    Values
                  </div> */}
                  <div className="p-2 "></div>
                  {/* <div className="mt-4 font-sans text-5xl font-semibold leading-5 text-neutral-900">
                    How it started
                  </div> */}
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
                  <div className="py-4 "></div>
                  <p className="pb-4 my-0 text-lg text-neutral-600">
                    Asmi™, a visionary initiative, was conceived after Our
                    Founder, Ujjwal comprehensively understood the complexities
                    of mental health support. The urgency for instant and
                    affordable therapy became starkly apparent during the
                    COVID-19 pandemic. This poignant experience became the
                    impetus for the creation of Asmi™, a platform born out of
                    the desire to alleviate the pervasive struggles surrounding
                    mental health in India and across the globe.
                  </p>
                  <p className="my-0 text-lg text-neutral-600">
                    Countless people, face myriad obstacles that deter them from
                    seeking the support they desperately need. Recognizing the
                    multifaceted challenges individuals encounter on their
                    journey to mental well-being, Asmi™ was envisioned as a
                    beacon of hope—a testament to resilience and a response to
                    the pressing need for accessible mental health support.
                    Furthermore, no call for support should go unanswered.
                  </p>

                  {/* <div className="p-12"></div>
                  <div className="grid gap-x-6 gap-y-6 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr]  py-2">
                    <div className="flex gap-x-6">
                      <div className="w-7 h-7 min-h-[1.75rem] min-w-[1.75rem] bg-primary04 text-white flex-col justify-center items-center flex rounded-[16rem]">
                        <div className="flex items-center justify-center flex-none w-5 h-5 ">
                          <FaCheckCircle />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-xl font-semibold text-neutral-900">
                          Safe Community
                        </div>
                        <div className="p-2"></div>
                        <p className="mt-0 mb-0 text-sm text-neutral-600">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-x-6">
                      <div className="w-7 h-7 min-h-[1.75rem] min-w-[1.75rem] bg-primary04 text-white flex-col justify-center items-center flex rounded-[16rem]">
                        <div className="flex items-center justify-center flex-none w-5 h-5 ">
                          <FaCheckCircle />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-xl font-semibold text-neutral-900">
                          Safe Community
                        </div>
                        <div className="p-2"></div>
                        <p className="mt-0 mb-0 text-sm text-neutral-600">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <div className="p-4"></div>
                  <div className="flex items-center justify-start gap-x-4 gap-y-4 wrap">
                    <NavLink
                      to={"/contact-us"}
                      className="gap-x-1 text-[color:var(--neutral-900)] whitespace-nowrap justify-start items-center font-semibold no-underline transition-[color] duration-[0.2s] flex"
                    >
                      <div>Contact Us</div>
                      <div className="flex items-center justify-center flex-none w-5 h-5 ">
                        <FaArrowRightLong />
                      </div>
                    </NavLink>
                  </div>
                </div>

                <div>
                  <img
                    className="inline-block object-cover w-[90%] align-middle border-0 rounded-2xl"
                    src={humming}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}

      <section className="mb-40 text-white bg-primary04">
        <div className="px-[5%]">
          <div className="w-full max-w-screen-md mx-auto">
            <div className="py-40">
              <div className="text-center">
                <div className="w-full max-w-screen-md mx-auto">
                  <div className="text-white bg-[rgba(255,255,255,0.08)] rounded px-2 py-1 text-sm font-semibold leading-[1.4] inline-block">
                    Meet the Team
                  </div>

                  <div className="p-4 "></div>
                  {/* <div className="text-white  text-5xl font-semibold leading-[1.2] font-sans">
                    People Behind ASMI
                  </div> */}
                  <div className="text-white  text-5xl font-semibold leading-[1.2] font-sans">
                    {text2.map((el, i) => (
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
                  <div className="p-6 "></div>
                  <p className=" text-white  mt-0 mb-2.5">
                    Fueled by an unwavering commitment to positive change,
                    Ujjwal assembled a dynamic team of passionate individuals in
                    2023, united by a shared enthusiasm to redefine online
                    counseling. This diverse group, embracing varied backgrounds
                    and perspectives, is the driving force behind Asmi™.
                  </p>
                </div>
              </div>
              <div className="p-20"></div>
              <div>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-8 auto-cols-auto justify-items-center ">
                  <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    variants={{
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          type: "spring",
                        },
                      },
                      hidden: { opacity: 1, y: 50 },
                    }}
                  >
                    <div className="flex flex-col items-start p-8 rounded-lg h-[27rem] bg-darkSlateGrey">
                      <div>
                        <div>
                          <img
                            className=" w-36 h-36 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                            src={aboutusimg1}
                            alt=""
                          />
                        </div>
                        <div className="p-4 "></div>
                        <div className="text-xl font-semibold">
                          Ujjwal Handa
                        </div>
                        <div className="text-sm">Founder</div>
                        <div className="p-4 "></div>
                        <p className="mt-0 mb-0 text-sm text-white">
                          I bring a passion for innovation and a strategic
                          mindset to drive the companys success.
                        </p>
                        <div className="p-4 "></div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    variants={{
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          type: "spring",
                        },
                      },
                      hidden: { opacity: 1, y: 50 },
                    }}
                  >
                    <div className=" h-[27rem] flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                      <div>
                        <div>
                          <img
                            className=" w-36 h-36 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                            src={aboutusimg2}
                            alt=""
                          />
                        </div>
                        <div className="p-4 "></div>
                        <div className="text-xl font-semibold">
                          Arvinder Kaur
                        </div>
                        <div className="text-sm">Marketing</div>
                        <div className="p-4 "></div>
                        <p className="mt-0 mb-0 text-sm text-white">
                          I specialize in driving online presence and brand
                          visibility to new heights.
                        </p>
                        <div className="p-4 "></div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    variants={{
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          type: "spring",
                        },
                      },
                      hidden: { opacity: 1, y: 50 },
                    }}
                  >
                    <div className=" h-[27rem] flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                      <div>
                        <div>
                          <img
                            className=" w-36 h-36 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                            src={aboutusimg3}
                            alt=""
                          />
                        </div>
                        <div className="p-4 "></div>
                        <div className="text-xl font-semibold">Md. Riswan</div>
                        <div className="text-sm">Product Development</div>
                        <div className="p-4 "></div>
                        <p className="mt-0 mb-0 text-sm text-white">
                          As a skilled Front-end Flutter Developer, I specialize
                          in creating visually appealing and responsive user
                          interfaces for mobile applications.
                        </p>
                        <div className="p-4 "></div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    variants={{
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          type: "spring",
                        },
                      },
                      hidden: { opacity: 1, y: 50 },
                    }}
                  >
                    <div className=" h-[27rem] flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                      <div>
                        <div>
                          <img
                            className=" w-36 h-36 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                            src={aboutusimg4}
                            alt=""
                          />
                        </div>
                        <div className="p-4 "></div>
                        <div className="text-xl font-semibold">Md. Safvan</div>
                        <div className="text-sm">Product Development</div>
                        <div className="p-4 "></div>
                        <p className="mt-0 mb-0 text-sm text-white">
                          As an adept Python Django Developer, I specialize in
                          crafting robust and scalable web applications.
                        </p>
                        <div className="p-4 "></div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    viewport={{ once: true }}
                    initial="hidden"
                    whileInView={"visible"}
                    variants={{
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          type: "spring",
                        },
                      },
                      hidden: { opacity: 1, y: 50 },
                    }}
                  >
                    <div className=" h-[27rem] flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                      <div>
                        <div>
                          <img
                            className=" w-36 h-36 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                            src={aboutusimg5}
                            alt=""
                          />
                        </div>
                        <div className="p-4 "></div>
                        <div className="text-xl font-semibold">Ayushi Rana</div>
                        <div className="text-sm">Finance</div>
                        <div className="p-4 "></div>
                        <p className="mt-0 mb-0 text-sm text-white">
                          I specialize in ensuring financial excellence and
                          stability within organizations.
                        </p>
                        <div className="p-4 "></div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    variants={{
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          type: "spring",
                        },
                      },
                      hidden: { opacity: 1, y: 50 },
                    }}
                  >
                    <div className="h-[27rem] flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                      <div>
                        <div>
                          <img
                            className=" w-36 h-36 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                            src={aboutusimg6}
                            alt=""
                          />
                        </div>
                        <div className="p-4 "></div>
                        <div className="text-xl font-semibold">Tanvi Gupta</div>
                        <div className="text-sm">Human Rescource</div>
                        <div className="p-4 "></div>
                        <p className="mt-0 mb-0 text-sm text-white">
                          I specialize in identifying and nurturing exceptional
                          talent to create vibrant workplace environments.
                        </p>
                        <div className="p-4 "></div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    variants={{
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          type: "spring",
                        },
                      },
                      hidden: { opacity: 1, y: 50 },
                    }}
                  >
                    <div className=" h-[27rem] flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                      <div>
                        <div>
                          <img
                            className=" w-36 h-36 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                            src={aboutusimg7}
                            alt=""
                          />
                        </div>
                        <div className="p-4 "></div>
                        <div className="text-xl font-semibold">
                          Shraddha Gupta
                        </div>
                        <div className="text-sm">Psychologist</div>
                        <div className="p-4 "></div>
                        <p className="mt-0 mb-0 text-sm text-white">
                          My personal way to healing others is very holistic,
                          warm and flexible.
                        </p>
                        <div className="p-4 "></div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    variants={{
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          type: "spring",
                        },
                      },
                      hidden: { opacity: 1, y: 50 },
                    }}
                  >
                    <div className=" h-[27rem] flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                      <div>
                        <div>
                          <img
                            className=" w-36 h-36 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                            src={aboutusimg8}
                            alt=""
                          />
                        </div>
                        <div className="p-4 "></div>
                        <div className="text-xl font-semibold">
                          Saloni Karwa
                        </div>
                        <div className="text-sm">Psychologist</div>
                        <div className="p-4 "></div>
                        <p className="mt-0 mb-0 text-sm text-white">
                          I am a dedicated and compassionate psychologist with a
                          masters degree in clinical psychology.
                        </p>
                        <div className="p-4 "></div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    variants={{
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          type: "spring",
                        },
                      },
                      hidden: { opacity: 1, y: 50 },
                    }}
                  >
                    <div className=" h-[27rem] flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                      <div>
                        <div>
                          <img
                            className=" w-36 h-36 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                            src={aboutusimg10}
                            alt=""
                          />
                        </div>
                        <div className="p-4 "></div>
                        <div className="text-xl font-semibold">
                          Shivangi Kapoor
                        </div>

                        <div className="text-sm">Psychologist</div>
                        <div className="p-4 "></div>
                        <p className="mt-0 mb-0 text-sm text-white">
                          Counselling psychologist with a Masters in Clinical
                          Psychology and 2 years of experience in aiding
                          management of Mood disorders, Personality disorders,
                          Relationship/ Family Issues, Workplace/ Academic
                          Stress Management and General Stress.
                        </p>
                        <div className="p-4 "></div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    variants={{
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          type: "spring",
                        },
                      },
                      hidden: { opacity: 1, y: 50 },
                    }}
                  >
                    <div className="h-[27rem] flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                      <div>
                        <div>
                          <img
                            className=" w-36 h-36 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                            src={aboutusimg9}
                            alt=""
                          />
                        </div>
                        <div className="p-4 "></div>
                        <div className="text-xl font-semibold">
                          Felicia Gangmei
                        </div>
                        <div className="text-sm">Psychologist</div>
                        <div className="p-4 "></div>
                        <p className="mt-0 mb-0 text-sm text-white">
                          I am a dedicated Counselling Psychologist committed to
                          supporting individuals on their journey towards
                          emotional well-being and personal growth.
                        </p>
                        <div className="p-4 "></div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="p-24"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 mb-20 md:mt-32 ">
        {/* <h4 className="font-sans text-3xl font-semibold text-center text-neutral-900">
          Still have questions?
        </h4> */}
        <h4 className="font-sans text-3xl font-semibold text-center text-neutral-900">
          {text3.map((el, i) => (
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
        </h4>
        <p className="py-8 text-lg text-center md:text-xl">
          No worries! Mental Wellness is no longer complicated
        </p>
        <div className="flex justify-center transition duration-300 ease-in-out  hover:translate-y-[-2px]">
          <NavLink
            className="p-3 font-semibold bg-white border border-solid rounded-md hover:bg-neutral-200 border-neutral-300 text-neutral-900 "
            to={"/assessment"}
          >
            Take a Free Test
          </NavLink>
        </div>
      </section>

      {/*  */}
      {/* <section>
        <div className="px-[5%]">
          <div className="w-full max-w-screen-xl mx-auto ">
            <div className="py-40">
              <div className="grid items-center md:grid-cols-2 gap-x-20 gap-y-16 auto-cols-auto">
                <div>
                  <img
                    className="inline-block max-w-full align-middle border-0 min-h-[35rem] object-cover rounded-2xl"
                    src={auimage2}
                    alt=""
                  />
                </div>
                <div className=" w-full max-w-[35rem]">
                  <div className="bg-neutral-100  rounded px-2 py-1  text-neutral-900 text-sm font-semibold leading-[1.4] inline-block">
                    Values
                  </div>
                  <div className="p-2 "></div>
                  <div className="text-5xl font-semibold leading-[1.2] text-neutral-900">
                    Why are we doing this
                  </div>
                  <div className="p-4 "></div>
                  <p className="my-0 text-lg text-neutral-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempore quos voluptas quidem, nulla dolores quia a debitis
                    quisquam reprehenderit eligendi.
                  </p>

                  <div className="p-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Fragment>
  );
};

export default AboutPage;
