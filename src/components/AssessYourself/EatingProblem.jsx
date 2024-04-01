import React, { useState } from "react";
import formheader from "../../assets/image/assessyourself/formheader.png";

import BASE_URL from "../../apis/Config";
import { useNavigate, useParams } from "react-router-dom";

const EatingProblem = ({ username, email }) => {
  const { id } = useParams();
  const [q1, setQ1] = useState();
  const [q2, setQ2] = useState();
  const [q3, setQ3] = useState();
  const [q4, setQ4] = useState();
  const [q5, setQ5] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  console.log(id);

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);

    fetch(`${BASE_URL}/assessyourself/eatingproblem/postformdata`, {
      method: "POST",
      body: JSON.stringify({ username, email, q1, q2, q3, q4, q5, id }),
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
            Questionnaire for Changes in Appetite
          </div>
          {/* form */}
          <div className="mx-3 my-12 text-xl sm:mx-12 ">
            <form className="" onSubmit={submitHandler}>
              <div className="mb-12">
                <div className="font-medium">
                  The SCOFF Questionnaire is a five-question screening tool
                  designed to clarify suspicion that an eating disorder might
                  exist rather than to make a diagnosis.
                </div>
                <div className="font-medium">
                  Please answer the following questions in a Yes/No
                </div>
              </div>

              <div className="mb-6">
                <div className="font-medium ">
                  <span>S</span> - Do you make yourself Sick because you feel
                  uncomfortably full?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300 ">
                    <input
                      id="q1choice-radio-1"
                      type="radio"
                      value={q1}
                      name="q1choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      required
                      onChange={(e) => setQ1(true)}
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
                      value={q1}
                      name="q1choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      onChange={(e) => setQ1(false)}
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
              {/* Question 2 */}
              <div className="mb-6">
                <div className="font-medium ">
                  <span>C</span> - Do you worry you have lost Control over how
                  much you eat?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="q2choice-radio-1"
                      type="radio"
                      value={q2}
                      name="q2choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      required
                      onChange={(e) => setQ2(true)}
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
                      value={q2}
                      name="q2choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={(e) => setQ2(false)}
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

              {/* Question 3 */}
              <div className="mb-6">
                <div className="font-medium ">
                  <span>O</span> - Have you recently lost more than One stone
                  6.35 kg in a three-month period?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="q3choice-radio-1"
                      type="radio"
                      value={q3}
                      name="q3choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      required
                      onChange={(e) => setQ3(true)}
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
                      value={q3}
                      name="q3choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={(e) => setQ3(false)}
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

              {/* Question 4 */}
              <div className="mb-6">
                <div className="font-medium ">
                  <span>F</span> - Do you believe yourself to be Fat when others
                  say you are too thin?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="q4choice-radio-1"
                      type="radio"
                      value={q4}
                      name="q4choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      required
                      onChange={(e) => setQ4(true)}
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
                      value={q4}
                      name="q4choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={(e) => setQ4(false)}
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

              {/* Question 5 */}
              <div className="mb-6">
                <div className="font-medium ">
                  <span>F</span> - Would you say Food dominates your life?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="q5choice-radio-1"
                      type="radio"
                      value={q5}
                      name="q5choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      required
                      onChange={(e) => setQ5(true)}
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
                      value={q5}
                      name="q5choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={(e) => setQ5(false)}
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

              <div className="py-8">
                <input
                  type="submit"
                  className="px-3 py-2 text-xl text-white cursor-pointer bg-primary04 rounded-xl"
                  value={loading ? "Loading..." : "Submit"} // Change button text based on loading state
                  disabled={loading} // Disable button when loading
                />
              </div>
            </form>
          </div>
        </div>
        <div className="my-20 text-sm opacity-50 sm:my-40">
          Luck, A.J., Morgan, J.F., Reid, F., O'Brien, A., Brunton, J., Price,
          C., Perry, L., Lacey, J.H. (2002), 'The SCOFF questionnaire and
          clinical interview for eating disorders in general practice:
          comparative study', British Medical Journal, 325,7367, 755 - 756.
        </div>
      </div>
    </div>
  );
};

export default EatingProblem;
