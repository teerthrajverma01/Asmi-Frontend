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
              {/* qn1 */}
              <div className="mb-6">
                <div className="font-medium ">
                  1. In the past few weeks, have you wished you were dead?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qn1}
                    name="qn1"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn1(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qn1}
                    name="qn1"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn1(false)}
                  />
                </div>
              </div>
              {/* qn2 */}
              <div className="mb-6">
                <div className="font-medium ">
                  In the past few weeks, have you felt that you or your family
                  would be better off if you were dead?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qn2}
                    name="qn2"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn2(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qn2}
                    name="qn2"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn2(false)}
                  />
                </div>
              </div>
              {/* qn3 */}
              <div className="mb-6">
                <div className="font-medium ">
                  3. In the past week, have you been having thoughts about
                  killing yourself?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qn3}
                    name="qn3"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn3(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qn3}
                    name="qn3"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn3(false)}
                  />
                </div>
              </div>
              {/* qn4 */}
              <div className="mb-6">
                <div className="font-medium ">
                  4: Have you ever tried to kill yourself?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qn4}
                    name="qn4"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn4(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qn4}
                    name="qn4"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn4(false)}
                  />
                </div>
              </div>
              {/*  qnfourres1 and qnfourres2*/}
              {qn4 && (
                <>
                  <div>
                    <div>
                      <div>How?</div>
                      <textarea
                        className="mb-2"
                        value={qnfourres1}
                        onChange={(e) => setQnfourres1(e.target.value)}
                        rows="3"
                      ></textarea>
                    </div>
                    <div>
                      <div>When?</div>
                      <textarea
                        className="mb-6"
                        value={qnfourres2}
                        onChange={(e) => setQnfourres2(e.target.value)}
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </>
              )}
              {/* qn5*/}
              {(qn4 == true || qn4 == false) &&
                (qn1 == true || qn2 == true || qn3 == true || qn4 == true) && (
                  <div className="mb-6">
                    <div className="font-medium ">
                      5. Are you having thoughts of killing yourself right now?
                    </div>
                    <div className="">
                      <p className="inline-block text-xl ">Yes</p>
                      <input
                        type="radio"
                        value={qn5}
                        name="qn5"
                        className="inline-block w-4 h-4 mx-4"
                        onChange={(e) => setQn5(true)}
                      />
                      <p className="inline-block ml-8 text-xl">No</p>
                      <input
                        type="radio"
                        value={qn5}
                        name="qn5"
                        className="inline-block w-4 h-4 mx-4"
                        onChange={(e) => setQn5(false)}
                      />
                    </div>
                  </div>
                )}
              {/*  qnfiveres*/}
              {qn5 && (
                <>
                  <div>
                    <div>please describe:</div>
                    <textarea
                      className="mb-2"
                      value={qnfiveres}
                      onChange={(e) => setQnfiveres(e.target.value)}
                      rows="3"
                    ></textarea>
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

export default SucideRisk;
