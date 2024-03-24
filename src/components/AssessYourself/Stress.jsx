import React, { useState } from "react";
import formheader from "../../assets/image/assessyourself/formheader.png";

import BASE_URL from "../../apis/Config";
import { useNavigate } from "react-router-dom";

const Stress = ({ username, email }) => {
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

              {/* qn1  */}
              <div className="mb-6">
                <div className="font-medium ">
                  1. In the last month, how often have you been upset because of
                  something that happened unexpectedly?
                </div>
                <div className="">
                  <div>
                    <p className="inline ml-8 text-xl ">Never</p>
                    <input
                      type="radio"
                      value={qn1}
                      name="qn1"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn1("Never")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Almost Never</p>
                    <input
                      type="radio"
                      value={qn1}
                      name="qn1"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn1("Almost Never")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Sometimes</p>
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
                    <p className="inline ml-8 text-xl ">Fairly Often</p>
                    <input
                      type="radio"
                      value={qn1}
                      name="qn1"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn1("Fairly Often")}
                      required
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Very Often</p>
                    <input
                      type="radio"
                      value={qn1}
                      name="qn1"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn1("Very Often")}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* qn2 */}
              <div className="mb-6">
                <div className="font-medium ">
                  2. In the last month, how often have you felt that you were
                  unable to control the important things in your life?
                </div>
                <div className="">
                  <div>
                    <p className="inline ml-8 text-xl ">Never</p>
                    <input
                      type="radio"
                      value={qn2}
                      name="qn2"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn2("Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Almost Never</p>
                    <input
                      type="radio"
                      value={qn2}
                      name="qn2"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn2("Almost Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Sometimes</p>
                    <input
                      type="radio"
                      value={qn2}
                      name="qn2"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn2("Sometimes")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Fairly Often</p>
                    <input
                      type="radio"
                      value={qn2}
                      name="qn2"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn2("Fairly Often")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Very Often</p>
                    <input
                      type="radio"
                      value={qn2}
                      name="qn2"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn2("Very Often")}
                    />
                  </div>
                </div>
              </div>

              {/* qn3 */}
              <div className="mb-6">
                <div className="font-medium ">
                  3. In the last month, how often have you felt nervous and
                  stressed?
                </div>
                <div className="">
                  <div>
                    <p className="inline ml-8 text-xl ">Never</p>
                    <input
                      type="radio"
                      value={qn3}
                      name="qn3"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn3("Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Almost Never</p>
                    <input
                      type="radio"
                      value={qn3}
                      name="qn3"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn3("Almost Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Sometimes</p>
                    <input
                      type="radio"
                      value={qn3}
                      name="qn3"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn3("Sometimes")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Fairly Often</p>
                    <input
                      type="radio"
                      value={qn3}
                      name="qn3"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn3("Fairly Often")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Very Often</p>
                    <input
                      type="radio"
                      value={qn3}
                      name="qn3"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn3("Very Often")}
                    />
                  </div>
                </div>
              </div>

              {/* qn4 */}
              <div className="mb-6">
                <div className="font-medium ">
                  4. In the last month, how often have you felt confident about
                  your ability to handle your personal problems?
                </div>
                <div className="">
                  <div>
                    <p className="inline ml-8 text-xl ">Never</p>
                    <input
                      type="radio"
                      value={qn4}
                      name="qn4"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn4("Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Almost Never</p>
                    <input
                      type="radio"
                      value={qn4}
                      name="qn4"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn4("Almost Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Sometimes</p>
                    <input
                      type="radio"
                      value={qn4}
                      name="qn4"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn4("Sometimes")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Fairly Often</p>
                    <input
                      type="radio"
                      value={qn4}
                      name="qn4"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn4("Fairly Often")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Very Often</p>
                    <input
                      type="radio"
                      value={qn4}
                      name="qn4"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn4("Very Often")}
                    />
                  </div>
                </div>
              </div>
              {/* qn5 */}
              <div className="mb-6">
                <div className="font-medium">
                  5. In the last month, how often have you felt that things were
                  going your way?
                </div>
                <div>
                  <div>
                    <p className="inline ml-8 text-xl">Never</p>
                    <input
                      type="radio"
                      value={qn5}
                      name="qn5"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn5("Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Almost Never</p>
                    <input
                      type="radio"
                      value={qn5}
                      name="qn5"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn5("Almost Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Sometimes</p>
                    <input
                      type="radio"
                      value={qn5}
                      name="qn5"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn5("Sometimes")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Fairly Often</p>
                    <input
                      type="radio"
                      value={qn5}
                      name="qn5"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn5("Fairly Often")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Very Often</p>
                    <input
                      type="radio"
                      value={qn5}
                      name="qn5"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn5("Very Often")}
                    />
                  </div>
                </div>
              </div>
              {/* qn6 */}
              <div className="mb-6">
                <div className="font-medium">
                  6. In the last month, how often have you found that you could
                  not cope with all the things that you had to do?
                </div>
                <div>
                  <div>
                    <p className="inline ml-8 text-xl">Never</p>
                    <input
                      type="radio"
                      value={qn6}
                      name="qn6"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn6("Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Almost Never</p>
                    <input
                      type="radio"
                      value={qn6}
                      name="qn6"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn6("Almost Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Sometimes</p>
                    <input
                      type="radio"
                      value={qn6}
                      name="qn6"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn6("Sometimes")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Fairly Often</p>
                    <input
                      type="radio"
                      value={qn6}
                      name="qn6"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn6("Fairly Often")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Very Often</p>
                    <input
                      type="radio"
                      value={qn6}
                      name="qn6"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn6("Very Often")}
                    />
                  </div>
                </div>
              </div>

              {/* qn7 */}
              <div className="mb-6">
                <div className="font-medium">
                  7. In the last month, how often have you been able to control
                  irritations in your life?
                </div>
                <div>
                  <div>
                    <p className="inline ml-8 text-xl">Never</p>
                    <input
                      type="radio"
                      value={qn7}
                      name="qn7"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn7("Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Almost Never</p>
                    <input
                      type="radio"
                      value={qn7}
                      name="qn7"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn7("Almost Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Sometimes</p>
                    <input
                      type="radio"
                      value={qn7}
                      name="qn7"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn7("Sometimes")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Fairly Often</p>
                    <input
                      type="radio"
                      value={qn7}
                      name="qn7"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn7("Fairly Often")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Very Often</p>
                    <input
                      type="radio"
                      value={qn7}
                      name="qn7"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn7("Very Often")}
                    />
                  </div>
                </div>
              </div>
              {/* qn8 */}
              <div className="mb-6">
                <div className="font-medium">
                  8. In the last month, how often have you felt that you were on
                  top of things?
                </div>
                <div>
                  <div>
                    <p className="inline ml-8 text-xl">Never</p>
                    <input
                      type="radio"
                      value={qn8}
                      name="qn8"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn8("Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Almost Never</p>
                    <input
                      type="radio"
                      value={qn8}
                      name="qn8"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn8("Almost Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Sometimes</p>
                    <input
                      type="radio"
                      value={qn8}
                      name="qn8"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn8("Sometimes")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Fairly Often</p>
                    <input
                      type="radio"
                      value={qn8}
                      name="qn8"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn8("Fairly Often")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Very Often</p>
                    <input
                      type="radio"
                      value={qn8}
                      name="qn8"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn8("Very Often")}
                    />
                  </div>
                </div>
              </div>
              {/* qn9 */}
              <div className="mb-6">
                <div className="font-medium">
                  9. In the last month, how often have you been angered because
                  of things that happened that were outside of your control?
                </div>
                <div>
                  <div>
                    <p className="inline ml-8 text-xl">Never</p>
                    <input
                      type="radio"
                      value={qn9}
                      name="qn9"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn9("Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Almost Never</p>
                    <input
                      type="radio"
                      value={qn9}
                      name="qn9"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn9("Almost Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Sometimes</p>
                    <input
                      type="radio"
                      value={qn9}
                      name="qn9"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn9("Sometimes")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Fairly Often</p>
                    <input
                      type="radio"
                      value={qn9}
                      name="qn9"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn9("Fairly Often")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Very Often</p>
                    <input
                      type="radio"
                      value={qn9}
                      name="qn9"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn9("Very Often")}
                    />
                  </div>
                </div>
              </div>
              {/* qn10 */}
              <div className="mb-6">
                <div className="font-medium">
                  10. In the last month, how often have you felt difficulties
                  were piling up so high that you could not overcome them?
                </div>
                <div>
                  <div>
                    <p className="inline ml-8 text-xl">Never</p>
                    <input
                      type="radio"
                      value={qn10}
                      name="qn10"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn10("Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Almost Never</p>
                    <input
                      type="radio"
                      value={qn10}
                      name="qn10"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn10("Almost Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Sometimes</p>
                    <input
                      type="radio"
                      value={qn10}
                      name="qn10"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn10("Sometimes")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Fairly Often</p>
                    <input
                      type="radio"
                      value={qn10}
                      name="qn10"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn10("Fairly Often")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Very Often</p>
                    <input
                      type="radio"
                      value={qn10}
                      name="qn10"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn10("Very Often")}
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

export default Stress;
