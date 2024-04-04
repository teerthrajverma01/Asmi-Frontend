import React, { useState } from "react";
import formheader from "../../assets/image/assessyourself/formheader.png";

import BASE_URL from "../../apis/Config";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const MoodImbalance = ({ username, email }) => {
  const [qnonesubqn1, setQnonesubqn1] = useState();
  const [qnonesubqn2, setQnonesubqn2] = useState();
  const [qnonesubqn3, setQnonesubqn3] = useState();
  const [qnonesubqn4, setQnonesubqn4] = useState();
  const [qnonesubqn5, setQnonesubqn5] = useState();
  const [qnonesubqn6, setQnonesubqn6] = useState();
  const [qnonesubqn7, setQnonesubqn7] = useState();
  const [qnonesubqn8, setQnonesubqn8] = useState();
  const [qnonesubqn9, setQnonesubqn9] = useState();
  const [qnonesubqn10, setQnonesubqn10] = useState();
  const [qnonesubqn11, setQnonesubqn11] = useState();
  const [qnonesubqn12, setQnonesubqn12] = useState();
  const [qnonesubqn13, setQnonesubqn13] = useState();
  const [qnonesubqn14, setQnonesubqn14] = useState();
  const [qntwo, setQntwo] = useState();
  const [qnthree, setQnthree] = useState();
  const [qnfour, setQnfour] = useState();
  const [qnfive, setQnfive] = useState();

  const { id } = useParams();
  console.log(id);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);

    fetch(`${BASE_URL}/assessyourself/moodimbalance/postformdata`, {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        qnonesubqn1,
        qnonesubqn2,
        qnonesubqn3,
        qnonesubqn4,
        qnonesubqn5,
        qnonesubqn6,
        qnonesubqn7,
        qnonesubqn8,
        qnonesubqn9,
        qnonesubqn10,
        qnonesubqn11,
        qnonesubqn12,
        qnonesubqn13,
        qnonesubqn14,
        qntwo,
        qnthree,
        qnfour,
        qnfive,
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
            Questionnaire for Mood Imbalance
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
              {/* ############################################### */}
              <div className="mb-6">
                <div className="font-medium ">
                  1: Has there ever been a period of time when you were not your
                  usual self and ...
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300 ">
                    <input
                      id="qnonesubqn1choice-radio-1"
                      type="radio"
                      value={qnonesubqn1}
                      name="qnonesubqn1choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      required
                      onChange={(e) => setQnonesubqn1(true)}
                    />
                    <label
                      htmlFor="qnonesubqn1choice-radio-1"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="qnonesubqn1choice-radio-2"
                      type="radio"
                      value={qnonesubqn1}
                      name="qnonesubqn1choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      onChange={(e) => setQnonesubqn1(false)}
                    />
                    <label
                      htmlFor="qnonesubqn1choice-radio-2"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium">
                  ... you felt so good or so hyper that other people thought you
                  were not your normal self or you were so hyper that you got
                  into trouble?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="q2choice-radio-1"
                      type="radio"
                      value={qnonesubqn2}
                      name="q2choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      required
                      onChange={(e) => setQnonesubqn2(true)}
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
                      value={qnonesubqn2}
                      name="q2choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={(e) => setQnonesubqn2(false)}
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
                  ... you were so irritable that you shouted at people or
                  started fights or arguments?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="qonesubqn3-choice-radio-1"
                      type="radio"
                      value={qnonesubqn3}
                      name="qonesubqn3choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      required
                      onChange={(e) => setQnonesubqn3(true)}
                    />
                    <label
                      htmlFor="qonesubqn3-choice-radio-1"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="qonesubqn3-choice-radio-2"
                      type="radio"
                      value={qnonesubqn3}
                      name="qonesubqn3choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={(e) => setQnonesubqn3(false)}
                    />
                    <label
                      htmlFor="qonesubqn3-choice-radio-2"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium">
                  ... Do you make yourself Sick because you feel uncomfortably
                  full?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="q1choice-radio-1"
                      type="radio"
                      value={qnonesubqn4}
                      name="q1choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      required
                      onChange={(e) => setQnonesubqn4(true)}
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
                      value={qnonesubqn4}
                      name="q1choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={(e) => setQnonesubqn4(false)}
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
                  ... you got much less sleep than usual and found you didn't
                  really miss it?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300 ">
                    <input
                      id="qnonesubqn5-choice-radio-1"
                      type="radio"
                      value={qnonesubqn5}
                      name="qnonesubqn5choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      required
                      onChange={(e) => setQnonesubqn5(true)}
                    />
                    <label
                      htmlFor="qnonesubqn5-choice-radio-1"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="qnonesubqn5-choice-radio-2"
                      type="radio"
                      value={qnonesubqn5}
                      name="qnonesubqn5choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      onChange={(e) => setQnonesubqn5(false)}
                    />
                    <label
                      htmlFor="qnonesubqn5-choice-radio-2"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium">
                  ... you were much more talkative or spoke faster than usual?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="q6choice-radio-1"
                      type="radio"
                      value={qnonesubqn6}
                      name="q6choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      required
                      onChange={(e) => setQnonesubqn6(true)}
                    />
                    <label
                      htmlFor="q6choice-radio-1"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="q6choice-radio-2"
                      type="radio"
                      value={qnonesubqn6}
                      name="q6choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={(e) => setQnonesubqn6(false)}
                    />
                    <label
                      htmlFor="q6choice-radio-2"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium">
                  ... thoughts raced through your head or you couldn't slow your
                  mind down?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300 ">
                    <input
                      id="q7choice-radio-1"
                      type="radio"
                      value={qnonesubqn7}
                      name="q7choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      required
                      onChange={(e) => setQnonesubqn7(true)}
                    />
                    <label
                      htmlFor="q7choice-radio-1"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="q7choice-radio-2"
                      type="radio"
                      value={qnonesubqn7}
                      name="q7choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      onChange={(e) => setQnonesubqn7(false)}
                    />
                    <label
                      htmlFor="q7choice-radio-2"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium">
                  ... you were so easily distracted by things around you that
                  you had trouble concentrating or staying on track?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="qnonesubqn8-choice-radio-1"
                      type="radio"
                      value={qnonesubqn8}
                      name="qnonesubqn8choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      required
                      onChange={(e) => setQnonesubqn8(true)}
                    />
                    <label
                      htmlFor="qnonesubqn8-choice-radio-1"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="qnonesubqn8-choice-radio-2"
                      type="radio"
                      value={qnonesubqn8}
                      name="qnonesubqn8choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={(e) => setQnonesubqn8(false)}
                    />
                    <label
                      htmlFor="qnonesubqn8-choice-radio-2"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium">
                  ... you had much more energy than usual?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300 ">
                    <input
                      id="qnonesubqn9-radio-1"
                      type="radio"
                      value={qnonesubqn9}
                      name="qnonesubqn9"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      required
                      onChange={(e) => setQnonesubqn9(true)}
                    />
                    <label
                      htmlFor="qnonesubqn9-radio-1"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="qnonesubqn9-radio-2"
                      type="radio"
                      value={qnonesubqn9}
                      name="qnonesubqn9"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      onChange={(e) => setQnonesubqn9(false)}
                    />
                    <label
                      htmlFor="qnonesubqn9-radio-2"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium">
                  ... you were much more active or did many more things than
                  usual?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300 ">
                    <input
                      id="qnonesubqn10-choice-radio-1"
                      type="radio"
                      value={qnonesubqn10}
                      name="qnonesubqn10choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      required
                      onChange={(e) => setQnonesubqn10(true)}
                    />
                    <label
                      htmlFor="qnonesubqn10-choice-radio-1"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="qnonesubqn10-choice-radio-2"
                      type="radio"
                      value={qnonesubqn10}
                      name="qnonesubqn10choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={(e) => setQnonesubqn10(false)}
                    />
                    <label
                      htmlFor="qnonesubqn10-choice-radio-2"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium">
                  ... you were much more social or outgoing than usual, for
                  example, you telephoned friends in the middle of the night?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300 ">
                    <input
                      id="qonesubqn11-radio-1"
                      type="radio"
                      value={qnonesubqn11}
                      name="qonesubqn11choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      required
                      onChange={(e) => setQnonesubqn11(true)}
                    />
                    <label
                      htmlFor="qonesubqn11-radio-1"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="qonesubqn11-radio-2"
                      type="radio"
                      value={qnonesubqn11}
                      name="qonesubqn11choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      onChange={(e) => setQnonesubqn11(false)}
                    />
                    <label
                      htmlFor="qonesubqn11-radio-2"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium">
                  ... Were you much more interested in sex than usual?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="qnonesubqn12-choice-radio-1"
                      type="radio"
                      value={qnonesubqn12}
                      name="qnonesubqn12choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      required
                      onChange={(e) => setQnonesubqn12(true)}
                    />
                    <label
                      htmlFor="qnonesubqn12-choice-radio-1"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="qnonesubqn12-choice-radio-2"
                      type="radio"
                      value={qnonesubqn12}
                      name="qnonesubqn12choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={(e) => setQnonesubqn12(false)}
                    />
                    <label
                      htmlFor="qnonesubqn12-choice-radio-2"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium">
                  ... you did things that were unusual for you or that other
                  people might have thought were excessive, foolish, or risky?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="qnonesubqn13-choice-radio-1"
                      type="radio"
                      value={qnonesubqn13}
                      name="qnonesubqn13choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      required
                      onChange={(e) => setQnonesubqn13(true)}
                    />
                    <label
                      htmlFor="qnonesubqn13-choice-radio-1"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="qnonesubqn13-choice-radio-2"
                      type="radio"
                      value={qnonesubqn13}
                      name="qnonesubqn13choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={(e) => setQnonesubqn13(false)}
                    />
                    <label
                      htmlFor="qnonesubqn13-choice-radio-2"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium ">
                  ... spending money got you or your family in trouble?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300 ">
                    <input
                      id="qnonesubqn14-choice-radio-1"
                      type="radio"
                      value={qnonesubqn14}
                      name="qnonesubqn14choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      required
                      onChange={(e) => setQnonesubqn14(true)}
                    />
                    <label
                      htmlFor="qnonesubqn14-choice-radio-1"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="qnonesubqn14-choice-radio-2"
                      type="radio"
                      value={qnonesubqn14}
                      name="qnonesubqn14choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      onChange={(e) => setQnonesubqn14(false)}
                    />
                    <label
                      htmlFor="qnonesubqn14-choice-radio-2"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              {/* qntwo */}
              <div className="mb-6">
                <div className="font-medium">
                  2: If you checked YES to more than one of the above, have
                  several of these ever happened during the same period of time?
                  Please check 1 response only.
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="qntwo-choice-radio-1"
                      type="radio"
                      value={qntwo}
                      name="qntwo-choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      required
                      onChange={(e) => setQntwo(true)}
                    />
                    <label
                      htmlFor="qntwo-choice-radio-1"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="qntwo-choice-radio-2"
                      type="radio"
                      value={qntwo}
                      name="qntwo-choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={(e) => setQntwo(false)}
                    />
                    <label
                      htmlFor="qntwo-choice-radio-2"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              {/*qnthree  */}
              <div className="mb-6">
                <div className="font-medium">
                  3: How much of a problem did any of these cause you — like
                  being able to work; having family, money, or legal troubles;
                  getting into arguments or fights?
                </div>
                <div className="">
                  <ul className="items-center w-full mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-[55vw]">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 rounded-l-lg ps-3 hover:bg-gray-300">
                        <input
                          id="q3-no-problem"
                          type="radio"
                          value={qnthree}
                          name="qn3"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          required
                          onChange={(e) => setQnthree("NO")}
                        />
                        <label
                          htmlFor="q3-no-problem"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          No problem
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q3-minor-problem"
                          type="radio"
                          value={qnthree}
                          name="qn3"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500"
                          required
                          onChange={(e) => setQnthree("MINOR")}
                        />
                        <label
                          htmlFor="q3-minor-problem"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Minor problem
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q3-moderate-problem"
                          type="radio"
                          value={qnthree}
                          required
                          name="qn3"
                          onChange={(e) => setQnthree("MODERATE")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q3-moderate-problem"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Moderate problem
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center transition duration-300 ps-3 hover:bg-gray-300">
                        <input
                          id="q3-serious-problem"
                          type="radio"
                          value={qnthree}
                          name="qn3"
                          onChange={(e) => setQnthree("SERIOUS")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="q3-serious-problem"
                          className="w-full py-3 text-sm font-medium text-gray-900 cursor-pointer ms-2"
                        >
                          Serious problem
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* qnfour */}
              <div className="mb-6">
                <div className="font-medium">
                  4: Have any of your blood relatives (ie, children, siblings,
                  parents, grandparents, aunts, uncles) had manic-depressive
                  illness or bipolar disorder?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300 ">
                    <input
                      id="qnfour-choice-radio-1"
                      type="radio"
                      value={qnfour}
                      name="qnfourchoice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      required
                      onChange={(e) => setQnfour(true)}
                    />
                    <label
                      htmlFor="qnfour-choice-radio-1"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300">
                    <input
                      id="qnfour-choice-radio-2"
                      type="radio"
                      value={qnfour}
                      name="qnfourchoice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      onChange={(e) => setQnfour(false)}
                    />
                    <label
                      htmlFor="qnfour-choice-radio-2"
                      className="w-full py-1 ml-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              {/* qnfive */}
              <div className="mb-6">
                <div className="font-medium">
                  <span>5:</span> - Has a health professional ever told you that
                  you have manic-depressive illness or bipolar disorder?
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center transition border border-gray-200 rounded ps-4 dark:border-gray-700 min-w-24 hover:bg-gray-300 ">
                    <input
                      id="q5choice-radio-1"
                      type="radio"
                      value={qnfive}
                      name="q5choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      required
                      onChange={(e) => setQnfive(true)}
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
                      value={qnfive}
                      name="q5choice"
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={(e) => setQnfive(false)}
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
              {/* ############################################### */}

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

export default MoodImbalance;
