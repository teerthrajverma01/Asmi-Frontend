import React, { useState } from "react";
import formheader from "../../assets/image/assessyourself/formheader.png";

import BASE_URL from "../../apis/Config";
import { useNavigate } from "react-router-dom";

const SleepDisturbance = ({ username, email }) => {
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
              <div className="mb-6">
                <div className="font-medium ">
                  Over the past month, have you had a major stressful event that
                  you feel affected your sleep? If so, please describe ...
                </div>
                <textarea
                  type="text"
                  value={qn0}
                  onChange={(e) => setQn0(e.target.value)}
                  className="block px-2 py-1 ml-4 border border-gray-300"
                />
              </div>

              {/* qn1  */}
              <div className="mb-6">
                <div className="font-medium ">
                  Did you have difficulty falling asleep, staying asleep, or
                  feeling poorly rested in the morning?
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
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Usually</p>
                    <input
                      type="radio"
                      value={qn1}
                      name="qn1"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn1("Usually")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Always</p>
                    <input
                      type="radio"
                      value={qn1}
                      name="qn1"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn1("Always")}
                    />
                  </div>
                </div>
              </div>
              {/* qn2  */}
              <div className="mb-6">
                <div className="font-medium ">
                  Did you fall asleep unintentionally or have to fight to stay
                  awake during the day?
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
                    <p className="inline ml-8 text-xl ">Usually</p>
                    <input
                      type="radio"
                      value={qn2}
                      name="qn2"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn2("Usually")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Always</p>
                    <input
                      type="radio"
                      value={qn2}
                      name="qn2"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQn2("Always")}
                    />
                  </div>
                </div>
              </div>
              {/* qn3 */}
              <div className="mb-6">
                <div className="font-medium">
                  Did sleep difficulties or daytime sleepiness interfere with
                  your daily activities?
                </div>
                <div className="">
                  <div>
                    <p className="inline ml-8 text-xl">Never</p>
                    <input
                      type="radio"
                      value={qn3}
                      name="qn3"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn3("Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Sometimes</p>
                    <input
                      type="radio"
                      value={qn3}
                      name="qn3"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn3("Sometimes")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Usually</p>
                    <input
                      type="radio"
                      value={qn3}
                      name="qn3"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn3("Usually")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Always</p>
                    <input
                      type="radio"
                      value={qn3}
                      name="qn3"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn3("Always")}
                    />
                  </div>
                </div>
              </div>
              {/* qn4 */}
              <div className="mb-6">
                <div className="font-medium">
                  Did work or other activities prevent you from getting enough
                  sleep?
                </div>
                <div className="">
                  <div>
                    <p className="inline ml-8 text-xl">Never</p>
                    <input
                      type="radio"
                      value={qn4}
                      name="qn4"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn4("Never")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Sometimes</p>
                    <input
                      type="radio"
                      value={qn4}
                      name="qn4"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn4("Sometimes")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Usually</p>
                    <input
                      type="radio"
                      value={qn4}
                      name="qn4"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn4("Usually")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Always</p>
                    <input
                      type="radio"
                      value={qn4}
                      name="qn4"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn4("Always")}
                    />
                  </div>
                </div>
              </div>
              {/* qn5 */}
              <div className="mb-6">
                <div className="font-medium">Did you snore loudly?</div>
                <div className="">
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
                    <p className="inline ml-8 text-xl">Usually</p>
                    <input
                      type="radio"
                      value={qn5}
                      name="qn5"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn5("Usually")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Always</p>
                    <input
                      type="radio"
                      value={qn5}
                      name="qn5"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn5("Always")}
                    />
                  </div>
                </div>
              </div>
              {/* qn6 */}
              <div className="mb-6">
                <div className="font-medium">
                  Did you hold your breath, have breathing pauses, or stop
                  breathing in your sleep?
                </div>
                <div className="">
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
                    <p className="inline ml-8 text-xl">Usually</p>
                    <input
                      type="radio"
                      value={qn6}
                      name="qn6"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn6("Usually")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Always</p>
                    <input
                      type="radio"
                      value={qn6}
                      name="qn6"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn6("Always")}
                    />
                  </div>
                </div>
              </div>
              {/* qn7 */}
              <div className="mb-6">
                <div className="font-medium">
                  Did you have restless or "crawling" feelings in your legs at
                  night that went away if you moved your legs?
                </div>
                <div className="">
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
                    <p className="inline ml-8 text-xl">Usually</p>
                    <input
                      type="radio"
                      value={qn7}
                      name="qn7"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn7("Usually")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Always</p>
                    <input
                      type="radio"
                      value={qn7}
                      name="qn7"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn7("Always")}
                    />
                  </div>
                </div>
              </div>

              {/* qn8 */}
              <div className="mb-6">
                <div className="font-medium">
                  Did you have repeated rhythmic leg jerks or leg twitches
                  during your sleep?
                </div>
                <div className="">
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
                    <p className="inline ml-8 text-xl">Usually</p>
                    <input
                      type="radio"
                      value={qn8}
                      name="qn8"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn8("Usually")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Always</p>
                    <input
                      type="radio"
                      value={qn8}
                      name="qn8"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn8("Always")}
                    />
                  </div>
                </div>
              </div>

              {/* qn9 */}
              <div className="mb-6">
                <div className="font-medium">
                  Did you have nightmares, or did you scream, walk, punch, or
                  kick in your sleep?
                </div>
                <div className="">
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
                    <p className="inline ml-8 text-xl">Usually</p>
                    <input
                      type="radio"
                      value={qn9}
                      name="qn9"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn9("Usually")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Always</p>
                    <input
                      type="radio"
                      value={qn9}
                      name="qn9"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn9("Always")}
                    />
                  </div>
                </div>
              </div>

              {/* qn10 */}
              <div className="mb-6">
                <div className="font-medium">Did you feel sad or anxious?</div>
                <div className="">
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
                    <p className="inline ml-8 text-xl">Usually</p>
                    <input
                      type="radio"
                      value={qn10}
                      name="qn10"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn10("Usually")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Always</p>
                    <input
                      type="radio"
                      value={qn10}
                      name="qn10"
                      className="w-4 h-4 mx-4"
                      onChange={(e) => setQn10("Always")}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="font-medium">
                  Did the following things disturb your sleep:
                </div>
                <div className="">
                  <div>
                    <p className="inline ml-8 text-xl">Pain</p>
                    <div className="inline">
                      <input
                        type="radio"
                        value="Never"
                        checked={qnelevensubqn1 === "Never"}
                        onChange={(e) => setQnelevensubqn1(e.target.value)}
                        className="mr-2"
                      />
                      <label className="mr-4">Never</label>
                      <input
                        type="radio"
                        value="Sometimes"
                        checked={qnelevensubqn1 === "Sometimes"}
                        onChange={(e) => setQnelevensubqn1(e.target.value)}
                        className="mr-2"
                      />
                      <label className="mr-4">Sometimes</label>
                      <input
                        type="radio"
                        value="Usually"
                        checked={qnelevensubqn1 === "Usually"}
                        onChange={(e) => setQnelevensubqn1(e.target.value)}
                        className="mr-2"
                      />
                      <label className="mr-4">Usually</label>
                      <input
                        type="radio"
                        value="Always"
                        checked={qnelevensubqn1 === "Always"}
                        onChange={(e) => setQnelevensubqn1(e.target.value)}
                        className="mr-2"
                      />
                      <label>Always</label>
                    </div>
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">
                      Other physical problems
                    </p>
                    <div className="inline">
                      <input
                        type="radio"
                        value="Never"
                        checked={qnelevensubqn2 === "Never"}
                        onChange={(e) => setQnelevensubqn2(e.target.value)}
                        className="mr-2"
                      />
                      <label className="mr-4">Never</label>
                      <input
                        type="radio"
                        value="Sometimes"
                        checked={qnelevensubqn2 === "Sometimes"}
                        onChange={(e) => setQnelevensubqn2(e.target.value)}
                        className="mr-2"
                      />
                      <label className="mr-4">Sometimes</label>
                      <input
                        type="radio"
                        value="Usually"
                        checked={qnelevensubqn2 === "Usually"}
                        onChange={(e) => setQnelevensubqn2(e.target.value)}
                        className="mr-2"
                      />
                      <label className="mr-4">Usually</label>
                      <input
                        type="radio"
                        value="Always"
                        checked={qnelevensubqn2 === "Always"}
                        onChange={(e) => setQnelevensubqn2(e.target.value)}
                        className="mr-2"
                      />
                      <label>Always</label>
                    </div>
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Worries</p>
                    <div className="inline">
                      <input
                        type="radio"
                        value="Never"
                        checked={qnelevensubqn3 === "Never"}
                        onChange={(e) => setQnelevensubqn3(e.target.value)}
                        className="mr-2"
                      />
                      <label className="mr-4">Never</label>
                      <input
                        type="radio"
                        value="Sometimes"
                        checked={qnelevensubqn3 === "Sometimes"}
                        onChange={(e) => setQnelevensubqn3(e.target.value)}
                        className="mr-2"
                      />
                      <label className="mr-4">Sometimes</label>
                      <input
                        type="radio"
                        value="Usually"
                        checked={qnelevensubqn3 === "Usually"}
                        onChange={(e) => setQnelevensubqn3(e.target.value)}
                        className="mr-2"
                        required
                      />
                      <label className="mr-4">Usually</label>
                      <input
                        type="radio"
                        value="Always"
                        checked={qnelevensubqn3 === "Always"}
                        onChange={(e) => setQnelevensubqn3(e.target.value)}
                        className="mr-2"
                      />
                      <label>Always</label>
                    </div>
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Medications</p>
                    <div className="inline">
                      <input
                        type="radio"
                        value="Never"
                        checked={qnelevensubqn4 === "Never"}
                        onChange={(e) => setQnelevensubqn4(e.target.value)}
                        className="mr-2"
                      />
                      <label className="mr-4">Never</label>
                      <input
                        type="radio"
                        value="Sometimes"
                        checked={qnelevensubqn4 === "Sometimes"}
                        onChange={(e) => setQnelevensubqn4(e.target.value)}
                        className="mr-2"
                      />
                      <label className="mr-4">Sometimes</label>
                      <input
                        type="radio"
                        value="Usually"
                        checked={qnelevensubqn4 === "Usually"}
                        onChange={(e) => setQnelevensubqn4(e.target.value)}
                        className="mr-2"
                        required
                      />
                      <label className="mr-4">Usually</label>
                      <input
                        type="radio"
                        value="Always"
                        checked={qnelevensubqn4 === "Always"}
                        onChange={(e) => setQnelevensubqn4(e.target.value)}
                        className="mr-2"
                      />
                      <label>Always</label>
                    </div>
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Other</p>
                    <textarea
                      type="text"
                      value={qnelevensubqn5}
                      onChange={(e) => setQnelevensubqn5(e.target.value)}
                      className="px-2 py-1 ml-4 border border-gray-300"
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

export default SleepDisturbance;
