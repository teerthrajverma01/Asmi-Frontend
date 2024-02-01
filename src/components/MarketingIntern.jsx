import { useState, Fragment } from "react";

const MarketingIntern = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [dcs, setDcs] = useState("");
  const [internpref, setInternpref] = useState("");
  const [noh, setNoh] = useState("");
  const [qnMember, setQnMember] = useState("");
  const [viewSm, setViewSm] = useState("");
  const [smc, setSmc] = useState("");
  const [smcl, setSmcl] = useState("");
  const [dpw, setDpw] = useState("");

  const sendMail = async (event) => {
    event.preventDefault();

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
    InternData.append("internpref", internpref);
    InternData.append("noh", noh);

    // Append team-related information
    InternData.append("qnMember", qnMember);
    InternData.append("viewSm", viewSm);
    InternData.append("smc", smc);
    InternData.append("smcl", smcl);

    // Append project-related information
    InternData.append("dpw", dpw);

    try {
      const response = await fetch("http://localhost:4000/send-mIntern", {
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
      setInternpref("");
      setNoh("");
      setQnMember("");
      setViewSm("");
      setSmc("");
      setSmcl("");
      setDpw("");

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
            Gain hands-on experience in social media, working alongside our team
            to create engaging content, analyse performance, and contribute to
            strategic campaigns.
          </p>
          <div className="text-2xl font-normal">
            What do we expect from you?
          </div>
          <p className="mb-3">
            Your innovative minds will craft engaging visual short format
            content aligned with our brand voice. Dive into the realm of social
            media, community interaction, and research, aiding us in campaign
            development and implementation.
          </p>
          <div className="text-2xl font-normal">What do you gain?</div>
          <p className="mb-3">
            As an intern in our Marketing Internship program, you&apos;ll be
            compensated with a stipend while gaining invaluable hands-on
            experience in the ever-evolving social media landscape. You&apos;ll
            work closely with experienced professionals, gaining insights into
            industry best practices and developing your own skills in social
            media marketing and content creation. Upon successful completion of
            the program, you&apos;ll receive a certificate of completion,
            further enhancing your credentials and demonstrating your expertise
            to potential employers.
          </p>
          <div className="text-2xl font-normal">Recognition and Rewards</div>
          <p className="mb-3">
            We recognize excellence and award a &quot;Best Performing
            Intern&quot; title each month to the intern who demonstrates
            exceptional dedication, creativity, and contribution to the
            team&apos;s success.
          </p>
          <div className="text-2xl font-normal">
            Work Schedule and Expectations
          </div>
          <p className="mb-3">
            We prioritize flexibility and empower our interns to manage their
            time effectively. You will primarily work part-time hours remotely,
            with on-site presence scheduled in accordance with your availability
            and our company&apos;s needs. This arrangement will allow you to
            balance your internship responsibilities with other commitments.
            Throughout the program, clear guidelines and expectations will be
            provided to ensure the program&apos;s smooth and productive
            execution.
          </p>
          <div className="text-2xl font-normal">Orientation and Support</div>
          <p className="mb-3">
            We will conduct a virtual orientation to introduce you to our
            company culture, social media strategy, and team members. Throughout
            your internship, expect constant communication, guidance, and advice
            to foster a supportive learning environment.
          </p>
          <div className="text-2xl font-normal">Your Growth, Our Success</div>
          <p className="mb-3">
            This internship isn't just about what you'll contribute to us; it's
            about what we'll offer you in return. The experience gained here
            will be a stepping stone towards your future success.
          </p>
          <div className="text-2xl font-normal">Eligibility:</div>
          <p className="mb-3">
            Must be studying "Full Time" in a recognised college.
            <br />
            Preferred Courses: Psychology, English, Sociology, Journalism,
            Economics and/or History.
            <br />
            Batch/Years: All batches/years, that is, 1st, 2nd and 3rd year
            students.
            <br />
            Strong communication skills and a good command of the English
            language is an essential requirement.
          </p>
          <div className="text-2xl font-normal">
            Time Commitments (Per Week):
          </div>
          <p className="mb-3">
            Part Time On-site 20 hours week, Complete flexibility prior and
            during exams.
          </p>
          <div className="text-2xl font-normal">Remuneration (Per Month):</div>
          <p className="mb-3">Stipend & Allowances</p>
          <div className="text-2xl font-normal">Upon Completion:</div>
          <p className="mb-3">
            An opportunity to convert the internship to a full time job.
            <br />
            Completion Certificate
            <br />
            Letter of Recommendation
          </p>
          <div className="text-2xl font-normal">Duration:</div>
          <p className="mb-3">3 months (Option to convert into Full Time)</p>
          <div className="text-2xl font-normal">Application Deadline:</div>
          <p className="mb-3">No deadline. It's an ongoing open opportunity.</p>
        </div>

        <div className="mt-[5rem]">
          <div className="text-3xl">Asmi - Marketing Internship Form</div>
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
                  <fieldset>
                    <legend>Type of Internship*</legend>
                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="answer"
                        value="FullTimeOnsite"
                        onChange={(e) => setInternpref(e.target.value)}
                      />
                      <label className=" text-[#374151] pr-8 pb-1">
                        FullTime Onsite
                      </label>
                    </div>
                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="answer"
                        value="FullTimeRemote"
                        onChange={(e) => setInternpref(e.target.value)}
                      />
                      <label className=" text-[#374151] pr-8 pb-1">
                        FullTime Remote
                      </label>
                    </div>
                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="answer"
                        value="PartTime Onsite"
                        onChange={(e) => setInternpref(e.target.value)}
                      />
                      <label className=" text-[#374151] pr-8 pb-1">
                        PartTime Onsite
                      </label>
                    </div>

                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="answer"
                        value="PartTimeRemote"
                        onChange={(e) => setInternpref(e.target.value)}
                      />
                      <label className="text-[#374151] pr-8 pb-1">
                        PartTime Remote
                      </label>
                    </div>
                  </fieldset>
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    In case of Part Time, how many hours/day can you devote to
                    the Internship?
                  </label>
                  <textarea
                    className="sm:w-[30rem] pr-2 border border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={noh}
                    onChange={(e) => setNoh(e.target.value)}
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
                    placeholder="Please write the name of Society(ies), reason for joining and experience so far."
                    required
                  />
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    Your views on Social Media and its importance in Marketing
                    and Branding*
                  </label>
                  <textarea
                    className="sm:w-[30rem] pr-2 border border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={viewSm}
                    onChange={(e) => setViewSm(e.target.value)}
                    placeholder="Give Detail Answer"
                    required
                  />
                </div>
                <div className="mt-3 mb-1">
                  <fieldset>
                    <legend>
                      Have you created any Social Media Video Content?
                    </legend>
                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="answer"
                        value="No"
                        onChange={(e) => setSmc(e.target.value)}
                      />
                      <label className=" text-[#374151] pr-8 pb-1">Yes</label>
                    </div>

                    <div>
                      <input
                        className="mr-2"
                        type="radio"
                        name="answer"
                        value="Yes"
                        onChange={(e) => setSmc(e.target.value)}
                      />
                      <label className=" text-[#374151] pr-8 pb-1">No</label>
                    </div>
                  </fieldset>
                </div>
                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    If Yes, please provide links to some content*
                  </label>
                  <textarea
                    className="sm:w-[30rem] pr-2 border border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={smcl}
                    onChange={(e) => setSmcl(e.target.value)}
                    placeholder="Give detail answer"
                    required
                  />
                </div>

                <div className="mt-3 mb-1">
                  <label className="block text-[#374151] pr-8 pb-1">
                    How many days per weel can you come to the office?
                  </label>
                  <input
                    className="sm:w-[30rem] pr-2 border border-[#d1d5db] w-max-[20rem]"
                    type="text"
                    value={dpw}
                    onChange={(e) => setDpw(e.target.value)}
                    placeholder="Give detail of Employer, contact detail and Reference"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 mb-2">
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
            Preferred Courses: Psychology, English, Sociology, Journalism,
            Economics and/or History. Batch/Years: All batches/years, that is,
            1st, 2nd and 3rd year students.
            <br />
            Strong communication skills and a good command of the English
            language is an essential requirement.
          </p>
          <div className="text-2xl font-normal">Remuneration (Per Month):</div>
          <p className="mb-3">Paid along with allowances.</p>
          <div className="text-2xl font-normal">Upon Completion:</div>
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
          <p className="mb-3">No deadline. It's an ongoing open opportunity.</p>
        </div>
      </div>
    </Fragment>
  );
};

export default MarketingIntern;
