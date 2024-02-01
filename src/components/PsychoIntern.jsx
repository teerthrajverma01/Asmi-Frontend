import React, { useState, Fragment } from "react";

const PsychoIntern = () => {
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
  const [aoi, setAoi] = useState("");
  const [prevworked, setPrevworked] = useState("");
  const [prevworkdet, setPrevworkdetail] = useState("");

  const sendMail = async (event) => {
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
    InternData.append("aoi", aoi);
    InternData.append("prevworked", prevworked);
    InternData.append("prevworkdet", prevworkdet);

    try {
      const response = await fetch("http://localhost:4000/send-pIntern", {
        method: "POST",

        body: InternData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

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
    }
  };

  return (
    <Fragment>
      <div className="m-8 sm:m-20">
        <div className="programdetail-block">
          <div className="mb-4 text-4xl font-medium">About Us</div>
          <p className="mb-3">
            Asmi™, a product in development, is India’s first mobile application
            that will provide Mental Health Counselling Instantly, enabling a
            User to connect to a qualified counsellor within a matter of
            seconds. Asmi™ will also provide User Experience & Counselling in
            regional & international languages while keeping the cost per
            session low and affordable. Asmi™ is a brand of Anjanajyoti
            Healthtech Private Limited.
          </p>
          <div className="text-2xl font-normal">Internship Overview</div>
          <p className="mb-3">
            Gain hands-on experience in social media, working alongside our
            in-house Psychologists and learn how to create SOPs, conduct
            training and workshops, observe online realtime counselling sessions
            and understand how to handle escalated cases.
          </p>
          <div className="text-2xl font-normal">
            What do we expect from you?
          </div>
          <p className="mb-3">
            We expect you to bring your energy and enthusiasm to the workspace.
            We also expect you to come with an open mind enabling you to adapt
            to ral world Counselling sessions and combine them with the
            theoretical knowledge you are gaining or have gained in your
            University.
          </p>
          <div className="text-2xl font-normal">What do you gain?</div>
          <p className="mb-3">
            As an intern in our Psychology Internship program, you'll gain
            invaluable hands-on experience in the ever-evolving Mental Health
            landscape. You'll work closely with experienced professionals,
            gaining insights into industry best practices and developing your
            own skills in Counselling Psychology. You will also gain the
            experience to learn how to structure your own independent practise,
            should you choose to start one. Upon successful completion of the
            program, you'll receive a certificate of completion, further
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
            We prioritize flexibility and empower our interns to manage their
            time effectively. You will primarily work part-time hours on-site.
            This arrangement will allow you to balance your internship
            responsibilities with other commitments. Throughout the program,
            clear guidelines and expectations will be provided to ensure the
            program's smooth and productive execution.
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
            This internship isn't just about what you'll contribute to us; it's
            about what we'll offer you in return. The experience gained here
            will be a stepping stone towards your future success.
          </p>
          <div className="text-2xl font-normal">Eligibility:</div>
          <p className="mb-3">
            Must be studying "Full Time" in a recognised college. Preferred
            <br />
            Courses: Psychology Batch/Years: All batches/years, that is, 1st,
            2nd and 3rd year students.
            <br /> Strong communication skills and a good command of the English
            language is an essential requirement.
          </p>
          <div className="text-2xl font-normal">
            Time Commitments (Per Week):
          </div>
          <p className="mb-3">
            Part Time On-site 20 hours week, Complete flexibility prior and
            during exams.
          </p>
          <div>Upon Completion:</div>
          <p className="mb-3">
            An opportunity to convert the internship to a full time job.
            Completion Certificate Letter of Recommendation
          </p>
          <div className="text-2xl font-normal">Duration:</div>
          <p className="mb-3">3 months (Option to convert into Full Time)</p>
          <div className="text-2xl font-normal">Application Deadline:</div>
          <p className="mb-3">No deadline. It's an ongoing open opportunity.</p>
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
                    className="sm:w-[30rem] pr-2 border border-[#d1d5db] w-max-[20rem]"
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
                    className="sm:w-[30rem] pr-2 border border-[#d1d5db] w-max-[20rem]"
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
                    className="sm:w-[30rem] pr-2 border border-[#d1d5db] w-max-[20rem]"
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    PhoneNo*
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={phoneNumber}
                    placeholder="enter mobile-no with countrycode"
                    required
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Address
                  </label>
                  <textarea
                    className="sm:w-[30rem] pr-2 border border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Type your Address"
                    required
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Name of University
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={universityName}
                    onChange={(e) => setUniversityName(e.target.value)}
                    placeholder=""
                    required
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Name of College
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    placeholder=""
                    required
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Dept, Course & Semester
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={dcs}
                    onChange={(e) => setDcs(e.target.value)}
                    placeholder="plz ener all 3 ie dept,course, sem"
                    required
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Are you a member of Societies in your College or Uni?
                  </label>
                  <textarea
                    className="sm:w-[30rem] pr-2 border border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={qnMember}
                    onChange={(e) => setQnMember(e.target.value)}
                    placeholder=""
                    required
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Are you a member of Societies in your College or Uni?
                  </label>
                  <textarea
                    className="sm:w-[30rem] pr-2 border border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={qnMember}
                    onChange={(e) => setQnMember(e.target.value)}
                    placeholder="Plz write name of society , reason for joining and experience so far"
                    required
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Why did you choose Psychology as a Subject?
                  </label>
                  <textarea
                    className="sm:w-[30rem] pr-2 border border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={whyPsycho}
                    onChange={(e) => setWhyPsycho(e.target.value)}
                    placeholder="Give detail answer"
                    required
                  />
                </div>

                <div className="mt-3 mb-1">
                  <fieldset>
                    <legend>
                      Are you ready to dedicate 20 hours a week for your
                      internship?
                    </legend>
                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="answer"
                        value="No"
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
                  <label className="block text-[#374151] pr-8 pb-1">
                    What areas of Psychology interest you the most?
                  </label>
                  <textarea
                    className="sm:w-[30rem] pr-2 border border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={aoi}
                    onChange={(e) => setAoi(e.target.value)}
                    placeholder="Give detail answer"
                    required
                  />
                </div>
                <div className="mt-3 mb-1">
                  <fieldset>
                    <legend>
                      Have you previously worked/interned in a similar program?
                    </legend>
                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="answer"
                        value="No"
                        onChange={(e) => setPrevworked(e.target.value)}
                      />
                      <label className=" text-[#374151] pr-8 pb-1">Yes</label>
                    </div>

                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="answer"
                        value="Yes"
                        onChange={(e) => setPrevworked(e.target.value)}
                      />
                      <label className=" text-[#374151] pr-8 pb-1">No</label>
                    </div>
                  </fieldset>
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    If so, please provide details
                  </label>
                  <textarea
                    className="sm:w-[30rem] pr-2 border border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={prevworkdet}
                    onChange={(e) => setPrevworkdetail(e.target.value)}
                    placeholder="Give detail of Employer, contact detail and Reference"
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
                  me regarding this intership opporunity.
                </label>
              </div>
              <div className="mt-3 mb-1">
                <input className="mr-2" type="checkbox" required />
                <label>
                  I understand that this is a Part-Time On-Site internship that
                  requires my physical presence in the office/workspace 20 hours
                  a week
                </label>
              </div>
              <input
                className="px-4 py-1 text-white rounded-md bg-primary03 hover:bg-primary05"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>

        <div className="mt-[5rem]">
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
          <div className="text-2xl font-normal">Remuneration (Per Month):</div>
          <p className="mb-3">This is an unpaid internship</p>
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
        </div>
      </div>
    </Fragment>
  );
};

export default PsychoIntern;
