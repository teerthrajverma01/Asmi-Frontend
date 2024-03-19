import React, { useState, useEffect } from "react";
import BASE_URL from "../apis/Config";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EatingProblem from "../components/AssessYourself/EatingProblem";
import SubstanceUse from "../components/AssessYourself/SubstanceUse";
import MoodImbalance from "../components/AssessYourself/MoodImbalance";
import SucideRisk from "../components/AssessYourself/SucideRisk";
import SleepDisturbance from "../components/AssessYourself/SleepDisturbance";
import Das from "../components/AssessYourself/Das";
import Stress from "../components/AssessYourself/Stress";
import LowSelfEsteem from "../components/AssessYourself/LowSelfEsteem";

const AssessmentLink = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [assessmentCategory, setAssessmentCategory] = useState();
  const [assessmentAppeared, setAssessmentAppeared] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}/aru/getuser/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("wrong id ");
        }
      })
      .then((data) => {
        setUsername(data.username);
        setEmail(data.email);
        setAssessmentCategory(data.assessmentCategory);
      })
      .catch((error) => {
        console.error("Error fetching post", error);
        navigate("/assessyourself");
      });
  }, []);

  return (
    <div>
      {assessmentAppeared ? (
        <div>You have already appeared </div>
      ) : (
        <div>
          {assessmentCategory === "eatingproblem" && (
            <div>
              <EatingProblem username={username} email={email} />
            </div>
          )}
          {assessmentCategory === "substance-use" && (
            <div>
              <SubstanceUse />
            </div>
          )}
          {assessmentCategory === "mood-imbalance" && (
            <div>
              <MoodImbalance />
            </div>
          )}
          {assessmentCategory === "sucide-risk" && (
            <div>
              <SucideRisk />
            </div>
          )}
          {assessmentCategory === "sleep-disturbance" && (
            <div>
              <SleepDisturbance />
            </div>
          )}
          {assessmentCategory === "das" && (
            <div>
              <Das />
            </div>
          )}
          {assessmentCategory === "stress" && (
            <div>
              <Stress />
            </div>
          )}
          {assessmentCategory === "low-self-esteem" && (
            <div>
              <LowSelfEsteem />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AssessmentLink;
