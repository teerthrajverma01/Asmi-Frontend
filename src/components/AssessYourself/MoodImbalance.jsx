import React, { useState } from "react";
import formheader from "../../assets/image/assessyourself/formheader.png";

import BASE_URL from "../../apis/Config";
import { useNavigate, useParams } from "react-router-dom";

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
              {/* qnonesubqn1 */}
              <div className="mb-6">
                <div className="font-medium ">
                  1: Has there ever been a period of time when you were not your
                  usual self and ...
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qnonesubqn1}
                    name="qnonesubqn1"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn1(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qnonesubqn1}
                    name="qnonesubqn1"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn1(false)}
                  />
                </div>
              </div>
              {/*qnonesubqn2  */}
              <div className="mb-6">
                <div className="font-medium ">
                  ... you felt so good or so hyper that other people thought you
                  were not your normal self or you were so hyper that you got
                  into trouble?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qnonesubqn2}
                    name="qnonesubqn2"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn2(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qnonesubqn2}
                    name="qnonesubqn2"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn2(false)}
                  />
                </div>
              </div>
              {/*qnonesubqn3  */}
              <div className="mb-6">
                <div className="font-medium ">
                  ... you were so irritable that you shouted at people or
                  started fights or arguments?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qnonesubqn3}
                    name="qnonesubqn3"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn3(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qnonesubqn3}
                    name="qnonesubqn3"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn3(false)}
                  />
                </div>
              </div>
              {/*qnonesubqn4  */}
              <div className="mb-6">
                <div className="font-medium ">
                  ... you felt much more self-confident than usual?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qnonesubqn4}
                    name="qnonesubqn4"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn4(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qnonesubqn4}
                    name="qnonesubqn4"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn4(false)}
                  />
                </div>
              </div>
              {/*qnonesubqn5  */}
              <div className="mb-6">
                <div className="font-medium ">
                  ... you got much less sleep than usual and found you didn't
                  really miss it?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qnonesubqn5}
                    name="qnonesubqn5"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn5(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qnonesubqn5}
                    name="qnonesubqn5"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn5(false)}
                  />
                </div>
              </div>
              {/*qnonesubqn6  */}
              <div className="mb-6">
                <div className="font-medium ">
                  ... you were much more talkative or spoke faster than usual?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qnonesubqn6}
                    name="qnonesubqn6"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn6(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qnonesubqn6}
                    name="qnonesubqn6"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn6(false)}
                  />
                </div>
              </div>
              {/*qnonesubqn7  */}
              <div className="mb-6">
                <div className="font-medium ">
                  ... thoughts raced through your head or you couldn't slow your
                  mind down?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qnonesubqn7}
                    name="qnonesubqn7"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn7(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qnonesubqn7}
                    name="qnonesubqn7"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn7(false)}
                  />
                </div>
              </div>
              {/*qnonesubqn8  */}
              <div className="mb-6">
                <div className="font-medium ">
                  ... you were so easily distracted by things around you that
                  you had trouble concentrating or staying on track?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qnonesubqn8}
                    name="qnonesubqn8"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn8(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qnonesubqn8}
                    name="qnonesubqn8"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn8(false)}
                  />
                </div>
              </div>
              {/*qnonesubqn9  */}
              <div className="mb-6">
                <div className="font-medium ">
                  ... you had much more energy than usual?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qnonesubqn9}
                    name="qnonesubqn9"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn9(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qnonesubqn9}
                    name="qnonesubqn9"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn9(false)}
                  />
                </div>
              </div>
              {/*qnonesubqn10  */}
              <div className="mb-6">
                <div className="font-medium ">
                  ... you were much more active or did many more things than
                  usual?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qnonesubqn10}
                    name="qnonesubqn10"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn10(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qnonesubqn10}
                    name="qnonesubqn10"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn10(false)}
                  />
                </div>
              </div>
              {/*qnonesubqn11  */}
              <div className="mb-6">
                <div className="font-medium ">
                  ... you were much more social or outgoing than usual, for
                  example, you telephoned friends in the middle of the night?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qnonesubqn11}
                    name="qnonesubqn11"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn11(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qnonesubqn11}
                    name="qnonesubqn11"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn11(false)}
                  />
                </div>
              </div>
              {/*qnonesubqn12  */}
              <div className="mb-6">
                <div className="font-medium ">
                  ... you were much more interested in sex than usual?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qnonesubqn12}
                    name="qnonesubqn12"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn12(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qnonesubqn12}
                    name="qnonesubqn12"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn12(false)}
                  />
                </div>
              </div>
              {/*qnonesubqn13  */}
              <div className="mb-6">
                <div className="font-medium ">
                  ... you did things that were unusual for you or that other
                  people might have thought were excessive, foolish, or risky?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qnonesubqn13}
                    name="qnonesubqn13"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn13(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qnonesubqn13}
                    name="qnonesubqn13"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn13(false)}
                  />
                </div>
              </div>
              {/*qnonesubqn14  */}
              <div className="mb-6">
                <div className="font-medium ">
                  ... spending money got you or your family in trouble?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qnonesubqn14}
                    name="qnonesubqn14"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn14(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qnonesubqn14}
                    name="qnonesubqn14"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnonesubqn14(false)}
                  />
                </div>
              </div>

              {/*qntwo  */}
              <div className="mb-6">
                <div className="font-medium ">
                  2: If you checked YES to more than one of the above, have
                  several of these ever happened during the same period of time?
                  Please check 1 response only.
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qntwo}
                    name="qntwo"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQntwo(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qntwo}
                    name="qntwo"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQntwo(false)}
                  />
                </div>
              </div>
              {/*qnthree  */}
              <div className="mb-6">
                <div className="font-medium ">
                  3: How much of a problem did any of these cause you — like
                  being able to work; having family, money, or legal troubles;
                  getting into arguments or fights?
                </div>
                <div className="">
                  <div>
                    <p className="inline ml-8 text-xl ">No problem</p>
                    <input
                      type="radio"
                      value={qnthree}
                      name="qnthreechoice"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQnthree("NO")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Minor problem</p>
                    <input
                      type="radio"
                      value={qnthree}
                      name="qnthreechoice"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQnthree("MINOR")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl ">Moderate problem</p>
                    <input
                      type="radio"
                      value={qnthree}
                      name="qnthreechoice"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQnthree("MODERATE")}
                    />
                  </div>
                  <div>
                    <p className="inline ml-8 text-xl">Serious problem</p>
                    <input
                      type="radio"
                      value={qnthree}
                      name="qnthreechoice"
                      className="w-4 h-4 mx-4 "
                      onChange={(e) => setQnthree("SERIOUS")}
                    />
                  </div>
                </div>
              </div>
              {/*qnfour  */}
              <div className="mb-6">
                <div className="font-medium ">
                  4: Have any of your blood relatives (ie, children, siblings,
                  parents, grandparents, aunts, uncles) had manic-depressive
                  illness or bipolar disorder?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qnfour}
                    name="qnfour"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnfour(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qnfour}
                    name="qnfour"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnfour(false)}
                  />
                </div>
              </div>
              {/*qnfive  */}
              <div className="mb-6">
                <div className="font-medium ">
                  5: Has a health professional ever told you that you have
                  manic-depressive illness or bipolar disorder?
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Yes</p>
                  <input
                    type="radio"
                    value={qnfive}
                    name="qnfive"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnfive(true)}
                  />
                  <p className="inline-block ml-8 text-xl">No</p>
                  <input
                    type="radio"
                    value={qnfive}
                    name="qnfive"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQnfive(false)}
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
          This instrument is designed for screening purposes only and is not to
          be used as a diagnostic tool.
        </div>
      </div>
    </div>
  );
};

export default MoodImbalance;
