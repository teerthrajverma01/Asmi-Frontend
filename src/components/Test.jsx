// import React from "react";

// const Test = () => {
//   const testroute = async () => {
//     const res = await fetch("http://13.233.9.241:4001");

//     console.log(res);

//     // console.log(res.json());
//   };

//   return (
//     <div>
//       <button
//         className="my-32 bg-primary03 hover:bg-primary05"
//         onClick={testroute}
//       >
//         Get connected
//       </button>
//     </div>
//   );
// };

// export default Test;

import { useState, Fragment } from "react";
import BASE_URL from "../apis/Config";

const VendorForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [designation, setDesignation] = useState("");
  const [typeOfOrg, setTypeOfOrg] = useState("");
  const [address, setAddress] = useState("");

  const [highDegree, setHighDegree] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [yog, setYog] = useState("");
  const [lanKnown, setLanKnown] = useState("");
  const [degree, setDegree] = useState("");

  const [Rci, setRci] = useState("");
  const [noyPractice, setNoyPractice] = useState("");
  const [expRes, setExpRes] = useState("");
  const [expText, setExpText] = useState("");
  const [shareSession, setshareSession] = useState("");
  const [noh, setNoh] = useState("");
  const [available, setAvailable] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [cv, setCv] = useState("");

  const sendMail = async (event) => {
    event.preventDefault();

    const careerData = new FormData();

    // set personal information
    careerData.set("firstName", firstName);
    careerData.set("lastName", lastName);
    careerData.set("email", email);
    careerData.set("phoneNumber", phoneNumber);
    careerData.set("address", address);

    // set educational information
    careerData.set("highDegree", highDegree);
    careerData.set("universityName", universityName);
    careerData.set("yog", yog);
    careerData.set("lanKnown", lanKnown);
    careerData.set("degree", degree[0]);

    // set professional information
    careerData.set("Rci", Rci);
    careerData.set("noyPractice", noyPractice);
    careerData.set("expRes", expRes);
    careerData.set("expText", expText);
    careerData.set("shareSession", shareSession);
    careerData.set("noh", noh);
    careerData.set("available", available);
    careerData.set("specialization", specialization);
    careerData.set("cv", cv[0]);

    console.log(careerData);

    try {
      const response = await fetch(`${BASE_URL}/send-career`, {
        method: "POST",

        body: careerData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setAddress("");
      setHighDegree("");
      setUniversityName("");
      setYog("");
      setLanKnown("");
      setDegree("");
      setRci("");
      setNoyPractice("");
      setExpRes("");
      setExpText("");
      setshareSession("");
      setNoh("");
      setAvailable("");
      setSpecialization("");
      setCv("");

      // Reset input fields
    } catch (error) {
      console.error("Error sending mail:", error);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <Fragment>
      <div className="m-8 sm:m-20 ">
        <div className="mb-1 text-2xl sm:text-3xl sm:font-medium">
          Vendor On-Boarding Form
        </div>

        <div className="formblock">
          {/* <div className="text-2xl">Asmi - Psychology Internship Form</div> */}
          <form onSubmit={sendMail}>
            <div className="mt-4 mb-2 ">
              <div className="text-xl">Personal Information</div>
              <div className="piformelement formelement">
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    FirstName*
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 p-1 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={firstName}
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    LastName*
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={lastName}
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Email*
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Mobile*
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={phoneNumber}
                    placeholder="Enter Mobile-No with CountryCode"
                    required
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Designation*
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={designation}
                    required
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Company Name
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <fieldset>
                    <legend>Type of Organisation*</legend>
                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="answer"
                        value="Proprietorship"
                        onChange={(e) => setTypeOfOrg(e.target.value)}
                      />
                      <label className=" text-[#374151] pr-8 pb-1">
                        Proprietorship
                      </label>
                    </div>
                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="answer"
                        value="Partnership"
                        onChange={(e) => setTypeOfOrg(e.target.value)}
                      />
                      <label className=" text-[#374151] pr-8 pb-1">
                        Partnership
                      </label>
                    </div>
                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="answer"
                        value="llp"
                        onChange={(e) => setTypeOfOrg(e.target.value)}
                      />
                      <label className=" text-[#374151] pr-8 pb-1">LLP</label>
                    </div>

                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="answer"
                        value="pvt"
                        onChange={(e) => setTypeOfOrg(e.target.value)}
                      />
                      <label className="text-[#374151] pr-8 pb-1">
                        Pvt Ltd
                      </label>
                    </div>
                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="answer"
                        value="Publiclimited"
                        onChange={(e) => setTypeOfOrg(e.target.value)}
                      />
                      <label className="text-[#374151] pr-8 pb-1">
                        Public Limited
                      </label>
                    </div>
                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="answer"
                        value="individual"
                        onChange={(e) => setTypeOfOrg(e.target.value)}
                      />
                      <label className="text-[#374151] pr-8 pb-1">
                        Individual/Not incorporated
                      </label>
                    </div>
                  </fieldset>
                </div>

                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Address*
                  </label>
                  <textarea
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Registered Company Address"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 mb-2">
              <div className="text-xl">Educational Background</div>
              <div className="edformelement formelement">
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    {" "}
                    High Degree Earned*
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={highDegree}
                    required
                    onChange={(e) => setHighDegree(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    {" "}
                    Name of University*
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={universityName}
                    required
                    onChange={(e) => setUniversityName(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    {" "}
                    Year of Graduation*
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={yog}
                    required
                    onChange={(e) => setYog(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    {" "}
                    Languages Known
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={lanKnown}
                    required
                    onChange={(e) => setLanKnown(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Upload Degree/Provisional
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="file"
                    required
                    onChange={(e) => setDegree(e.target.files)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 mb-2">
              <div className="text-xl">Professional Credintials</div>
              <div className="pdformelement formelement">
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    {" "}
                    RCI Number
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={Rci}
                    onChange={(e) => setRci(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    {" "}
                    No. of years practising as a Psycholigst*
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={noyPractice}
                    required
                    onChange={(e) => setNoyPractice(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Do you have experience in Online Counselling?
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={expRes}
                    required
                    onChange={(e) => setExpRes(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    if yes, please describe your experience in online
                    counselling
                  </label>
                  <textarea
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={expText}
                    onChange={(e) => setExpText(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Share a challenging counselling session*
                  </label>
                  <textarea
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={shareSession}
                    placeholder="without disclosing confidential information, describe a session that was challenging"
                    required
                    onChange={(e) => setshareSession(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    How many hours a day can you dedicate to our App?*
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={noh}
                    placeholder=""
                    required
                    onChange={(e) => setNoh(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Are you available for online sessions during night hours?*
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={available}
                    placeholder="Fee for night hour is more than day fee"
                    required
                    onChange={(e) => setAvailable(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1 ">
                    Please list your specialisations*
                  </label>
                  <textarea
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={specialization}
                    placeholder="Queer, Couple, Adolence etc."
                    required
                    onChange={(e) => setSpecialization(e.target.value)}
                  />
                </div>
                {/* <CvUploader /> */}

                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Upload Degree/Provisional
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="file"
                    required
                    onChange={(e) => setCv(e.target.files)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 mb-2">
              <div className="mt-3 mb-1">
                <input className="mr-2" type="checkbox" required />
                <label>
                  I understand that I am applying for a Independent Contracter
                  Position
                </label>
              </div>
              <div className="mt-3 mb-1">
                <input className="mr-2" type="checkbox" required />
                <label>
                  I give my consent to Asmi team to contact me through SMS,
                  Whatsapp,Email regarding this application
                </label>
              </div>
              <div className="mt-3 mb-1">
                <input
                  className="px-4 py-1 text-white rounded-md bg-primary03 hover:bg-primary05"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default VendorForm;
