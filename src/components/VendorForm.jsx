import { useState, Fragment } from "react";
import BASE_URL from "../apis/Config";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const VendorOnboardingForm = () => {
  // State variables for form fields
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesignation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [orgType, setOrgType] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [gstin, setGstin] = useState("");
  const [gstinFile, setGstinFile] = useState("");
  const [companyPan, setCompanyPan] = useState("");
  const [companyPanFile, setCompanyPanFile] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankBranchState, setBankBranchState] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [cheque, setCheque] = useState("");

  // Function to handle form submission
  const sendFormData = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Creating form data object
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("designation", designation);
    formData.append("companyName", companyName);
    formData.append("orgType", orgType);
    formData.append("address", address);
    formData.append("state", state);
    formData.append("pinCode", pinCode);
    formData.append("gstin", gstin);
    formData.append("companyPan", companyPan);
    formData.append("bankAccountName", bankAccountName);
    formData.append("bankAccountNumber", bankAccountNumber);
    formData.append("bankName", bankName);
    formData.append("bankBranchState", bankBranchState);
    formData.append("ifsc", ifsc);
    formData.append("panCard", companyPanFile[0]);
    formData.append("gstFile", gstinFile[0]);
    formData.append("cheque", cheque[0]);

    try {
      // Sending form data to the server
      const response = await fetch(`${BASE_URL}/send-vendor-form`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      navigate("/submission-successful");

      // Resetting form fields on successful submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setMobile("");
      setDesignation("");
      setCompanyName("");
      setOrgType("");
      setAddress("");
      setState("");
      setPinCode("");
      setGstin("");
      setCompanyPan("");
      setBankAccountName("");
      setBankAccountNumber("");
      setBankName("");
      setBankBranchState("");
      setIfsc("");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="m-8 sm:m-20">
        <div className="mb-8 text-3xl font-medium">Vendor Onboarding Form</div>
        <form onSubmit={sendFormData}>
          {/* Personal Information */}
          <div className="mb-8">
            <div className="mb-2 text-xl font-medium">Personal Information</div>
            <div className="">
              <div>
                <label className="block text-[#374151] mt-4 pr-8  pb-1">
                  FirstName*
                </label>
                <input
                  className="p-2 rounded-sm border md:w-3/5 w-full border-[#d1d5db]"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
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

              <div>
                <label className="block text-[#374151] mt-4 pr-8 pb-1">
                  Mobile No*
                </label>
                <PhoneInput
                  value={mobile}
                  country="in"
                  onChange={setMobile}
                  required
                />
              </div>
              <div>
                <label className="block text-[#374151] mt-4 pr-8 pb-1">
                  Designation*
                </label>
                <input
                  className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                  type="text"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-[#374151] mt-4 pr-8 pb-1">
                  Company Name
                </label>
                <input
                  className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="mt-3 mb-1">
                <fieldset>
                  <legend>Type of Organisation*</legend>
                  <div>
                    <input
                      className="mr-2"
                      type="radio"
                      required
                      name="answer"
                      value="Proprietorship"
                      onChange={(e) => setOrgType(e.target.value)}
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
                      onChange={(e) => setOrgType(e.target.value)}
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
                      value="LLP"
                      onChange={(e) => setOrgType(e.target.value)}
                    />
                    <label className=" text-[#374151] pr-8 pb-1">LLP</label>
                  </div>

                  <div>
                    <input
                      className="mr-2"
                      type="radio"
                      name="answer"
                      value="Pvt"
                      onChange={(e) => setOrgType(e.target.value)}
                    />
                    <label className="text-[#374151] pr-8 pb-1">Pvt Ltd</label>
                  </div>
                  <div>
                    <input
                      className="mr-2"
                      type="radio"
                      name="answer"
                      value="Publiclimited"
                      onChange={(e) => setOrgType(e.target.value)}
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
                      value="Individual"
                      onChange={(e) => setOrgType(e.target.value)}
                    />
                    <label className="text-[#374151] pr-8 pb-1">
                      Individual/Not incorporated
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="mb-8">
            <div className="mb-2 text-xl font-medium">Address Information</div>
            <div>
              <div>
                <label className="block text-[#374151] mt-4 pr-8 pb-1">
                  Address*
                </label>
                <textarea
                  value={address}
                  className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  placeholder="Registered Company Address"
                ></textarea>
              </div>

              <div>
                <label className="block text-[#374151] mt-4 pr-8 pb-1">
                  State/UT*
                </label>
                <input
                  className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>
              <div className="money">
                <label className="block text-[#374151] mt-4 pr-8 pb-1">
                  PIN Code*
                </label>
                <input
                  className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                  type="number"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-[#374151] mt-4 pr-8 pb-1">
                  GSTIN
                </label>
                <input
                  className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                  type="text"
                  value={gstin}
                  onChange={(e) => setGstin(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[#374151] mt-4 pr-8 pb-1">
                  Upload GST Certificate
                </label>
                <input
                  className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                  type="file"
                  onChange={(e) => setGstinFile(e.target.files)}
                />
              </div>
              <div>
                <label className="block text-[#374151] mt-4 pr-8 pb-1">
                  Company PAN*
                </label>
                <input
                  className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                  type="text"
                  value={companyPan}
                  onChange={(e) => setCompanyPan(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-[#374151] mt-4 pr-8 pb-1">
                  Upload PAN Card*
                </label>
                <input
                  className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                  type="file"
                  required
                  onChange={(e) => setCompanyPanFile(e.target.files)}
                />
              </div>
            </div>
          </div>

          {/* Bank Information */}
          <div className="mb-8">
            <div className="mb-2 text-xl font-medium">Bank Information</div>
            <div>
              <div>
                <label className="block text-[#374151] mt-4 pr-8 pb-1">
                  Bank Account Name*
                </label>
                <input
                  className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                  type="text"
                  value={bankAccountName}
                  onChange={(e) => setBankAccountName(e.target.value)}
                  required
                />
              </div>
              <div className="money">
                <label className="block text-[#374151] mt-4 pr-8 pb-1">
                  Bank Account Number
                </label>
                <input
                  className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                  type="number"
                  value={bankAccountNumber}
                  onChange={(e) => setBankAccountNumber(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[#374151] mt-4 pr-8 pb-1">
                  Bank Name
                </label>
                <input
                  className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                  type="text"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[#374151] mt-4 pr-8 pb-1">
                  Bank Branch & State
                </label>
                <input
                  className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                  type="text"
                  value={bankBranchState}
                  onChange={(e) => setBankBranchState(e.target.value)}
                />
              </div>
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
              <div>
                <label className="block text-[#374151] mt-4 pr-8 pb-1">
                  Cancelled Cheque*
                </label>
                <input
                  className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
                  type="file"
                  required
                  onChange={(e) => setCheque(e.target.files)}
                />
              </div>
            </div>
          </div>

          {/* Agreement and Declaration */}

          <div className="mt-4 mb-2">
            <div className="mt-3 mb-1">
              <input className="mr-2" type="checkbox" required />
              <label>I agree to the T&C of the Company.</label>
            </div>
            <div className="mt-3 mb-1">
              <input className="mr-2" type="checkbox" required />
              <label>
                I understand the above information will be used by the Company
                in their Vendor Management System.
              </label>
            </div>
            <div className="mt-3 mb-1">
              <input className="mr-2" type="checkbox" required />
              <label>
                I declare that my business is legally valid in India and am not
                facing any criminal charges or insolvency proceedings.
              </label>
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

export default VendorOnboardingForm;
