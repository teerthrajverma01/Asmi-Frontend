import React, { useState } from "react";
import formheader from "../../assets/image/assessyourself/formheader.png";

import BASE_URL from "../../apis/Config";
import { useNavigate, useParams } from "react-router-dom";

const SleepDisturbance = ({ username, email }) => {
  const { id } = useParams();

  const [qn0, setQn0] = useState();
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
  const [qnelevensubqn1, setQnelevensubqn1] = useState();
  const [qnelevensubqn2, setQnelevensubqn2] = useState();
  const [qnelevensubqn3, setQnelevensubqn3] = useState();
  const [qnelevensubqn4, setQnelevensubqn4] = useState();
  const [qnelevensubqn5, setQnelevensubqn5] = useState();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  console.log(id);

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);

    fetch(`${BASE_URL}/assessyourself/sleepdisturbance/postformdata`, {
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
        qnelevensubqn1,
        qnelevensubqn2,
        qnelevensubqn3,
        qnelevensubqn4,
        qnelevensubqn5,
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
        navigate(`/submitassessment/${result.result}`);
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
            Questionnaire for Sleep Disturbance
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
              {/* qn0 */}
              <div className="mb-10">
                <div className="mb-2 font-medium">
                  1. Over the past month, have you had a major stressful event
                  that you feel affected your sleep? If so, please describe ...
                </div>

                <textarea
                  rows="4"
                  value={qn0}
                  className="block p-2.5 md:w-[50%] w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  required
                  placeholder="In case you do not have
                  such an event, please write NA."
                  onChange={(e) => setQn0(e.target.value)}
                />
              </div>

              {/* qn1  */}
              <div className="mb-10">
                <div className="font-medium ">
                  2. Did you have difficulty falling asleep, staying asleep, or
                  feeling poorly rested in the morning?
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q1-never"
                          type="radio"
                          value={qn1}
                          name="qn1"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                          required
                          onChange={(e) => setQn1("Never")}
                        />
                        <label
                          htmlFor="q1-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q1-Sometimes"
                          type="radio"
                          value={qn1}
                          name="qn1"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn1("Sometimes")}
                        />
                        <label
                          htmlFor="q1-Sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q1-usually"
                          type="radio"
                          value={qn1}
                          required
                          name="qn1"
                          onChange={(e) => setQn1("Usually")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                        />
                        <label
                          htmlFor="q1-usually"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Usually
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q1-Always"
                          type="radio"
                          value={qn1}
                          name="qn1"
                          onChange={(e) => setQn1("Always")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q1-Always"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Always
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* qn2 */}
              <div className="mb-10">
                <div className="font-medium ">
                  3. Did you fall asleep unintentionally or have to fight to
                  stay awake during the day?
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q2-never"
                          type="radio"
                          value={qn2}
                          name="qn2"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                          required
                          onChange={(e) => setQn2("Never")}
                        />
                        <label
                          htmlFor="q2-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q2-Sometimes"
                          type="radio"
                          value={qn2}
                          name="qn2"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn2("Sometimes")}
                        />
                        <label
                          htmlFor="q2-Sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q2-usually"
                          type="radio"
                          value={qn2}
                          required
                          name="qn2"
                          onChange={(e) => setQn2("Usually")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                        />
                        <label
                          htmlFor="q2-usually"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Usually
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q2-Always"
                          type="radio"
                          value={qn2}
                          name="qn2"
                          onChange={(e) => setQn2("Always")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q2-Always"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Always
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn3 */}
              <div className="mb-10">
                <div className="font-medium ">
                  4. Did sleep difficulties or daytime sleepiness interfere with
                  your daily activities?
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q3-never"
                          type="radio"
                          value={qn3}
                          name="qn3"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                          required
                          onChange={(e) => setQn3("Never")}
                        />
                        <label
                          htmlFor="q3-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q3-Sometimes"
                          type="radio"
                          value={qn3}
                          name="qn3"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn3("Sometimes")}
                        />
                        <label
                          htmlFor="q3-Sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q3-usually"
                          type="radio"
                          value={qn3}
                          required
                          name="qn3"
                          onChange={(e) => setQn3("Usually")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                        />
                        <label
                          htmlFor="q3-usually"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Usually
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q3-Always"
                          type="radio"
                          value={qn3}
                          name="qn3"
                          onChange={(e) => setQn3("Always")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q3-Always"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Always
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn4 */}
              <div className="mb-10">
                <div className="font-medium ">
                  5. Did work or other activities prevent you from getting
                  enough sleep?
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q4-never"
                          type="radio"
                          value={qn4}
                          name="qn4"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                          required
                          onChange={(e) => setQn4("Never")}
                        />
                        <label
                          htmlFor="q4-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q4-Sometimes"
                          type="radio"
                          value={qn4}
                          name="qn4"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn4("Sometimes")}
                        />
                        <label
                          htmlFor="q4-Sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q4-usually"
                          type="radio"
                          value={qn4}
                          required
                          name="qn4"
                          onChange={(e) => setQn4("Usually")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                        />
                        <label
                          htmlFor="q4-usually"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Usually
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q4-Always"
                          type="radio"
                          value={qn4}
                          name="qn4"
                          onChange={(e) => setQn4("Always")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q4-Always"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Always
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn5 */}
              <div className="mb-10">
                <div className="font-medium ">6. Did you snore loudly?</div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q5-never"
                          type="radio"
                          value={qn5}
                          name="qn5"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                          required
                          onChange={(e) => setQn5("Never")}
                        />
                        <label
                          htmlFor="q5-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q5-Sometimes"
                          type="radio"
                          value={qn5}
                          name="qn5"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn5("Sometimes")}
                        />
                        <label
                          htmlFor="q5-Sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q5-usually"
                          type="radio"
                          value={qn5}
                          required
                          name="qn5"
                          onChange={(e) => setQn5("Usually")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                        />
                        <label
                          htmlFor="q5-usually"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Usually
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q5-Always"
                          type="radio"
                          value={qn5}
                          name="qn5"
                          onChange={(e) => setQn5("Always")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q5-Always"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Always
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn6 */}
              <div className="mb-10">
                <div className="font-medium ">
                  7. Did you hold your breath, have breathing pauses, or stop
                  breathing in your sleep?
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q6-never"
                          type="radio"
                          value={qn6}
                          name="qn6"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                          required
                          onChange={(e) => setQn6("Never")}
                        />
                        <label
                          htmlFor="q6-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q6-Sometimes"
                          type="radio"
                          value={qn6}
                          name="qn6"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn6("Sometimes")}
                        />
                        <label
                          htmlFor="q6-Sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q6-usually"
                          type="radio"
                          value={qn6}
                          required
                          name="qn6"
                          onChange={(e) => setQn6("Usually")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                        />
                        <label
                          htmlFor="q6-usually"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Usually
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q6-Always"
                          type="radio"
                          value={qn6}
                          onChange={(e) => setQn6("Always")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q6-Always"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Always
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn7 */}
              <div className="mb-10">
                <div className="font-medium ">
                  8. Did you have restless or "crawling" feelings in your legs
                  at night that went away if you moved your legs?
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q7-never"
                          type="radio"
                          value={qn7}
                          name="qn7"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                          required
                          onChange={(e) => setQn7("Never")}
                        />
                        <label
                          htmlFor="q7-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q7-Sometimes"
                          type="radio"
                          value={qn7}
                          name="qn7"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn7("Sometimes")}
                        />
                        <label
                          htmlFor="q7-Sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q7-usually"
                          type="radio"
                          value={qn7}
                          required
                          name="qn7"
                          onChange={(e) => setQn7("Usually")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q7-usually"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Usually
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q7-Always"
                          type="radio"
                          value={qn7}
                          name="qn7"
                          onChange={(e) => setQn7("Always")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q7-Always"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Always
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn8 */}
              <div className="mb-10">
                <div className="font-medium ">
                  9. Did you have repeated rhythmic leg jerks or leg twitches
                  during your sleep?
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q8-never"
                          type="radio"
                          value={qn8}
                          name="qn8"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                          required
                          onChange={(e) => setQn8("Never")}
                        />
                        <label
                          htmlFor="q8-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q8-Sometimes"
                          type="radio"
                          value={qn8}
                          name="qn8"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn8("Sometimes")}
                        />
                        <label
                          htmlFor="q8-Sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q8-usually"
                          type="radio"
                          value={qn8}
                          required
                          name="qn8"
                          onChange={(e) => setQn8("Usually")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q8-usually"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Usually
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q8-Always"
                          type="radio"
                          value={qn8}
                          name="qn8"
                          onChange={(e) => setQn8("Always")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q8-Always"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Always
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn9 */}
              <div className="mb-10">
                <div className="font-medium ">
                  9. Did you have nightmares, or did you scream, walk, punch, or
                  kick in your sleep?
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q9-never"
                          type="radio"
                          value={qn9}
                          name="qn9"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                          required
                          onChange={(e) => setQn9("Never")}
                        />
                        <label
                          htmlFor="q9-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q9-Sometimes"
                          type="radio"
                          value={qn9}
                          name="qn9"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn9("Sometimes")}
                        />
                        <label
                          htmlFor="q9-Sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q9-Usually"
                          type="radio"
                          value={qn9}
                          name="qn9"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn9("Usually")}
                        />
                        <label
                          htmlFor="q9-Usually"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Usually
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q9-Always"
                          type="radio"
                          value={qn9}
                          name="qn9"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn9("Always")}
                        />
                        <label
                          htmlFor="q9-Always"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Always
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn10 */}
              <div className="mb-10">
                <div className="font-medium ">
                  11. Did you feel sad or anxious?
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q10-never"
                          type="radio"
                          value={qn10}
                          name="qn10"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                          required
                          onChange={(e) => setQn10("Never")}
                        />
                        <label
                          htmlFor="q10-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q10-Sometimes"
                          type="radio"
                          value={qn10}
                          name="qn10"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn10("Sometimes")}
                        />
                        <label
                          htmlFor="q10-Sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q10-usually"
                          type="radio"
                          value={qn10}
                          required
                          name="qn10"
                          onChange={(e) => setQn10("Usually")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q10-usually"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Usually
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q10-Always"
                          type="radio"
                          value={qn10}
                          name="qn10"
                          onChange={(e) => setQn10("Always")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q10-Always"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Always
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* last question */}

              <div className="mb-10">
                <div className="font-medium">
                  Did the following things disturb your sleep:
                </div>
                <div className="">
                  <div className="">
                    <p className="my-2 ml-8 text-xl">-Pain</p>

                    <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                      <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                          <input
                            id="qlast-never"
                            type="radio"
                            value="Never"
                            checked={qnelevensubqn1 === "Never"}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                            required
                            onChange={(e) => setQnelevensubqn1("Never")}
                          />
                          <label
                            htmlFor="qlast-never"
                            className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                          >
                            Never
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                          <input
                            id="qlast-Sometimes"
                            type="radio"
                            value="Sometimes"
                            checked={qnelevensubqn1 === "Sometimes"}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                            required
                            onChange={(e) => setQnelevensubqn1("Sometimes")}
                          />
                          <label
                            htmlFor="qlast-Sometimes"
                            className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                          >
                            Sometimes
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                          <input
                            id="qlast-usually"
                            type="radio"
                            required
                            value="Usually"
                            checked={qnelevensubqn1 === "Usually"}
                            onChange={(e) => setQnelevensubqn1("Usually")}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                          />
                          <label
                            htmlFor="qlast-usually"
                            className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                          >
                            Usually
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                          <input
                            id="qlast-Always"
                            type="radio"
                            value="Always"
                            checked={qnelevensubqn1 === "Always"}
                            onChange={(e) => setQnelevensubqn1("Always")}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          />
                          <label
                            htmlFor="qlast-Always"
                            className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                          >
                            Always
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <p className="my-2 ml-8 text-xl">
                      -Other physical problems
                    </p>

                    <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                      <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                          <input
                            id="qlast2-never"
                            type="radio"
                            value="Never"
                            checked={qnelevensubqn2 === "Never"}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                            required
                            onChange={(e) => setQnelevensubqn2("Never")}
                          />
                          <label
                            htmlFor="qlast2-never"
                            className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                          >
                            Never
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                          <input
                            id="qlast2-Sometimes"
                            type="radio"
                            value="Sometimes"
                            checked={qnelevensubqn2 === "Sometimes"}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                            required
                            onChange={(e) => setQnelevensubqn2("Sometimes")}
                          />
                          <label
                            htmlFor="qlast2-Sometimes"
                            className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                          >
                            Sometimes
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                          <input
                            id="qlast2-usually"
                            type="radio"
                            required
                            value="Usually"
                            checked={qnelevensubqn2 === "Usually"}
                            onChange={(e) => setQnelevensubqn2("Usually")}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                          />
                          <label
                            htmlFor="qlast2-usually"
                            className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                          >
                            Usually
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                          <input
                            id="qlast2-Always"
                            type="radio"
                            value="Always"
                            checked={qnelevensubqn2 === "Always"}
                            onChange={(e) => setQnelevensubqn2("Always")}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          />
                          <label
                            htmlFor="qlast2-Always"
                            className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                          >
                            Always
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <p className="my-2 ml-8 text-xl ">-Worries</p>

                    <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                      <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                          <input
                            id="qlast3-never"
                            type="radio"
                            value="Never"
                            checked={qnelevensubqn3 === "Never"}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                            required
                            onChange={(e) => setQnelevensubqn3("Never")}
                          />
                          <label
                            htmlFor="qlast3-never"
                            className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                          >
                            Never
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                          <input
                            id="qlas3-Sometimes"
                            type="radio"
                            value="Sometimes"
                            checked={qnelevensubqn3 === "Sometimes"}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                            required
                            onChange={(e) => setQnelevensubqn3("Sometimes")}
                          />
                          <label
                            htmlFor="qlas3-Sometimes"
                            className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                          >
                            Sometimes
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                          <input
                            id="qlas3-usually"
                            type="radio"
                            required
                            value="Usually"
                            checked={qnelevensubqn3 === "Usually"}
                            onChange={(e) => setQnelevensubqn3("Usually")}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                          />
                          <label
                            htmlFor="qlas3-usually"
                            className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                          >
                            Usually
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                          <input
                            id="qlas3-Always"
                            type="radio"
                            value="Always"
                            checked={qnelevensubqn3 === "Always"}
                            onChange={(e) => setQnelevensubqn3("Always")}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          />
                          <label
                            htmlFor="qlas3-Always"
                            className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                          >
                            Always
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <p className="my-2 ml-8 text-xl">-Medications</p>

                    <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                      <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                          <input
                            id="qlas4-never"
                            type="radio"
                            value="Never"
                            checked={qnelevensubqn4 === "Never"}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                            required
                            onChange={(e) => setQnelevensubqn4("Never")}
                          />
                          <label
                            htmlFor="qlas4-never"
                            className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                          >
                            Never
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                          <input
                            id="qlas4-Sometimes"
                            type="radio"
                            value="Sometimes"
                            checked={qnelevensubqn4 === "Sometimes"}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                            required
                            onChange={(e) => setQnelevensubqn4("Sometimes")}
                          />
                          <label
                            htmlFor="qlas4-Sometimes"
                            className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                          >
                            Sometimes
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                          <input
                            id="qlat4-usually"
                            type="radio"
                            required
                            value="Usually"
                            checked={qnelevensubqn4 === "Usually"}
                            onChange={(e) => setQnelevensubqn4("Usually")}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                          />
                          <label
                            htmlFor="qlat4-usually"
                            className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                          >
                            Usually
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                          <input
                            id="qlas4-Always"
                            type="radio"
                            value="Always"
                            checked={qnelevensubqn4 === "Always"}
                            onChange={(e) => setQnelevensubqn4("Always")}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          />
                          <label
                            htmlFor="qlas4-Always"
                            className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                          >
                            Always
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="my-2 ml-8 text-xl ">-Other</p>

                    <textarea
                      rows="4"
                      value={qnelevensubqn5}
                      className="block p-2.5 md:w-[50%] w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                      required
                      placeholder="In case you do not have
                      anything more to tell, please write NA."
                      onChange={(e) => setQnelevensubqn5(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* submit */}
              <div className="py-8">
                <input
                  type="submit"
                  className="px-3 py-2 text-2xl text-white cursor-pointer bg-primary04 rounded-xl"
                  value={loading ? "Loading..." : "Submit"} // Change button text based on loading state
                  disabled={loading} // Disable button when loading
                />
              </div>
            </form>
          </div>
        </div>
        <div className="my-20 opacity-50 sm:my-40">
          This instrument is designed for screening purposes only and is not to
          be used as a diagnostic tool.
        </div>
      </div>
    </div>
  );
};

export default SleepDisturbance;
