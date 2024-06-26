import React, { useState } from "react";
import formheader from "../../assets/image/assessyourself/formheader.png";

import BASE_URL from "../../apis/Config";
import { useNavigate } from "react-router-dom";

const Das = ({ username, email }) => {
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
  const [qn11, setQn11] = useState();
  const [qn12, setQn12] = useState();
  const [qn13, setQn13] = useState();
  const [qn14, setQn14] = useState();
  const [qn15, setQn15] = useState();
  const [qn16, setQn16] = useState();
  const [qn17, setQn17] = useState();
  const [qn18, setQn18] = useState();
  const [qn19, setQn19] = useState();
  const [qn20, setQn20] = useState();
  const [qn21, setQn21] = useState();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);

    fetch(`${BASE_URL}/assessyourself/das/postformdata`, {
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
        qn11,
        qn12,
        qn13,
        qn14,
        qn15,
        qn16,
        qn17,
        qn18,
        qn19,
        qn20,
        qn21,
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
            Questionnaire for Depression, Anxiety & Stress
          </div>
          {/* form */}
          <div className="mx-3 my-12 text-xl sm:mx-12 ">
            <form className="" onSubmit={submitHandler}>
              <div className="mb-12">
                <div className="font-medium">
                  Please read each statement and circle a number 0, 1, 2 or 3
                  which indicates how much the statement applied to you over the
                  past week. There are no right or wrong answers. Do not spend
                  too much time on any statement
                </div>
                <div className="font-medium">
                  The rating scale is as follows:
                  <p>0 Did not apply to me at all</p>
                  <p>1 Applied to me to some degree, or some of the time</p>
                  <p>
                    2 Applied to me to a considerable degree or a good part of
                    time
                  </p>
                  <p>3 Applied to me very much or most of the time</p>
                </div>
              </div>
              {/* Question 1 */}
              <div className="mb-6">
                <div className="font-medium ">
                  1: I found it hard to wind down
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Option 0 </p>
                  <input
                    type="radio"
                    value={qn1}
                    name="qn1"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn1(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn1}
                    name="qn1"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn1(1)}
                  />
                  <p className="inline-block text-xl ">Option 2</p>
                  <input
                    type="radio"
                    value={qn1}
                    name="qn1"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn1(2)}
                  />
                  <p className="inline-block text-xl ">Option3 </p>
                  <input
                    type="radio"
                    value={qn1}
                    name="qn1"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn1(3)}
                  />
                </div>
              </div>
              {/* Question 2 */}
              <div className="mb-6">
                <div className="font-medium ">
                  2: I was aware of dryness of my mouth
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Option 0 </p>
                  <input
                    type="radio"
                    value={qn2}
                    name="qn2"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn2(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn2}
                    name="qn2"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn2(1)}
                  />
                  <p className="inline-block text-xl ">Option 2</p>
                  <input
                    type="radio"
                    value={qn2}
                    name="qn2"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn2(2)}
                  />
                  <p className="inline-block text-xl ">Option 3</p>
                  <input
                    type="radio"
                    value={qn2}
                    name="qn2"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn2(3)}
                  />
                </div>
              </div>

              {/* Question 3 */}
              <div className="mb-6">
                <div className="font-medium ">
                  3: I couldn’t seem to experience any positive feeling at all
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Option 0 </p>
                  <input
                    type="radio"
                    value={qn3}
                    name="qn3"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn3(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn3}
                    name="qn3"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn3(1)}
                  />
                  <p className="inline-block text-xl ">Option 2</p>
                  <input
                    type="radio"
                    value={qn3}
                    name="qn3"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn3(2)}
                  />
                  <p className="inline-block text-xl ">Option 3</p>
                  <input
                    type="radio"
                    value={qn3}
                    name="qn3"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn3(3)}
                  />
                </div>
              </div>

              {/* Question 4 */}
              <div className="mb-6">
                <div className="font-medium ">
                  4: I experienced breathing difficulty (e.g. excessively rapid
                  breathing, breathlessness in the absence of physical exertion)
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Option 0 </p>
                  <input
                    type="radio"
                    value={qn4}
                    name="qn4"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn4(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn4}
                    name="qn4"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn4(1)}
                  />
                  <p className="inline-block text-xl ">Option 2</p>
                  <input
                    type="radio"
                    value={qn4}
                    name="qn4"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn4(2)}
                  />
                  <p className="inline-block text-xl ">Option 3</p>
                  <input
                    type="radio"
                    value={qn4}
                    name="qn4"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn4(3)}
                  />
                </div>
              </div>
              {/* Question 5 */}
              <div className="mb-6">
                <div className="font-medium">
                  5: I found it difficult to work up the initiative to do things
                </div>
                <div className="">
                  <p className="inline-block text-xl">Option 0</p>
                  <input
                    type="radio"
                    value={qn5}
                    name="qn5"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn5(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn5}
                    name="qn5"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn5(1)}
                  />
                  <p className="inline-block text-xl">Option 2</p>
                  <input
                    type="radio"
                    value={qn5}
                    name="qn5"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn5(2)}
                  />
                  <p className="inline-block text-xl">Option 3</p>
                  <input
                    type="radio"
                    value={qn5}
                    name="qn5"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn5(3)}
                  />
                </div>
              </div>
              {/* Question 6 */}
              <div className="mb-6">
                <div className="font-medium">
                  6: I tended to over-react to situations
                </div>
                <div className="">
                  <p className="inline-block text-xl">Option 0</p>
                  <input
                    type="radio"
                    value={qn6}
                    name="qn6"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn6(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn6}
                    name="qn6"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn6(1)}
                  />
                  <p className="inline-block text-xl">Option 2</p>
                  <input
                    type="radio"
                    value={qn6}
                    name="qn6"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn6(2)}
                  />
                  <p className="inline-block text-xl">Option 3</p>
                  <input
                    type="radio"
                    value={qn6}
                    name="qn6"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn6(3)}
                  />
                </div>
              </div>
              {/* Question 7 */}
              <div className="mb-6">
                <div className="font-medium">
                  7: I experienced trembling (e.g. in the hands)
                </div>
                <div className="">
                  <p className="inline-block text-xl">Option 0</p>
                  <input
                    type="radio"
                    value={qn7}
                    name="qn7"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn7(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn7}
                    name="qn7"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn7(1)}
                  />
                  <p className="inline-block text-xl">Option 2</p>
                  <input
                    type="radio"
                    value={qn7}
                    name="qn7"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn7(2)}
                  />
                  <p className="inline-block text-xl">Option 3</p>
                  <input
                    type="radio"
                    value={qn7}
                    name="qn7"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn7(3)}
                  />
                </div>
              </div>
              {/* Question 8 */}
              <div className="mb-6">
                <div className="font-medium ">
                  8: I felt that I was using a lot of nervous energy
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Option 0</p>
                  <input
                    type="radio"
                    value={qn8}
                    name="qn8"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn8(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn8}
                    name="qn8"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn8(1)}
                  />
                  <p className="inline-block text-xl ">Option 2</p>
                  <input
                    type="radio"
                    value={qn8}
                    name="qn8"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn8(2)}
                  />
                  <p className="inline-block text-xl ">Option 3</p>
                  <input
                    type="radio"
                    value={qn8}
                    name="qn8"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn8(3)}
                  />
                </div>
              </div>
              {/* Question 9 */}
              <div className="mb-6">
                <div className="font-medium ">
                  9: I was worried about situations in which I might panic and
                  make a fool of myself
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Option 0</p>
                  <input
                    type="radio"
                    value={qn9}
                    name="qn9"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn9(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn9}
                    name="qn9"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn9(1)}
                  />
                  <p className="inline-block text-xl ">Option 2</p>
                  <input
                    type="radio"
                    value={qn9}
                    name="qn9"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn9(2)}
                  />
                  <p className="inline-block text-xl ">Option 3</p>
                  <input
                    type="radio"
                    value={qn9}
                    name="qn9"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn9(3)}
                  />
                </div>
              </div>
              {/* Question 10 */}
              <div className="mb-6">
                <div className="font-medium ">
                  10: I felt that I had nothing to look forward to
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Option 0</p>
                  <input
                    type="radio"
                    value={qn10}
                    name="qn10"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn10(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn10}
                    name="qn10"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn10(1)}
                  />
                  <p className="inline-block text-xl ">Option 2</p>
                  <input
                    type="radio"
                    value={qn10}
                    name="qn10"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn10(2)}
                  />
                  <p className="inline-block text-xl ">Option 3</p>
                  <input
                    type="radio"
                    value={qn10}
                    name="qn10"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn10(3)}
                  />
                </div>
              </div>
              {/* Question 11 */}
              <div className="mb-6">
                <div className="font-medium ">
                  11: I found myself getting agitated
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Option 0</p>
                  <input
                    type="radio"
                    value={qn11}
                    name="qn11"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn11(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn11}
                    name="qn11"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn11(1)}
                  />
                  <p className="inline-block text-xl ">Option 2</p>
                  <input
                    type="radio"
                    value={qn11}
                    name="qn11"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn11(2)}
                  />
                  <p className="inline-block text-xl ">Option 3</p>
                  <input
                    type="radio"
                    value={qn11}
                    name="qn11"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn11(3)}
                  />
                </div>
              </div>
              {/* Question 12 */}
              <div className="mb-6">
                <div className="font-medium ">
                  12: I found it difficult to relax
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Option 0</p>
                  <input
                    type="radio"
                    value={qn12}
                    name="qn12"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn12(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn12}
                    name="qn12"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn12(1)}
                  />
                  <p className="inline-block text-xl ">Option 2</p>
                  <input
                    type="radio"
                    value={qn12}
                    name="qn12"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn12(2)}
                  />
                  <p className="inline-block text-xl ">Option 3</p>
                  <input
                    type="radio"
                    value={qn12}
                    name="qn12"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn12(3)}
                  />
                </div>
              </div>
              {/* Question 13 */}
              <div className="mb-6">
                <div className="font-medium ">
                  13: I felt down-hearted and blue
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Option 0</p>
                  <input
                    type="radio"
                    value={qn13}
                    name="qn13"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn13(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn13}
                    name="qn13"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn13(1)}
                  />
                  <p className="inline-block text-xl ">Option 2</p>
                  <input
                    type="radio"
                    value={qn13}
                    name="qn13"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn13(2)}
                  />
                  <p className="inline-block text-xl ">Option 3</p>
                  <input
                    type="radio"
                    value={qn13}
                    name="qn13"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn13(3)}
                  />
                </div>
              </div>
              {/* Question 14 */}
              <div className="mb-6">
                <div className="font-medium ">
                  14: I was intolerant of anything that kept me from getting on
                  with what I was doing
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Option 0</p>
                  <input
                    type="radio"
                    value={qn14}
                    name="qn14"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn14(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn14}
                    name="qn14"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn14(1)}
                  />
                  <p className="inline-block text-xl ">Option 2</p>
                  <input
                    type="radio"
                    value={qn14}
                    name="qn14"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn14(2)}
                  />
                  <p className="inline-block text-xl ">Option 3</p>
                  <input
                    type="radio"
                    value={qn14}
                    name="qn14"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn14(3)}
                  />
                </div>
              </div>
              {/* Question 15 */}
              <div className="mb-6">
                <div className="font-medium ">
                  15: I felt I was close to panic
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Option 0</p>
                  <input
                    type="radio"
                    value={qn15}
                    name="qn15"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn15(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn15}
                    name="qn15"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn15(1)}
                  />
                  <p className="inline-block text-xl ">Option 2</p>
                  <input
                    type="radio"
                    value={qn15}
                    name="qn15"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn15(2)}
                  />
                  <p className="inline-block text-xl ">Option 3</p>
                  <input
                    type="radio"
                    value={qn15}
                    name="qn15"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn15(3)}
                  />
                </div>
              </div>
              {/* Question 16 */}
              <div className="mb-6">
                <div className="font-medium ">
                  16: I was unable to become enthusiastic about anything
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Option 0</p>
                  <input
                    type="radio"
                    value={qn16}
                    name="qn16"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn16(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn16}
                    name="qn16"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn16(1)}
                  />
                  <p className="inline-block text-xl ">Option 2</p>
                  <input
                    type="radio"
                    value={qn16}
                    name="qn16"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn16(2)}
                  />
                  <p className="inline-block text-xl ">Option 3</p>
                  <input
                    type="radio"
                    value={qn16}
                    name="qn16"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn16(3)}
                  />
                </div>
              </div>
              {/* Question 17 */}
              <div className="mb-6">
                <div className="font-medium ">
                  17: I felt I wasn’t worth much as a person
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Option 0</p>
                  <input
                    type="radio"
                    value={qn17}
                    name="qn17"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn17(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn17}
                    name="qn17"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn17(1)}
                  />
                  <p className="inline-block text-xl ">Option 2</p>
                  <input
                    type="radio"
                    value={qn17}
                    name="qn17"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn17(2)}
                  />
                  <p className="inline-block text-xl ">Option 3</p>
                  <input
                    type="radio"
                    value={qn17}
                    name="qn17"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn17(3)}
                  />
                </div>
              </div>
              {/* Question 18 */}
              <div className="mb-6">
                <div className="font-medium ">
                  18: I felt that I was rather touchy
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Option 0</p>
                  <input
                    type="radio"
                    value={qn18}
                    name="qn18"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn18(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn18}
                    name="qn18"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn18(1)}
                  />
                  <p className="inline-block text-xl ">Option 2</p>
                  <input
                    type="radio"
                    value={qn18}
                    name="qn18"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn18(2)}
                  />
                  <p className="inline-block text-xl ">Option 3</p>
                  <input
                    type="radio"
                    value={qn18}
                    name="qn18"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn18(3)}
                  />
                </div>
              </div>
              {/* Question 19 */}
              <div className="mb-6">
                <div className="font-medium ">
                  19: I was aware of the action of my heart in the absence of
                  physical exertion (e.g. sense of heart rate increase, heart
                  missing a beat)
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Option 0</p>
                  <input
                    type="radio"
                    value={qn19}
                    name="qn19"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn19(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn19}
                    name="qn19"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn19(1)}
                  />
                  <p className="inline-block text-xl ">Option 2</p>
                  <input
                    type="radio"
                    value={qn19}
                    name="qn19"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn19(2)}
                  />
                  <p className="inline-block text-xl ">Option 3</p>
                  <input
                    type="radio"
                    value={qn19}
                    name="qn19"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn19(3)}
                  />
                </div>
              </div>
              {/* Question 20 */}
              <div className="mb-6">
                <div className="font-medium ">
                  20: I felt scared without any good reason
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Option 0</p>
                  <input
                    type="radio"
                    value={qn20}
                    name="qn20"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn20(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn20}
                    name="qn20"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn20(1)}
                  />
                  <p className="inline-block text-xl ">Option 2</p>
                  <input
                    type="radio"
                    value={qn20}
                    name="qn20"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn20(2)}
                  />
                  <p className="inline-block text-xl ">Option 3</p>
                  <input
                    type="radio"
                    value={qn20}
                    name="qn20"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn20(3)}
                  />
                </div>
              </div>
              {/* Question 21 */}
              <div className="mb-6">
                <div className="font-medium ">
                  21: I felt that life was meaningless
                </div>
                <div className="">
                  <p className="inline-block text-xl ">Option 0</p>
                  <input
                    type="radio"
                    value={qn21}
                    name="qn21"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn21(0)}
                  />
                  <p className="inline-block text-xl">Option 1</p>
                  <input
                    type="radio"
                    value={qn21}
                    name="qn21"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn21(1)}
                  />
                  <p className="inline-block text-xl ">Option 2</p>
                  <input
                    type="radio"
                    value={qn21}
                    name="qn21"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn21(2)}
                  />
                  <p className="inline-block text-xl ">Option 3</p>
                  <input
                    type="radio"
                    value={qn21}
                    name="qn21"
                    className="inline-block w-4 h-4 mx-4"
                    onChange={(e) => setQn21(3)}
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="py-8">
                <input
                  type="submit"
                  className="px-3 py-2 text-2xl text-white bg-primary04 rounded-xl"
                  value={loading ? "Loading..." : "Submit"} // Change button text based on loading state
                  disabled={loading} // Disable button when loading
                />
              </div>
            </form>

            <div className="font-medium">
              The DASS-21 should not be used to replace a face to face clinical
              interview. If you are experiencing significant emotional
              difficulties you should contact your GP for a referral to a
              qualified professional.
            </div>
          </div>
        </div>
        <div className="my-20 opacity-50 sm:my-40">
          Lovibond, S.H. & Lovibond, P.F. (1995). Manual for the Depression
          Anxiety & Stress Scales. (2nd Ed.)Sydney: Psychology Foundation.
        </div>
      </div>
    </div>
  );
};

export default Das;
