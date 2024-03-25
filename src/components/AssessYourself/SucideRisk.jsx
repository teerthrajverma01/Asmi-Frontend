import React, { useState } from "react";
import formheader from "../../assets/image/assessyourself/formheader.png";

import BASE_URL from "../../apis/Config";
import { useNavigate, useParams } from "react-router-dom";

const SucideRisk = ({ username, email }) => {
  const { id } = useParams();

  const [qn1, setQn1] = useState();
  const [qn2, setQn2] = useState();
  const [qn3, setQn3] = useState();
  const [qn4, setQn4] = useState();
  const [qnfourres1, setQnfourres1] = useState();
  const [qnfourres2, setQnfourres2] = useState();
  const [qn5, setQn5] = useState();
  const [qnfiveres, setQnfiveres] = useState();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  console.log(id);

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);

    fetch(`${BASE_URL}/assessyourself/suciderisk/postformdata`, {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        qn1,
        qn2,
        qn3,
        qn4,
        qnfourres1,
        qnfourres2,
        qn5,
        qnfiveres,
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
            Questionnaire for Sucide Risk
          </div>
          {/* form */}
          <div className="mx-3 my-12 text-xl sm:mx-12 ">
            <form className="" onSubmit={submitHandler}>
              {/* ################################################# */}

              <div className="mb-6">
                <div className="font-medium">
                  <span>1.</span> In the past few weeks, have you wished you
                  were dead?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="q1choice-radio-1"
                      type="radio"
                      value={qn1}
                      name="q1choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      required
                      onChange={(e) => setQn1(true)}
                    />
                    <label
                      htmlFor="q1choice-radio-1"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="q1choice-radio-2"
                      type="radio"
                      value={qn1}
                      name="q1choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={(e) => setQn1(false)}
                    />
                    <label
                      htmlFor="q1choice-radio-2"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium">
                  <span>2</span>. In the past few weeks, have you felt that you
                  or your family would be better off if you were dead?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300 ">
                    <input
                      id="q2choice-radio-1"
                      type="radio"
                      value={qn2}
                      name="q2choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      required
                      onChange={(e) => setQn2(true)}
                    />
                    <label
                      htmlFor="q2choice-radio-1"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="q2choice-radio-2"
                      type="radio"
                      value={qn2}
                      name="q2choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      onChange={(e) => setQn2(false)}
                    />
                    <label
                      htmlFor="q2choice-radio-2"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium">
                  <span>3</span> - In the past week, have you been having
                  thoughts about killing yourself?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="q3choice-radio-1"
                      type="radio"
                      value={qn3}
                      name="q3choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      required
                      onChange={(e) => setQn3(true)}
                    />
                    <label
                      htmlFor="q3choice-radio-1"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="q3choice-radio-2"
                      type="radio"
                      value={qn3}
                      name="q3choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={(e) => setQn3(false)}
                    />
                    <label
                      htmlFor="q3choice-radio-2"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium">
                  <span>4:</span> Have you ever tried to kill yourself?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="q4choice-radio-1"
                      type="radio"
                      value={qn4}
                      name="q4choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      required
                      onChange={(e) => setQn4(true)}
                    />
                    <label
                      htmlFor="q4choice-radio-1"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="q4choice-radio-2"
                      type="radio"
                      value={qn4}
                      name="q4choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={(e) => setQn4(false)}
                    />
                    <label
                      htmlFor="q4choice-radio-2"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>

              {/* ################################################# */}

              {/*  qnfourres1 and qnfourres2*/}
              {qn4 && (
                <>
                  <div>
                    <div className="mb-6">
                      <div className="mb-2 font-medium">How?</div>

                      <textarea
                        rows="4"
                        value={qnfourres1}
                        onChange={(e) => setQnfourres1(e.target.value)}
                        className="block p-2.5 md:w-[50%] w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                        required
                        placeholder="Write your thoughts here..."
                      />
                    </div>
                    <div className="mb-6">
                      <div className="mb-2 font-medium">When?</div>

                      <textarea
                        rows="4"
                        value={qnfourres2}
                        onChange={(e) => setQnfourres2(e.target.value)}
                        className="block p-2.5 md:w-[50%] w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                        required
                        placeholder="Write your thoughts here..."
                      />
                    </div>
                  </div>
                </>
              )}
              {/* qn5*/}
              {(qn4 == true || qn4 == false) &&
                (qn1 == true || qn2 == true || qn3 == true || qn4 == true) && (
                  <div className="mb-6">
                    <div className="font-medium">
                      <span>5.</span> Are you having thoughts of killing
                      yourself right now?
                    </div>
                    <div className="flex gap-4 pt-2">
                      <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300 ">
                        <input
                          id="q5choice-radio-1"
                          type="radio"
                          value={qn5}
                          name="q5choice"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                          required
                          onChange={(e) => setQn5(true)}
                        />
                        <label
                          htmlFor="q5choice-radio-1"
                          className="w-full py-1 ml-2 cursor-pointer"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                        <input
                          id="q5choice-radio-2"
                          type="radio"
                          value={qn5}
                          name="q5choice"
                          required
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                          onChange={(e) => setQn5(false)}
                        />
                        <label
                          htmlFor="q5choice-radio-2"
                          className="w-full py-1 ml-2 cursor-pointer"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              {/*  qnfiveres*/}
              {qn5 && (
                <>
                  <div className="mb-6">
                    <div className="mb-2 font-medium">Please Describe:</div>

                    <textarea
                      rows="4"
                      value={qnfiveres}
                      onChange={(e) => setQnfiveres(e.target.value)}
                      className="block p-2.5 md:w-[50%] w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                      required
                      placeholder="Write your thoughts here..."
                    />
                  </div>
                </>
              )}
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
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SucideRisk;
