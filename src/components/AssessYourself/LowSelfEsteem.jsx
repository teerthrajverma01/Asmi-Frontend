import React, { useState } from "react";
import formheader from "../../assets/image/assessyourself/formheader.png";

import BASE_URL from "../../apis/Config";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const LowSelfEsteem = ({ username, email }) => {
  const { id } = useParams();

  const [qn1, setQn1] = useState();
  const [qn2, setQn2] = useState();
  const [qn3, setQn3] = useState();
  const [qn4, setQn4] = useState();
  const [qn5, setQn5] = useState();
  const [qn6, setQn6] = useState();
  const [qn7, setQn7] = useState();
  const [qn8, setQn8] = useState();
  const [qn9, setQn9] = useState();
  const [qn10, setQn10] = useState();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  console.log(id);

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);

    fetch(`${BASE_URL}/assessyourself/lowselfesteem/postformdata`, {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        qn1,
        qn2,
        qn3,
        qn4,
        qn5,
        qn6,
        qn7,
        qn8,
        qn9,
        qn10,
        id,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then((result) => {
        navigate(`/submitassessment/${result.result}`, {
          state: {
            positivemessage: result.positivemessage,
            negativemessage: result.negativemessage,
          },
        });
      })
      .catch((error) => {
        console.error("Error while submitting form:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      {/* layout */}
      <div className="mx-8 my-20 sm:m-20 lg:m-40">
        {/* image+header+form */}
        <div className="bg-gray-200">
          {/* image */}
          <div className="flex bg-yellow-200">
            <img src={formheader} className="object-cover " />
          </div>
          {/* form type */}
          <div className="p-4 text-2xl text-center bg-orange-300 sm:text-5xl">
            Questionnaire for Low Self-Esteem
          </div>
          {/* form */}
          <div className="mx-3 my-12 text-xl sm:mx-12 ">
            <form className="" onSubmit={submitHandler}>
              <div className="mb-12">
                <div className="font-medium">
                  <p>Check the answer that best applies to you.</p>
                  <p>Please answer each question as best you can.</p>
                </div>
              </div>

              {/* ################################################# */}
              {/* qn1 */}
              <div className="mb-6">
                <div className="font-medium">
                  1: On the whole, I am satisfied with myself.
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q1-strongly-agree"
                          type="radio"
                          value={qn1}
                          name="qn1"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          required
                          onChange={(e) => setQn1("Strongly Agree")}
                        />
                        <label
                          htmlFor="q1-strongly-agree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q1-agree"
                          type="radio"
                          value={qn1}
                          name="qn1"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn1("Agree")}
                        />
                        <label
                          htmlFor="q1-agree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q1-disagree"
                          type="radio"
                          value={qn1}
                          required
                          name="qn1"
                          onChange={(e) => setQn1("Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q1-disagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Disagree
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q1-strongly-disagree"
                          type="radio"
                          value={qn1}
                          name="qn1"
                          onChange={(e) => setQn1("Strongly Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q1-strongly-disagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Disagree
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn2 */}
              <div className="mb-6">
                <div className="font-medium">
                  2. At times, I think I am no good at all.
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q2-StronglyAgree"
                          type="radio"
                          value={qn2}
                          name="qn2"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          required
                          onChange={(e) => setQn2("Strongly Agree")}
                        />
                        <label
                          htmlFor="q2-StronglyAgree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q2-Agree"
                          type="radio"
                          value={qn2}
                          name="qn2"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn2("Agree")}
                        />
                        <label
                          htmlFor="q2-Agree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q2-Disagree"
                          type="radio"
                          value={qn2}
                          name="qn2"
                          required
                          onChange={(e) => setQn2("Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q2-Disagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Disagree
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q2-StronglyDisagree"
                          type="radio"
                          value={qn2}
                          name="qn2"
                          onChange={(e) => setQn2("Strongly Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q2-StronglyDisagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Disagree
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* qn3 */}
              <div className="mb-6">
                <div className="font-medium">
                  3: I feel that I have a number of good qualities.
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q3-strongly-agree"
                          type="radio"
                          value={qn3}
                          name="qn3"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          required
                          onChange={(e) => setQn3("Strongly Agree")}
                        />
                        <label
                          htmlFor="q3-strongly-agree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q3-agree"
                          type="radio"
                          value={qn3}
                          name="qn3"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn3("Agree")}
                        />
                        <label
                          htmlFor="q3-agree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q3-disagree"
                          type="radio"
                          value={qn3}
                          required
                          name="qn3"
                          onChange={(e) => setQn3("Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q3-disagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Disagree
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q3-strongly-disagree"
                          type="radio"
                          value={qn3}
                          name="qn3"
                          onChange={(e) => setQn3("Strongly Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q3-strongly-disagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Disagree
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* qn4 */}
              <div className="mb-6">
                <div className="font-medium">
                  4: I am able to do things as well as most other people.
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q4-strongly-agree"
                          type="radio"
                          value={qn4}
                          name="qn4"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          required
                          onChange={(e) => setQn4("Strongly Agree")}
                        />
                        <label
                          htmlFor="q4-strongly-agree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q4-agree"
                          type="radio"
                          value={qn4}
                          name="qn4"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn4("Agree")}
                        />
                        <label
                          htmlFor="q4-agree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q4-disagree"
                          type="radio"
                          value={qn4}
                          required
                          name="qn4"
                          onChange={(e) => setQn4("Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q4-disagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Disagree
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q4-strongly-disagree"
                          type="radio"
                          value={qn4}
                          name="qn4"
                          onChange={(e) => setQn4("Strongly Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q4-strongly-disagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Disagree
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* qn5 */}
              <div className="mb-6">
                <div className="font-medium">
                  5: I feel I do not have much to be proud of.
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q5-strongly-agree"
                          type="radio"
                          value={qn5}
                          name="qn5"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          required
                          onChange={(e) => setQn5("Strongly Agree")}
                        />
                        <label
                          htmlFor="q5-strongly-agree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q5-agree"
                          type="radio"
                          value={qn5}
                          name="qn5"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn5("Agree")}
                        />
                        <label
                          htmlFor="q5-agree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q5-disagree"
                          type="radio"
                          value={qn5}
                          required
                          name="qn5"
                          onChange={(e) => setQn5("Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q5-disagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Disagree
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q5-strongly-disagree"
                          type="radio"
                          value={qn5}
                          name="qn5"
                          onChange={(e) => setQn5("Strongly Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q5-strongly-disagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Disagree
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* qn6 */}
              <div className="mb-6">
                <div className="font-medium">
                  6: I certainly feel useless at times.
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q6-strongly-agree"
                          type="radio"
                          value={qn6}
                          name="qn6"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          required
                          onChange={(e) => setQn6("Strongly Agree")}
                        />
                        <label
                          htmlFor="q6-strongly-agree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q6-agree"
                          type="radio"
                          value={qn6}
                          name="qn6"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn6("Agree")}
                        />
                        <label
                          htmlFor="q6-agree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q6-disagree"
                          type="radio"
                          value={qn6}
                          required
                          name="qn6"
                          onChange={(e) => setQn6("Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q6-disagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Disagree
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q6-strongly-disagree"
                          type="radio"
                          value={qn6}
                          name="qn6"
                          onChange={(e) => setQn6("Strongly Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q6-strongly-disagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Disagree
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* qn7 */}
              <div className="mb-6">
                <div className="font-medium">
                  7: I feel that I'm a person of worth, at least on an equal
                  plane with others.
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q7-strongly-agree"
                          type="radio"
                          value={qn7}
                          name="qn7"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          required
                          onChange={(e) => setQn7("Strongly Agree")}
                        />
                        <label
                          htmlFor="q7-strongly-agree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q7-agree"
                          type="radio"
                          value={qn7}
                          name="qn7"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn7("Agree")}
                        />
                        <label
                          htmlFor="q7-agree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q7-disagree"
                          type="radio"
                          value={qn7}
                          required
                          name="qn7"
                          onChange={(e) => setQn7("Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q7-disagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Disagree
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q7-strongly-disagree"
                          type="radio"
                          value={qn7}
                          name="qn7"
                          onChange={(e) => setQn7("Strongly Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q7-strongly-disagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Disagree
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn8 */}
              <div className="mb-6">
                <div className="font-medium">
                  8: I wish I could have more respect for myself.
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q8-strongly-agree"
                          type="radio"
                          value={qn8}
                          name="qn8"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          required
                          onChange={(e) => setQn8("Strongly Agree")}
                        />
                        <label
                          htmlFor="q8-strongly-agree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q8-agree"
                          type="radio"
                          value={qn8}
                          name="qn8"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn8("Agree")}
                        />
                        <label
                          htmlFor="q8-agree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q8-disagree"
                          type="radio"
                          value={qn8}
                          required
                          name="qn8"
                          onChange={(e) => setQn8("Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q8-disagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Disagree
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q8-strongly-disagree"
                          type="radio"
                          value={qn8}
                          name="qn8"
                          onChange={(e) => setQn8("Strongly Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q8-strongly-disagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Disagree
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn9 */}
              <div className="mb-6">
                <div className="font-medium">
                  9: All in all, I am inclined to feel that I am a failure.
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q9-strongly-agree"
                          type="radio"
                          value={qn9}
                          name="qn9"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          required
                          onChange={(e) => setQn9("Strongly Agree")}
                        />
                        <label
                          htmlFor="q9-strongly-agree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q9-agree"
                          type="radio"
                          value={qn9}
                          name="qn9"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn9("Agree")}
                        />
                        <label
                          htmlFor="q9-agree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q9-disagree"
                          type="radio"
                          value={qn9}
                          required
                          name="qn9"
                          onChange={(e) => setQn9("Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q9-disagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Disagree
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q9-strongly-disagree"
                          type="radio"
                          value={qn9}
                          name="qn9"
                          onChange={(e) => setQn9("Strongly Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q9-strongly-disagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Disagree
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* qn10 */}
              <div className="mb-6">
                <div className="font-medium">
                  10: I take a positive attitude toward myself.
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q10-strongly-agree"
                          type="radio"
                          value={qn10}
                          name="qn10"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          required
                          onChange={(e) => setQn10("Strongly Agree")}
                        />
                        <label
                          htmlFor="q10-strongly-agree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q10-agree"
                          type="radio"
                          value={qn10}
                          name="qn10"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn10("Agree")}
                        />
                        <label
                          htmlFor="q10-agree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Agree
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q10-disagree"
                          type="radio"
                          value={qn10}
                          required
                          name="qn10"
                          onChange={(e) => setQn10("Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q10-disagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Disagree
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q10-strongly-disagree"
                          type="radio"
                          value={qn10}
                          name="qn10"
                          onChange={(e) => setQn10("Strongly Disagree")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q10-strongly-disagree"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Strongly Disagree
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* ############################################ */}

              {/* submit */}
              <div className="py-8">
                <input
                  type="submit"
                  className="px-3 py-2 text-2xl text-white bg-primary04 rounded-xl"
                  value={loading ? "Loading..." : "Submit"} // Change button text based on loading state
                  disabled={loading} // Disable button when loading
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowSelfEsteem;
