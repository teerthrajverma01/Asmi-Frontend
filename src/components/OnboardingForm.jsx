import { useState, Fragment } from "react";
import BASE_URL from "../apis/Config";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const OnboardingForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Define state variables for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [birthday, setBirthday] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [gender, setGender] = useState("");
  const [photo, setPhoto] = useState(null); // Store photo file
  const [about, setAbout] = useState("");
  const [qualification, setQualification] = useState("");
  const [certificates, setCertificates] = useState(null); // Store certificates file
  const [workExperience, setWorkExperience] = useState("");
  const [psychologistExperience, setPsychologistExperience] = useState("");

  const [selectedSpecializations, setSelectedSpecializations] = useState([]);

  const [reference, setReference] = useState("");
  const [referenceContact, setReferenceContact] = useState("");
  const [pan, setPan] = useState("");
  const [panFile, setPanFile] = useState(null); // Store PAN card file
  const [aadhar, setAadhar] = useState("");
  const [aadharFile, setAadharFile] = useState(null); // Store Aadhar card file
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [accountType, setAccountType] = useState("");
  const [preferredTimings, setPreferredTimings] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("");
  const [consentDataUsage, setConsentDataUsage] = useState(false);
  const [consentNotifications, setConsentNotifications] = useState(false);
  const [consentAgreement, setConsentAgreement] = useState(false);
  const [chequeFile, setChequeFile] = useState("");

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // Add the selected specialization to the array
      setSelectedSpecializations((prevSelected) => [...prevSelected, value]);
    } else {
      // Remove the deselected specialization from the array
      setSelectedSpecializations((prevSelected) =>
        prevSelected.filter((spec) => spec !== value)
      );
    }
  };

  const sendFormData = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("birthday", birthday);
    formData.append("presentAddress", presentAddress);
    formData.append("gender", gender);
    formData.append("photo", photo);
    formData.append("about", about);
    formData.append("qualification", qualification);
    formData.append("certificates", certificates);
    formData.append("workExperience", workExperience);
    formData.append("psychologistExperience", psychologistExperience);

    selectedSpecializations.forEach((spec) => {
      formData.append("specializations[]", spec);
    });

    formData.append("reference", reference);
    formData.append("referenceContact", referenceContact);
    formData.append("pan", pan);
    formData.append("panFile", panFile);
    formData.append("aadhar", aadhar);
    formData.append("aadharFile", aadharFile);
    formData.append("accountName", accountName);
    formData.append("accountNumber", accountNumber);
    formData.append("bankName", bankName);
    formData.append("branchName", branchName);
    formData.append("ifsc", ifsc);
    formData.append("accountType", accountType);
    formData.append("preferredTimings", preferredTimings);
    formData.append("preferredLanguage", preferredLanguage);
    formData.append("chequeFile", chequeFile);

    try {
      const response = await fetch(`${BASE_URL}/send-counselor-form`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      navigate("/submission-successful");

      // Reset form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setMobile("");
      setBirthday("");
      setPresentAddress("");
      setGender("");
      setPhoto(null);
      setAbout("");
      setQualification("");
      setCertificates(null);
      setWorkExperience("");
      setPsychologistExperience("");
      setReference("");
      setReferenceContact("");
      setPan("");
      setPanFile(null);
      setAadhar("");
      setAadharFile(null);
      setAccountName("");
      setAccountNumber("");
      setBankName("");
      setBranchName("");
      setIfsc("");
      setAccountType("");
      setPreferredTimings("");
      setPreferredLanguage("");
      setConsentDataUsage(false);
      setConsentNotifications(false);
      setConsentAgreement(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="m-8 sm:m-20">
        <div className="mb-8 text-3xl font-medium underline">
          Counselor Onboarding Form
        </div>
        <form onSubmit={sendFormData}>
          <div className="mb-8">
            <div className="mb-2 text-xl font-medium">Personal Details</div>
            {/* Personal Details */}

            <p>Keep the following PDF ready before filling the Form:</p>

            <p>1. Latest Photograph</p>

            <p>2. Single PDF of all Edu. Qualifications after 12th Grade</p>

            <p>3. Clear & Self Attested Copy of Pan</p>

            <p className="mb-12">4. Clear & Self Attested Copy of Aadhar</p>
            {/* First Name */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                First Name*
              </label>
              <input
                className="p-2 rounded-sm border md:w-3/5 w-full border-[#d1d5db]"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            {/* Last Name */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Last Name*
              </label>
              <input
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Email*
              </label>
              <input
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* Mobile */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Mobile*
              </label>
              <PhoneInput
                value={mobile}
                country="in"
                onChange={setMobile}
                required
              />
            </div>
            {/* Birthday */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Birthday*
              </label>
              <input
                type="date"
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
              />
            </div>
            {/* Present Address */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Present Address*
              </label>
              <textarea
                value={presentAddress}
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                onChange={(e) => setPresentAddress(e.target.value)}
                placeholder="Enter your address"
                required
              ></textarea>
            </div>
            {/* Gender */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Gender*
              </label>
              <select
                className="md:w-3/5 bg-white w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer Not To Say">Prefer Not To Say</option>
              </select>
            </div>
            {/* Photograph */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Photograph*
              </label>
              <input
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
                required
              />
              <p className="mt-1 text-sm">
                Please upload a latest, clear, high resolution photograph of
                yourself. This will be uploaded on the App and will be available
                for Users to view.{" "}
              </p>
            </div>
            {/* Brief About Yourself */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Brief About Yourself*
              </label>
              <textarea
                value={about}
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                placeholder="Brief description about you & briefly describe your professional skills for Users to read"
                onChange={(e) => setAbout(e.target.value)}
                required
              ></textarea>
            </div>
          </div>

          {/* Qualification */}
          <div className="mb-8">
            <div className="mb-2 text-xl font-medium">Qualification</div>
            {/* Qualification */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Qualification*
              </label>
              <input
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                placeholder="Enter your highest educational qualification"
                type="text"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                required
              />
            </div>
            {/* Certificates & Degrees */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Certificates & Degrees*
              </label>
              <input
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                type="file"
                onChange={(e) => setCertificates(e.target.files[0])}
                required
              />
              <p className="mt-1 text-sm">
                Upload a Single PDF containing all your degrees and
                certificates. UG and above.
              </p>
            </div>
          </div>

          {/* Professional Information */}
          <div className="mb-8">
            <div className="mb-2 text-xl font-medium">
              Professional Information
            </div>
            {/* Years of Full Time Work Experience */}
            <div className="money">
              <label className="block text-[#374151] mt-4 pr-8 pb-1 ">
                Years of Full Time Work Experience*
              </label>
              <input
                type="number"
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                value={workExperience}
                placeholder="Work Experience as a Psychologist"
                onChange={(e) => setWorkExperience(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Specialization*
              </label>
              <fieldset>
                <legend>Select Specialization</legend>
                <div>
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="noneGeneral"
                    value="None/General"
                    checked={selectedSpecializations.includes("None/General")}
                    onChange={handleCheckboxChange}
                  />
                  <label className="text-[#374151] pr-8 pb-1">
                    None/General
                  </label>
                </div>
                <div>
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="substanceAbuse"
                    value="Substance Abuse"
                    checked={selectedSpecializations.includes(
                      "Substance Abuse"
                    )}
                    onChange={handleCheckboxChange}
                  />
                  <label className="text-[#374151] pr-8 pb-1">
                    Substance Abuse
                  </label>
                </div>
                <div>
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="pediatrics"
                    value="Pediatrics"
                    checked={selectedSpecializations.includes("Pediatrics")}
                    onChange={handleCheckboxChange}
                  />
                  <label className="text-[#374151] pr-8 pb-1">Pediatrics</label>
                </div>
                <div>
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="adolescent"
                    value="Adolescent"
                    checked={selectedSpecializations.includes("Adolescent")}
                    onChange={handleCheckboxChange}
                  />
                  <label className="text-[#374151] pr-8 pb-1">Adolescent</label>
                </div>
                <div>
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="couples"
                    value="Couples"
                    checked={selectedSpecializations.includes("Couples")}
                    onChange={handleCheckboxChange}
                  />
                  <label className="text-[#374151] pr-8 pb-1">Couples</label>
                </div>
                <div>
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="queer"
                    value="Queer"
                    checked={selectedSpecializations.includes("Queer")}
                    onChange={handleCheckboxChange}
                  />
                  <label className="text-[#374151] pr-8 pb-1">Queer</label>
                </div>
                <div>
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="trauma"
                    value="Trauma"
                    checked={selectedSpecializations.includes("Trauma")}
                    onChange={handleCheckboxChange}
                  />
                  <label className="text-[#374151] pr-8 pb-1">Trauma</label>
                </div>
                <div>
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="other"
                    value="Other"
                    checked={selectedSpecializations.includes("Other")}
                    onChange={handleCheckboxChange}
                  />
                  <label className="text-[#374151] pr-8 pb-1">Other</label>
                </div>
              </fieldset>
            </div>

            {/* Reference */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Reference*
              </label>
              <input
                type="text"
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                value={reference}
                placeholder="Provide Name of One Professional Reference"
                onChange={(e) => setReference(e.target.value)}
                required
              />
            </div>
            {/* Reference Contact */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Reference Contact*
              </label>
              <input
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                type="text"
                placeholder="Provide Email or Mobile Number of the Reference"
                value={referenceContact}
                onChange={(e) => setReferenceContact(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Banking Information */}
          <div className="mb-8">
            <div className="mb-2 text-xl font-medium">Banking Information</div>
            {/* PAN */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                PAN*
              </label>
              <input
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                type="text"
                value={pan}
                onChange={(e) => setPan(e.target.value)}
                required
              />
            </div>
            {/* Upload PAN Card */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Upload PAN Card*
              </label>
              <input
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                type="file"
                onChange={(e) => setPanFile(e.target.files[0])}
                required
              />
            </div>
            {/* Aadhar Number */}
            <div className="money">
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Aadhar Number*
              </label>
              <input
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                type="number"
                value={aadhar}
                onChange={(e) => setAadhar(e.target.value)}
                required
              />
            </div>
            {/* Upload Aadhar Card */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Upload Aadhar Card*
              </label>
              <input
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                type="file"
                onChange={(e) => setAadharFile(e.target.files[0])}
                required
              />
            </div>
            {/* Account Name */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Account Name*
              </label>
              <input
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                placeholder="Exact Ac Holder Name As Per Bank Records"
                type="text"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                required
              />
            </div>
            {/* Account Number */}
            <div className="money">
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Account Number*
              </label>
              <input
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                type="number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </div>
            {/* Bank Name */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Bank Name*
              </label>
              <input
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                type="text"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                required
              />
            </div>
            {/* Branch Name */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Branch Name*
              </label>
              <input
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                type="text"
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
                required
              />
            </div>
            {/* IFSC */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                IFSC*
              </label>
              <input
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                type="text"
                value={ifsc}
                onChange={(e) => setIfsc(e.target.value)}
                required
              />
            </div>
            {/* Account Type */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Account Type*
              </label>
              <select
                className="md:w-3/5 w-full bg-white p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
                required
              >
                <option value="">Select Account Type</option>
                <option value="Savings">Savings</option>
                <option value="Current">Current</option>
              </select>
            </div>
            {/* Upload Cancelled Cheque */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Upload Cancelled Cheque*
              </label>
              <input
                className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                type="file"
                onChange={(e) => setChequeFile(e.target.files[0])}
                required
              />
            </div>
          </div>

          {/* General Information */}
          <div className="mb-8">
            <div className="mb-2 text-xl font-medium">General Information</div>
            {/* Preferred Timings */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Preferred Timings (IST)*
              </label>
              <input
                className="md:w-3/5 w-full bg-white p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                value={preferredTimings}
                placeholder="9AM to 9PM / 9PM to 9AM"
                onChange={(e) => setPreferredTimings(e.target.value)}
                required
              />
            </div>
            {/* Preferred Language */}
            <div>
              <label className="block text-[#374151] mt-4 pr-8 pb-1">
                Preferred Language*
              </label>
              <input
                className="md:w-3/5 bg-white w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                value={preferredLanguage}
                placeholder="English, Hindi, Other"
                onChange={(e) => setPreferredLanguage(e.target.value)}
                required
              />
            </div>
            {/* Consent */}
            <div className="mt-4 mb-2">
              <div className="mt-3 mb-1">
                <input className="mr-2" type="checkbox" required />
                <label>
                  I give my consent to the Company to Use my data for account
                  creation and for reference checks.
                </label>
              </div>
              <div className="mt-3 mb-1">
                <input className="mr-2" type="checkbox" required />
                <label>
                  I give my consent to the Company to send notifications to my
                  email and mobile number.
                </label>
              </div>
              <div className="mt-3 mb-1">
                <input className="mr-2" type="checkbox" required />
                <label>
                  I have read the Independent Contractors Agreement between the
                  Company and myself and expressly agree to the terms of the
                  agreement.
                </label>
              </div>
              <div className="mt-3 mb-1">
                <input className="mr-2" type="checkbox" required />
                <label>
                  After submitting this Form, I understand that I have given
                  consent to the Company to on-board me as an Independent
                  Psychologist for Asmi, mobile application, in accordance to
                  the Agreement mentioned above.
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mb-8">
            <button
              type="submit"
              className="px-4 py-1 text-white rounded-md bg-primary03 hover:bg-primary05"
              disabled={loading} // Disable button when loading
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default OnboardingForm;
