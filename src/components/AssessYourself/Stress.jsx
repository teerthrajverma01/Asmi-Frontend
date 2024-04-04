import React, { useState } from "react";
import formheader from "../../assets/image/assessyourself/formheader.png";

import BASE_URL from "../../apis/Config";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const Stress = ({ username, email }) => {
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

    fetch(`${BASE_URL}/assessyourself/stress/postformdata`, {
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
            Questionnaire for Stress
          </div>
          {/* form */}
          <div className="mx-3 my-12 text-xl sm:mx-12 ">
            <form className="" onSubmit={submitHandler}>
              <div className="mb-12">
                <div className="font-medium">
                  <p>
                    For each question choose from the following alternatives:
                  </p>
                  <p>Please answer each question as best you can.</p>
                </div>
              </div>

              {/* ###################################################### */}
              {/* qn1 */}
              <div className="mb-6">
                <div className="font-medium">
                  1. In the last month, how often have you been upset because of
                  something that happened unexpectedly?
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q1-never"
                          type="radio"
                          value="Never"
                          name="qn1"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
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
                          id="q1-almost-never"
                          type="radio"
                          value="Almost Never"
                          name="qn1"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn1("Almost Never")}
                        />
                        <label
                          htmlFor="q1-almost-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Almost Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q1-sometimes"
                          type="radio"
                          value="Sometimes"
                          required
                          name="qn1"
                          onChange={(e) => setQn1("Sometimes")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q1-sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q1-fairly-often"
                          type="radio"
                          value="Fairly Often"
                          name="qn1"
                          onChange={(e) => setQn1("Fairly Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q1-fairly-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Fairly Often
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q1-very-often"
                          type="radio"
                          value="Very Often"
                          name="qn1"
                          onChange={(e) => setQn1("Very Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q1-very-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Very Often
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn2 */}
              <div className="mb-6">
                <div className="font-medium">
                  2. In the last month, how often have you felt that you were
                  unable to control the important things in your life?
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
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
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
                          id="q2-almost-never"
                          type="radio"
                          value={qn2}
                          name="qn2"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn2("Almost Never")}
                        />
                        <label
                          htmlFor="q2-almost-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Almost Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q2-sometimes"
                          type="radio"
                          value={qn2}
                          required
                          name="qn2"
                          onChange={(e) => setQn2("Sometimes")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q2-sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q2-fairly-often"
                          type="radio"
                          value={qn2}
                          name="qn2"
                          onChange={(e) => setQn2("Fairly Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q2-fairly-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Fairly Often
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q2-very-often"
                          type="radio"
                          value={qn2}
                          name="qn2"
                          onChange={(e) => setQn2("Very Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q2-very-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Very Often
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn3 */}
              <div className="mb-6">
                <div className="font-medium">
                  3. In the last month, how often have you felt nervous and
                  stressed?
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
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
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
                          id="q3-almost-never"
                          type="radio"
                          value={qn3}
                          name="qn3"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn3("Almost Never")}
                        />
                        <label
                          htmlFor="q3-almost-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Almost Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q3-sometimes"
                          type="radio"
                          value={qn3}
                          required
                          name="qn3"
                          onChange={(e) => setQn3("Sometimes")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q3-sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q3-fairly-often"
                          type="radio"
                          value={qn3}
                          name="qn3"
                          onChange={(e) => setQn3("Fairly Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q3-fairly-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Fairly Often
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q3-very-often"
                          type="radio"
                          value={qn3}
                          name="qn3"
                          onChange={(e) => setQn3("Very Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q3-very-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Very Often
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn4 */}
              <div className="mb-6">
                <div className="font-medium">
                  4. In the last month, how often have you felt confident about
                  your ability to handle your personal problems?
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q4-option-never"
                          type="radio"
                          value={qn4}
                          name="qn4"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          required
                          onChange={(e) => setQn4("Never")}
                        />
                        <label
                          htmlFor="q4-option-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q4-option-almost-never"
                          type="radio"
                          value={qn4}
                          name="qn4"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn4("Almost Never")}
                        />
                        <label
                          htmlFor="q4-option-almost-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Almost Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q4-option-sometimes"
                          type="radio"
                          value={qn4}
                          required
                          name="qn4"
                          onChange={(e) => setQn4("Sometimes")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q4-option-sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q4-option-fairly-often"
                          type="radio"
                          value={qn4}
                          name="qn4"
                          onChange={(e) => setQn4("Fairly Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q4-option-fairly-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Fairly Often
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q4-option-very-often"
                          type="radio"
                          value={qn4}
                          name="qn4"
                          onChange={(e) => setQn4("Very Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q4-option-very-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Very Often
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn5 */}
              <div className="mb-6">
                <div className="font-medium">
                  5: In the last month, how often have you felt that things were
                  going your way?
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q5-never"
                          type="radio"
                          value={qn5}
                          name="qn5"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
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
                          id="q5-almost-never"
                          type="radio"
                          value={qn5}
                          name="qn5"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn5("Almost Never")}
                        />
                        <label
                          htmlFor="q5-almost-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Almost Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q5-sometimes"
                          type="radio"
                          value={qn5}
                          required
                          name="qn5"
                          onChange={(e) => setQn5("Sometimes")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q5-sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q5-fairly-often"
                          type="radio"
                          value={qn5}
                          required
                          name="qn5"
                          onChange={(e) => setQn5("Fairly Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q5-fairly-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Fairly Often
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q5-very-often"
                          type="radio"
                          value={qn5}
                          required
                          name="qn5"
                          onChange={(e) => setQn5("Very Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q5-very-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Very Often
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn6 */}
              <div className="mb-6">
                <div className="font-medium">
                  6. In the last month, how often have you found that you could
                  not cope with all the things that you had to do?
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
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
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
                          id="q6-almost-never"
                          type="radio"
                          value={qn6}
                          name="qn6"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn6("Almost Never")}
                        />
                        <label
                          htmlFor="q6-almost-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Almost Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q6-sometimes"
                          type="radio"
                          value={qn6}
                          required
                          name="qn6"
                          onChange={(e) => setQn6("Sometimes")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q6-sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q6-fairly-often"
                          type="radio"
                          value={qn6}
                          name="qn6"
                          onChange={(e) => setQn6("Fairly Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q6-fairly-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Fairly Often
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q6-very-often"
                          type="radio"
                          value={qn6}
                          name="qn6"
                          onChange={(e) => setQn6("Very Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q6-very-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Very Often
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn7 */}
              <div className="mb-6">
                <div className="font-medium">
                  7. In the last month, how often have you been able to control
                  irritations in your life?
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
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
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
                          id="q7-almost-never"
                          type="radio"
                          value={qn7}
                          name="qn7"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn7("Almost Never")}
                        />
                        <label
                          htmlFor="q7-almost-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Almost Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q7-sometimes"
                          type="radio"
                          value={qn7}
                          required
                          name="qn7"
                          onChange={(e) => setQn7("Sometimes")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q7-sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q7-fairly-often"
                          type="radio"
                          value={qn7}
                          name="qn7"
                          onChange={(e) => setQn7("Fairly Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q7-fairly-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Fairly Often
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q7-very-often"
                          type="radio"
                          value={qn7}
                          name="qn7"
                          onChange={(e) => setQn7("Very Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q7-very-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Very Often
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn8 */}
              <div className="mb-6">
                <div className="font-medium">
                  8. In the last month, how often have you felt that you were on
                  top of things?
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
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
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
                          id="q8-almost-never"
                          type="radio"
                          value={qn8}
                          name="qn8"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn8("Almost Never")}
                        />
                        <label
                          htmlFor="q8-almost-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Almost Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q8-sometimes"
                          type="radio"
                          value={qn8}
                          required
                          name="qn8"
                          onChange={(e) => setQn8("Sometimes")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q8-sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q8-fairly-often"
                          type="radio"
                          value={qn8}
                          name="qn8"
                          onChange={(e) => setQn8("Fairly Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q8-fairly-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Fairly Often
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q8-very-often"
                          type="radio"
                          value={qn8}
                          name="qn8"
                          onChange={(e) => setQn8("Very Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q8-very-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Very Often
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn9 */}
              <div className="mb-6">
                <div className="font-medium">
                  9. In the last month, how often have you been angered because
                  of things that happened that were outside of your control?
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="qn9-never"
                          type="radio"
                          value={qn9}
                          name="qn9"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          required
                          onChange={(e) => setQn9("Never")}
                        />
                        <label
                          htmlFor="qn9-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="qn9-almost-never"
                          type="radio"
                          value={qn9}
                          name="qn9"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn9("Almost Never")}
                        />
                        <label
                          htmlFor="qn9-almost-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Almost Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="qn9-sometimes"
                          type="radio"
                          value={qn9}
                          required
                          name="qn9"
                          onChange={(e) => setQn9("Sometimes")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="qn9-sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="qn9-fairly-often"
                          type="radio"
                          value={qn9}
                          name="qn9"
                          onChange={(e) => setQn9("Fairly Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="qn9-fairly-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Fairly Often
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="qn9-very-often"
                          type="radio"
                          value={qn9}
                          name="qn9"
                          onChange={(e) => setQn9("Very Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="qn9-very-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Very Often
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* qn10 */}
              <div className="mb-6">
                <div className="font-medium">
                  10. In the last month, how often have you felt difficulties
                  were piling up so high that you could not overcome them?
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
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
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
                          id="q10-almost-never"
                          type="radio"
                          value={qn10}
                          name="qn10"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQn10("Almost Never")}
                        />
                        <label
                          htmlFor="q10-almost-never"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Almost Never
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q10-sometimes"
                          type="radio"
                          value={qn10}
                          required
                          name="qn10"
                          onChange={(e) => setQn10("Sometimes")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q10-sometimes"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Sometimes
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q10-fairly-often"
                          type="radio"
                          value={qn10}
                          name="qn10"
                          onChange={(e) => setQn10("Fairly Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q10-fairly-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Fairly Often
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q10-very-often"
                          type="radio"
                          value={qn10}
                          name="qn10"
                          onChange={(e) => setQn10("Very Often")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q10-very-often"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Very Often
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ###################################################### */}

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
        <div className="my-20 text-sm opacity-50 sm:my-40">
          This instrument is designed for screening purposes only and is not to
          be used as a diagnostic tool.
        </div>
      </div>
    </div>
  );
};

export default Stress;
