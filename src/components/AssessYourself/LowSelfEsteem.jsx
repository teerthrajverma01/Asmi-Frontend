import React, { useState } from "react";
import formheader from "../../assets/image/assessyourself/formheader.png";

import BASE_URL from "../../apis/Config";
import { useNavigate } from "react-router-dom";

const LowSelfEsteem = ({ username, email }) => {
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

              {/* qn1  */}
              <div className="mb-6">
                <div className="font-medium ">
                  1: On the whole, I am satisfied with myself.
                </div>
                <div className="">
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Agree</p>
                    <input
                      type="radio"
                      value={qn1}
                      name="qn1"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn1("Strongly Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Agree</p>
                    <input
                      type="radio"
                      value={qn1}
                      name="qn1"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn1("Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Disagree</p>
                    <input
                      type="radio"
                      value={qn1}
                      name="qn1"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn1("Sometimes")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Disagree</p>
                    <input
                      type="radio"
                      value={qn1}
                      name="qn1"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn1("Fairly Often")}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* qn2 */}
              <div className="mb-6">
                <div className="font-medium ">
                  2: At times, I think I am no good at all.
                </div>
                <div className="">
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Agree</p>
                    <input
                      type="radio"
                      value={qn2}
                      name="qn2"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn2("Strongly Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Agree</p>
                    <input
                      type="radio"
                      value={qn2}
                      name="qn2"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn2("Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Disagree</p>
                    <input
                      type="radio"
                      value={qn2}
                      name="qn2"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn2("Disagree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Disagree</p>
                    <input
                      type="radio"
                      value={qn2}
                      name="qn2"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn2("Strongly Disagree")}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* qn3 */}
              <div className="mb-6">
                <div className="font-medium ">
                  3: I feel that I have a number of good qualities.
                </div>
                <div className="">
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Agree</p>
                    <input
                      type="radio"
                      value={qn3}
                      name="qn3"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn3("Strongly Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Agree</p>
                    <input
                      type="radio"
                      value={qn3}
                      name="qn3"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn3("Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Disagree</p>
                    <input
                      type="radio"
                      value={qn3}
                      name="qn3"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn3("Disagree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Disagree</p>
                    <input
                      type="radio"
                      value={qn3}
                      name="qn3"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn3("Strongly Disagree")}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* qn4 */}
              <div className="mb-6">
                <div className="font-medium ">
                  4: I am able to do things as well as most other people.
                </div>
                <div className="">
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Agree</p>
                    <input
                      type="radio"
                      value={qn4}
                      name="qn4"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn4("Strongly Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Agree</p>
                    <input
                      type="radio"
                      value={qn4}
                      name="qn4"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn4("Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Disagree</p>
                    <input
                      type="radio"
                      value={qn4}
                      name="qn4"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn4("Disagree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Disagree</p>
                    <input
                      type="radio"
                      value={qn4}
                      name="qn4"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn4("Strongly Disagree")}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* qn5 */}
              <div className="mb-6">
                <div className="font-medium ">
                  5: I feel I do not have much to be proud of
                </div>
                <div className="">
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Agree</p>
                    <input
                      type="radio"
                      value={qn5}
                      name="qn5"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn5("Strongly Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Agree</p>
                    <input
                      type="radio"
                      value={qn5}
                      name="qn5"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn5("Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Disagree</p>
                    <input
                      type="radio"
                      value={qn5}
                      name="qn5"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn5("Disagree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Disagree</p>
                    <input
                      type="radio"
                      value={qn5}
                      name="qn5"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn5("Strongly Disagree")}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* qn6 */}
              <div className="mb-6">
                <div className="font-medium ">
                  6: I certainly feel useless at times.
                </div>
                <div className="">
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Agree</p>
                    <input
                      type="radio"
                      value={qn6}
                      name="qn6"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn6("Strongly Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Agree</p>
                    <input
                      type="radio"
                      value={qn6}
                      name="qn6"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn6("Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Disagree</p>
                    <input
                      type="radio"
                      value={qn6}
                      name="qn6"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn6("Disagree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Disagree</p>
                    <input
                      type="radio"
                      value={qn6}
                      name="qn6"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn6("Strongly Disagree")}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* qn7 */}
              <div className="mb-6">
                <div className="font-medium ">
                  7: I feel that I'm a person of worth, at least on an equal
                  plane with others.
                </div>
                <div className="">
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Agree</p>
                    <input
                      type="radio"
                      value={qn7}
                      name="qn7"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn7("Strongly Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Agree</p>
                    <input
                      type="radio"
                      value={qn7}
                      name="qn7"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn7("Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Disagree</p>
                    <input
                      type="radio"
                      value={qn7}
                      name="qn7"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn7("Disagree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Disagree</p>
                    <input
                      type="radio"
                      value={qn7}
                      name="qn7"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn7("Strongly Disagree")}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* qn8 */}
              <div className="mb-6">
                <div className="font-medium ">
                  8: I wish I could have more respect for myself.
                </div>
                <div className="">
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Agree</p>
                    <input
                      type="radio"
                      value={qn8}
                      name="qn8"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn8("Strongly Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Agree</p>
                    <input
                      type="radio"
                      value={qn8}
                      name="qn8"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn8("Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Disagree</p>
                    <input
                      type="radio"
                      value={qn8}
                      name="qn8"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn8("Disagree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Disagree</p>
                    <input
                      type="radio"
                      value={qn8}
                      name="qn8"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn8("Strongly Disagree")}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* qn9 */}
              <div className="mb-6">
                <div className="font-medium ">
                  9: All in all, I am inclined to feel that I am a failure.
                </div>
                <div className="">
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Agree</p>
                    <input
                      type="radio"
                      value={qn9}
                      name="qn9"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn9("Strongly Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Agree</p>
                    <input
                      type="radio"
                      value={qn9}
                      name="qn9"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn9("Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Disagree</p>
                    <input
                      type="radio"
                      value={qn9}
                      name="qn9"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn9("Disagree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Disagree</p>
                    <input
                      type="radio"
                      value={qn9}
                      name="qn9"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn9("Strongly Disagree")}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* qn10 */}
              <div className="mb-6">
                <div className="font-medium ">
                  10: I take a positive attitude toward myself.
                </div>
                <div className="">
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Agree</p>
                    <input
                      type="radio"
                      value={qn10}
                      name="qn10"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn10("Strongly Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Agree</p>
                    <input
                      type="radio"
                      value={qn10}
                      name="qn10"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn10("Agree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Disagree</p>
                    <input
                      type="radio"
                      value={qn10}
                      name="qn10"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn10("Disagree")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Strongly Disagree</p>
                    <input
                      type="radio"
                      value={qn10}
                      name="qn10"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn10("Strongly Disagree")}
                      required
                    />
                  </div>
                </div>
              </div>

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
        <div className="my-20 opacity-50 sm:my-40">
          This instrument is designed for screening purposes only and is not to
          be used as a diagnostic tool.
        </div>
      </div>
    </div>
  );
};

export default LowSelfEsteem;
