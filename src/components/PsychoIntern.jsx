import React, { useState, Fragment } from "react";
import BASE_URL from "../apis/Config";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PsychoIntern = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [dcs, setDcs] = useState("");
  const [qnMember, setQnMember] = useState("");
  const [whyPsycho, setWhyPsycho] = useState("");
  const [dedtime, setDedtime] = useState("");
  const [isHybrid, setIsHybrid] = useState("");
  const [aoi, setAoi] = useState("");
  const [prevworked, setPrevworked] = useState("");
  const [prevworkdet, setPrevworkdetail] = useState("");

  const sendMail = async (event) => {
    event.preventDefault();
    setLoading(true);

    const InternData = new FormData();

    // Append personal information
    InternData.append("firstName", firstName);
    InternData.append("lastName", lastName);
    InternData.append("email", email);
    InternData.append("phoneNumber", phoneNumber);
    InternData.append("address", address);

    // Append educational information
    InternData.append("universityName", universityName);
    InternData.append("collegeName", collegeName);
    InternData.append("dcs", dcs);

    // Append internship preferences
    InternData.append("qnMember", qnMember);

    // Append additional information
    InternData.append("whyPsycho", whyPsycho);
    InternData.append("dedtime", dedtime);
    InternData.append("isHybrid", isHybrid);
    InternData.append("aoi", aoi);
    InternData.append("prevworked", prevworked);
    InternData.append("prevworkdet", prevworkdet);

    try {
      const response = await fetch(`${BASE_URL}/send-pIntern`, {
        method: "POST",

        body: InternData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      navigate("/submission-successful");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setAddress("");
      setUniversityName("");
      setCollegeName("");
      setDcs("");
      setQnMember("");
      setWhyPsycho("");
      setDedtime("");
      setAoi("");
      setPrevworked("");
      setPrevworkdetail("");

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
      <div className="m-8 sm:m-20">
        <div className="programdetail-block">
          <div className="mb-4 text-4xl font-medium">About Us</div>
          <p className="mb-3">
            Asmi™ is India’s first mobile application that provides Mental
            Health Counselling Instantly, enabling a User to connect to a
            qualified counsellor within a matter of seconds. Asmi™ also provides
            User Experience & Counselling in regional & international languages
            while keeping the cost per session low and affordable. Asmi™ is a
            brand of Anjanajyoti Healthtech Private Limited.
          </p>
          <div className="text-2xl font-normal">Internship Overview</div>
          <p className="mb-3">
            Gain hands-on experience in social media, work alongside and get
            trained by our in-house Psychologists and learn how to create case
            histories, conduct training and workshops, indulge in roleplays and
            understand how to handle escalated cases.
          </p>
          <div className="text-2xl font-normal">
            What do we expect from you?
          </div>
          <p className="mb-3">
            We expect you to bring your energy and enthusiasm to the workspace.
            We also expect you to come with an open mind enabling you to adapt
            to real world Counselling sessions and combine them with the
            theoretical knowledge you are gaining or have gained in your
            University.
          </p>
          <div className="text-2xl font-normal">What do you gain?</div>
          <p className="mb-3">
            As an intern in our Psychology Internship program, you will gain
            invaluable hands-on experience in the ever-evolving Mental Health
            landscape. You will work closely with experienced professionals,
            gaining insights into industry best practices and developing your
            own skills in Counselling Psychology. You will also gain the
            experience to learn how to structure your own independent practice,
            should you choose to start one. Upon successful completion of the
            program, you will receive a certificate of completion, further
            enhancing your credentials and demonstrating your expertise to
            potential employers.
          </p>
          <div className="text-2xl font-normal">Recognition and Rewards</div>
          <p className="mb-3">
            We recognize excellence and award a "Best Performing Intern" title
            each month to the intern who demonstrates exceptional dedication,
            creativity, and contribution to the team's success.
          </p>
          <div className="text-2xl font-normal">
            Work Schedule and Expectations
          </div>
          <p className="mb-3">
            We prioritise flexibility and empower our interns to manage their
            time effectively. You will primarily learn online with the option
            for on site. This arrangement will allow you to balance your
            internship responsibilities with other commitments. Throughout the
            program, clear guidelines and expectations will be provided to
            ensure the program's smooth and productive execution.
          </p>
          <div className="text-2xl font-normal">Orientation and Support</div>
          <p className="mb-3">
            We will conduct a virtual orientation to introduce you to our
            company culture and team members. Throughout your internship, expect
            constant communication, guidance, and advice to foster a supportive
            learning environment.
          </p>
          <div className="text-2xl font-normal">Your Growth, Our Success</div>
          <p className="mb-3">
            This internship isn't just about what you will contribute to us;
            it's about what we'll offer you in return. The experience gained
            here will be a stepping stone towards your future success.
          </p>
          <div className="text-2xl font-normal">Eligibility:</div>
          <p className="mb-3">
            ● Preferred Courses: Psychology & allied sciences
            <br />● Batch/Years: Graduation & Post graduation students from all
            years.
            <br /> ● Strong communication skills and a good command of the
            English language is an essential requirement.
          </p>
          <div className="text-2xl font-normal">
            Time Commitments (Per Week):
          </div>
          <p className="mb-3">
            Hybrid/Online 3-5 hours week, Complete flexibility prior and during
            exams.
          </p>
          <div className="text-2xl font-normal">Upon Completion:</div>
          <p className="mb-3">
            ● An opportunity to convert the internship to a full time job
            <br />
            ● Certificate
            <br />● Letter of Recommendation
          </p>
          <div className="text-2xl font-normal">Duration:</div>
          <p className="mb-3">
            1-1.5 months (Opportunity to convert into Full Time)
          </p>
          <div className="text-2xl font-normal">Application Deadline:</div>
          <p className="mb-3">No deadline. It's an ongoing open opportunity.</p>
          <div className="text-2xl font-normal">Remuneration </div>
          <p className="mb-3">This is an unpaid internship</p>
        </div>

        <div className="mt-[5rem]">
          <div className="text-3xl">Asmi - Psychology Internship Form</div>
          <form onSubmit={sendMail}>
            <div className="mt-4 mb-2">
              <div className="text-xl">Personal Information</div>
              <div className="piformelement formelement">
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    FirstName*
                  </label>
                  <input
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
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
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Name of University*
                  </label>
                  <input
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={universityName}
                    onChange={(e) => setUniversityName(e.target.value)}
                    placeholder=""
                    required
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Name of College*
                  </label>
                  <input
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    placeholder=""
                    required
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Course, Year and Semester*
                  </label>
                  <input
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={dcs}
                    onChange={(e) => setDcs(e.target.value)}
                    placeholder="Please enter all 3 (Course, Year and Semester)"
                    required
                  />
                </div>

                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Are you a member of Societies in your College or
                    University?*
                  </label>
                  <textarea
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={qnMember}
                    onChange={(e) => setQnMember(e.target.value)}
                    placeholder="Please write name of society, reason for joining and experience so far"
                    required
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Why did you choose Psychology as a Subject?*
                  </label>
                  <textarea
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={whyPsycho}
                    onChange={(e) => setWhyPsycho(e.target.value)}
                    placeholder="Give detailed answer"
                    required
                  />
                </div>

                <div className="mt-3 mb-1">
                  <fieldset>
                    <legend>
                      Are you ready to dedicate 3-5 hours per week for the
                      internship?*
                    </legend>
                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="answer"
                        value="No"
                        required
                        onChange={(e) => setDedtime(e.target.value)}
                      />
                      <label className=" text-[#374151] pr-8 pb-1">Yes</label>
                    </div>

                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="answer"
                        value="Yes"
                        onChange={(e) => setDedtime(e.target.value)}
                      />
                      <label className=" text-[#374151] pr-8 pb-1">No</label>
                    </div>
                  </fieldset>
                </div>

                <div className="mt-3 mb-1">
                  <fieldset>
                    <legend>What mode would you like to opt for?*</legend>
                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="mode"
                        value="HYBRID"
                        required
                        onChange={(e) => setIsHybrid(e.target.value)}
                      />
                      <label className=" text-[#374151] pr-8 pb-1">
                        HYBRID
                      </label>
                    </div>

                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="mode"
                        value="ONLINE"
                        onChange={(e) => setIsHybrid(e.target.value)}
                      />
                      <label className=" text-[#374151] pr-8 pb-1">
                        ONLINE
                      </label>
                    </div>
                  </fieldset>
                </div>

                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    What areas of Psychology interest you the most?*
                  </label>
                  <textarea
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={aoi}
                    onChange={(e) => setAoi(e.target.value)}
                    placeholder="Give detailed answer"
                    required
                  />
                </div>
                <div className="mt-3 mb-1">
                  <fieldset>
                    <legend>
                      Have you previously worked/interned in a similar program?*
                    </legend>
                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="intern"
                        value="Yes"
                        onChange={(e) => setPrevworked(e.target.value)}
                        required
                      />
                      <label className=" text-[#374151] pr-8 pb-1">Yes</label>
                    </div>

                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="intern"
                        value="No"
                        onChange={(e) => setPrevworked(e.target.value)}
                      />
                      <label className=" text-[#374151] pr-8 pb-1">No</label>
                    </div>
                  </fieldset>
                </div>

                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    If so, please provide details*
                  </label>
                  <textarea
                    className="md:w-3/5 w-full pr-2 border p-2 rounded-sm border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={prevworkdet}
                    onChange={(e) => setPrevworkdetail(e.target.value)}
                    placeholder="Give details of employer, contact detail and references"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 mb-2">
              <div className="mt-3 mb-1">
                <input className="mr-2" type="checkbox" required />
                <label>
                  I understand and accept the Terms &amp; Conditions of
                  application, data and its usage.
                </label>
              </div>
              <div className="mt-3 mb-1">
                <input className="mr-2" type="checkbox" required />
                <label>
                  I give my consent for the Company and its employees to contact
                  me regarding this intership opportunity.
                </label>
              </div>
              <div className="mt-3 mb-1">
                <input className="mr-2" type="checkbox" required />
                <label>
                  I understand that this is a Part-Time Hybrid/Online internship
                  demanding 3-5 hours a week.
                </label>
              </div>
              <input
                className="px-4 py-1 text-white rounded-md bg-primary03 hover:bg-primary05"
                type="submit"
                value={loading ? "Loading..." : "Submit"} // Change button text based on loading state
                disabled={loading} // Disable button when loading
              />
            </div>
          </form>
        </div>

        {/* <div className="mt-[5rem]">
          <div className="text-3xl mb-[1rem]">General Information</div>
          <div className="text-2xl font-normal">Eligibility:</div>
          <p className="mb-3">
            Must be studying &quot;Full-Time&quot; with a recognised college.
            <br />
            Preferred Courses: Psychology Batch/Years: All batches/years, that
            is, 1st, 2nd and 3rd year students.
            <br />
            Strong communication skills and a good command of the English
            language is an essential requirement.
          </p>

          <div>Upon Completion:</div>
          <p className="mb-3">
            An opportunity to convert the internship to a full/part time job.
            <br />
            Completion Certificate
            <br />
            Letter of Recommendation
          </p>
          <div className="text-2xl font-normal">Duration:</div>
          <p className="mb-3">3 months</p>
          <div className="text-2xl font-normal">Application Deadline:</div>
          <p className="mb-3">
            No deadline. It&apos;s an ongoing open opportunity.
          </p>
        </div> */}
      </div>
    </Fragment>
  );
};

export default PsychoIntern;
