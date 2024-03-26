import { useState, Fragment } from "react";
import BASE_URL from "../apis/Config";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Careers = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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
  const [accomplishments, setAccomplishments] = useState("");
  const [dailyPractice, setDailyPractice] = useState("");
  const [noh, setNoh] = useState("");
  const [available, setAvailable] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [cv, setCv] = useState("");

  const sendMail = async (event) => {
    event.preventDefault();
    setLoading(true);

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
    careerData.set("accomplishments", accomplishments);
    careerData.set("dailyPractice", dailyPractice);
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
        // If the response is not okay (HTTP status code not in the range 200-299),
        // we parse the error response JSON
        const errorResponse = await response.json();

        // Extracting the error message from the JSON response
        const errorMessage = errorResponse.error.message;

        // Displaying the error message to the user
        toast.error(errorMessage);

        // Throwing an error with the message received from the server
        throw new Error(errorMessage);
      }

      navigate("/submission-successful");

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="m-8 sm:m-20 ">
        <div className="mb-1 text-2xl sm:text-3xl sm:font-medium">
          Application - Psychologist (Independent/Remote)
        </div>
        <div className="mb-8 font-normal">
          On Play Store currently, application requires an Android device.
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
                    className="md:w-3/5 w-full pr-2 p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
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
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
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
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Mobile No*
                  </label>
                  <PhoneInput
                    type="text"
                    value={phoneNumber}
                    country="in"
                    required
                    onChange={setPhoneNumber}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Address*
                  </label>
                  <textarea
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Type your Address"
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
                    Highest Educational Qualification*
                  </label>
                  <input
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
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
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={universityName}
                    required
                    onChange={(e) => setUniversityName(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1 money">
                  <label className="block text-[#374151] pr-8 pb-1">
                    {" "}
                    Year of Graduation*
                  </label>
                  <input
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="number"
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
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={lanKnown}
                    required
                    onChange={(e) => setLanKnown(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Upload All Certifications/Degrees*
                  </label>
                  <input
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
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
                <div className="mt-3 mb-1 money">
                  <label className="block text-[#374151] pr-8 pb-1">
                    {" "}
                    RCI Number
                  </label>
                  <input
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="number"
                    value={Rci}
                    onChange={(e) => setRci(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1 money">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Years of Experience as a Practising Psychologist*
                  </label>
                  <input
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="number"
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
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
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
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={expText}
                    onChange={(e) => setExpText(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Describe how your education has prepared you for your
                    practice.*
                  </label>
                  <textarea
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={shareSession}
                    placeholder="Without disclosing confidential information, describe a session that was challenging"
                    required
                    onChange={(e) => setshareSession(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Briefly describe your major accomplishments in your ongoing
                    activities or events which you have participated.*
                  </label>
                  <textarea
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={accomplishments}
                    required
                    onChange={(e) => setAccomplishments(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    With respect to your specialisation, explain how and what
                    kind of people and issues you deal with in your daily
                    practice.*
                  </label>
                  <textarea
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={dailyPractice}
                    required
                    onChange={(e) => setDailyPractice(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1 money">
                  <label className="block text-[#374151] pr-8 pb-1">
                    How many hours a day can you dedicate to our App?*
                  </label>
                  <input
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="number"
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
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
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
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
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
                    Upload Resume*
                  </label>
                  <input
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
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
                  value={loading ? "Loading..." : "Submit"} // Change button text based on loading state
                  disabled={loading} // Disable button when loading
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Fragment>
  );
};

export default Careers;
