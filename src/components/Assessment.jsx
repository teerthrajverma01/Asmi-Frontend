import React from "react";
import { useState } from "react";
import "./Assessment.css";
import { NavLink } from "react-router-dom";

const Assessment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  var Questionbank = [
    {
      Question:
        "In the last month, how often have you been upset because of something that happened unexpectedly?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Often", isCorrect: false },
        { Answer: "Always", isCorrect: false },
      ],
    },
    {
      Question:
        "In the last month, how often have you felt that you were unable to control the important things in your life?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Often", isCorrect: false },
        { Answer: "Always", isCorrect: false },
      ],
    },
    {
      Question:
        "In the last month, how often have you felt nervous and stressed?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Often", isCorrect: false },
        { Answer: "Always", isCorrect: false },
      ],
    },
    {
      Question:
        "In the last month, how often have you felt confident about your ability to handle your personal problems?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Often", isCorrect: false },
        { Answer: "Always", isCorrect: false },
      ],
    },
    {
      Question:
        "In the last month, how often have you felt that things were going your way?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Often", isCorrect: false },
        { Answer: "Always", isCorrect: false },
      ],
    },
    {
      Question:
        "In the last month, how often have you found that you could not cope with all the things that you had to do?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Often", isCorrect: false },
        { Answer: "Always", isCorrect: false },
      ],
    },
    {
      Question:
        "In the last month, how often have you been able to control irritations in your life?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Often", isCorrect: false },
        { Answer: "Always", isCorrect: false },
      ],
    },
    {
      Question:
        "In the last month, how often have you felt that you were on top of things?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Often", isCorrect: false },
        { Answer: "Always", isCorrect: false },
      ],
    },
    {
      Question:
        "In the last month, how often have you been angered because of things that happened that were outside of your control?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Often", isCorrect: false },
        { Answer: "Always", isCorrect: false },
      ],
    },
    {
      Question:
        "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Often", isCorrect: false },
        { Answer: "Always", isCorrect: false },
      ],
    },
  ];

  //useState Hook
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const [showScore, setShowScore] = useState(false);
  const [showform, setShowform] = useState(false);

  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const sendMail = async (event) => {
    event.preventDefault();

    const assesmentData = new FormData();

    // Append personal information
    assesmentData.append("name", name);

    assesmentData.append("email", email);

    try {
      const response = await fetch("http://localhost:4000/send-assesment", {
        method: "POST",

        body: assesmentData,
      });

      setShowform(true);

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      // Reset input fields

      //move to assessment
    } catch (error) {
      console.error("Error sending mail:", error);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <div className="assessmentsec">
      <div className="assessmentblock indiblock">
        {!showform ? (
          <div>
            <form onSubmit={sendMail}>
              <div className="mt-4 mb-2 ">
                <div className="piformelement formelement">
                  <div className="mt-3 mb-1">
                    <label className="block text-[white] pr-8 pb-1">
                      Name*
                    </label>
                    <input
                      className="sm:w-[20rem] p-1 rounded-sm pr-2 border  text-[black] border-[#d1d5db] w-max-[15rem]"
                      type="text"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mt-3 mb-1">
                    <label className="block text-[white] pr-8 pb-1">
                      Email*
                    </label>
                    <input
                      className="sm:w-[20rem] p-1 rounded-sm pr-2 border  text-[black] border-[#d1d5db] w-max-[15rem]"
                      type="email"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mt-3 mb-1">
                    <input
                      className="mt-4 bg-[#f35637] hover:bg-primary05 text-white px-4 py-1 rounded-md"
                      type="submit"
                      value="Let's Start"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        ) : !showScore ? (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>{currentQuestion + 1}</span>/{Questionbank.length}
              </div>

              <div className="question-text">
                {Questionbank[currentQuestion].Question}
              </div>
            </div>

            <div className="answer-section">
              {Questionbank[currentQuestion].Answers.map((answer, i) => (
                <button
                  key={i}
                  className="btn"
                  onClick={() => handleAnswerResponse(answer.isCorrect)}
                >
                  {answer.Answer}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="score-section">
              <div className="detailblock indiblock">
                <div className="mx-auto">
                  You have scored {score} out of {Questionbank.length}
                </div>
                <hr />

                <NavLink to={"/"}>
                  <button className="px-4 mx-auto btn assessmentbtn w-fit">
                    Go to Home Page
                  </button>
                </NavLink>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Assessment;

{
  /* <div className="assessmentsec">
{!showform ? (
  <div>
    <div>formdetail</div>
    <button onClick={switchformhandler}>showqns</button>
  </div>
) : !showScore ? (
  <div>
    <div>qns</div>
    <button onClick={switchtoendhandler}>show result</button>
  </div>
) : (
  <div>scoresection</div>
)}



</div> */
}
