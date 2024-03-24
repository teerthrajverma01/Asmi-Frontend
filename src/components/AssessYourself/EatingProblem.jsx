import React, { useState } from "react";
import formheader from "../../assets/image/assessyourself/formheader.png";

import BASE_URL from "../../apis/Config";
import { useNavigate } from "react-router-dom";

const EatingProblem = ({ username, email }) => {
  const [q1, setQ1] = useState();
  const [q2, setQ2] = useState();
  const [q3, setQ3] = useState();
  const [q4, setQ4] = useState();
  const [q5, setQ5] = useState();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);

    fetch(`${BASE_URL}/assessyourself/eatingproblem/postformdata`, {
      method: "POST",
      body: JSON.stringify({ username, email, q1, q2, q3, q4, q5 }),
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
            Questionnaire for Eating Problem
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
                  <span>S</span> – Do you make yourself Sick because you feel
                  uncomfortably full?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={q1}
                    name="q1choice"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQ1(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={q1}
                    name="q1choice"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQ1(false)}
                  />
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium ">
                  <span>C</span> Do you worry you have lost Control over how
                  much you eat?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={q2}
                    name="q2choice"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQ2(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={q2}
                    name="q2choice"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQ2(false)}
                  />
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium ">
                  <span>O</span> Have you recently lost more than One stone 6.35
                  kg in a three-month period?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={q3}
                    name="q3choice"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQ3(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={q3}
                    name="q3choice"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQ3(false)}
                  />
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium ">
                  <span>F</span> Do you believe yourself to be Fat when others
                  say you are too thin?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={q4}
                    name="q4choice"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQ4(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={q4}
                    name="q4choice"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQ4(false)}
                  />
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium ">
                  <span>F</span> - Would you say Food dominates your life?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={q5}
                    name="q5choice"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQ5(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={q5}
                    name="q5choice"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQ5(false)}
                  />
                </div>
              </div>
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
        <div className="my-20 opacity-50 sm:my-40">
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
