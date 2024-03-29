// // // import React from "react";

// // // const Test = () => {
// // //   const testroute = async () => {
// // //     const res = await fetch("http://13.233.9.241:4001");

// // //     console.log(res);

// // //     // console.log(res.json());
// // //   };

// // //   return (
// // //     <div>
// // //       <button
// // //         className="my-32 bg-primary03 hover:bg-primary05"
// // //         onClick={testroute}
// // //       >
// // //         Get connected
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default Test;

// // import { useState, Fragment } from "react";
// // import BASE_URL from "../apis/Config";

// // const VendorForm = () => {
// //   const [firstName, setFirstName] = useState("");
// //   const [lastName, setLastName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [phoneNumber, setPhoneNumber] = useState("");
// //   const [designation, setDesignation] = useState("");
// //   const [typeOfOrg, setTypeOfOrg] = useState("");
// //   const [address, setAddress] = useState("");

// //   const [highDegree, setHighDegree] = useState("");
// //   const [universityName, setUniversityName] = useState("");
// //   const [yog, setYog] = useState("");
// //   const [lanKnown, setLanKnown] = useState("");
// //   const [degree, setDegree] = useState("");

// //   const [Rci, setRci] = useState("");
// //   const [noyPractice, setNoyPractice] = useState("");
// //   const [expRes, setExpRes] = useState("");
// //   const [expText, setExpText] = useState("");
// //   const [shareSession, setshareSession] = useState("");
// //   const [noh, setNoh] = useState("");
// //   const [available, setAvailable] = useState("");
// //   const [specialization, setSpecialization] = useState("");
// //   const [cv, setCv] = useState("");

// //   const sendMail = async (event) => {
// //     event.preventDefault();

// //     const careerData = new FormData();

// //     // set personal information
// //     careerData.set("firstName", firstName);
// //     careerData.set("lastName", lastName);
// //     careerData.set("email", email);
// //     careerData.set("phoneNumber", phoneNumber);
// //     careerData.set("address", address);

// //     // set educational information
// //     careerData.set("highDegree", highDegree);
// //     careerData.set("universityName", universityName);
// //     careerData.set("yog", yog);
// //     careerData.set("lanKnown", lanKnown);
// //     careerData.set("degree", degree[0]);

// //     // set professional information
// //     careerData.set("Rci", Rci);
// //     careerData.set("noyPractice", noyPractice);
// //     careerData.set("expRes", expRes);
// //     careerData.set("expText", expText);
// //     careerData.set("shareSession", shareSession);
// //     careerData.set("noh", noh);
// //     careerData.set("available", available);
// //     careerData.set("specialization", specialization);
// //     careerData.set("cv", cv[0]);

// //     console.log(careerData);

// //     try {
// //       const response = await fetch(`${BASE_URL}/send-career`, {
// //         method: "POST",

// //         body: careerData,
// //       });

// //       if (!response.ok) {
// //         throw new Error("Network response was not ok.");
// //       }

// //       setFirstName("");
// //       setLastName("");
// //       setEmail("");
// //       setPhoneNumber("");
// //       setAddress("");
// //       setHighDegree("");
// //       setUniversityName("");
// //       setYog("");
// //       setLanKnown("");
// //       setDegree("");
// //       setRci("");
// //       setNoyPractice("");
// //       setExpRes("");
// //       setExpText("");
// //       setshareSession("");
// //       setNoh("");
// //       setAvailable("");
// //       setSpecialization("");
// //       setCv("");

// //       // Reset input fields
// //     } catch (error) {
// //       console.error("Error sending mail:", error);
// //       // Handle error (e.g., display error message to user)
// //     }
// //   };

// //   return (
// //     <Fragment>
// //       <div className="m-8 sm:m-20 ">
// //         <div className="mb-1 text-2xl sm:text-3xl sm:font-medium">
// //           Vendor On-Boarding Form
// //         </div>

// //         <div className="formblock">
// //           {/* <div className="text-2xl">Asmi - Psychology Internship Form</div> */}
// //           <form onSubmit={sendMail}>
// //             <div className="mt-4 mb-2 ">
// //               <div className="text-xl">Personal Information</div>
// //               <div className="piformelement formelement">
// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     FirstName*
// //                   </label>
// //                   <input
// //                     className="sm:w-[30rem] pr-2 p-1 rounded-sm border border-[#d1d5db] w-max-[20rem]"
// //                     type="text"
// //                     value={firstName}
// //                     required
// //                     onChange={(e) => setFirstName(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     LastName*
// //                   </label>
// //                   <input
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="text"
// //                     value={lastName}
// //                     required
// //                     onChange={(e) => setLastName(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     Email*
// //                   </label>
// //                   <input
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="email"
// //                     value={email}
// //                     required
// //                     onChange={(e) => setEmail(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     Mobile*
// //                   </label>
// //                   <input
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="text"
// //                     value={phoneNumber}
// //                     placeholder="Enter Mobile-No with CountryCode"
// //                     required
// //                     onChange={(e) => setPhoneNumber(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     Designation*
// //                   </label>
// //                   <input
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="text"
// //                     value={designation}
// //                     required
// //                     onChange={(e) => setDesignation(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     Company Name
// //                   </label>
// //                   <input
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="text"
// //                     value={lastName}
// //                     onChange={(e) => setLastName(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="mt-3 mb-1">
// //                   <fieldset>
// //                     <legend>Type of Organisation*</legend>
// //                     <div>
// //                       <input
// //                         className="mr-2"
// //                         type="radio"
// //                         name="answer"
// //                         value="Proprietorship"
// //                         onChange={(e) => setTypeOfOrg(e.target.value)}
// //                       />
// //                       <label className=" text-[#374151] pr-8 pb-1">
// //                         Proprietorship
// //                       </label>
// //                     </div>
// //                     <div>
// //                       <input
// //                         className="mr-2"
// //                         type="radio"
// //                         name="answer"
// //                         value="Partnership"
// //                         onChange={(e) => setTypeOfOrg(e.target.value)}
// //                       />
// //                       <label className=" text-[#374151] pr-8 pb-1">
// //                         Partnership
// //                       </label>
// //                     </div>
// //                     <div>
// //                       <input
// //                         className="mr-2"
// //                         type="radio"
// //                         name="answer"
// //                         value="llp"
// //                         onChange={(e) => setTypeOfOrg(e.target.value)}
// //                       />
// //                       <label className=" text-[#374151] pr-8 pb-1">LLP</label>
// //                     </div>

// //                     <div>
// //                       <input
// //                         className="mr-2"
// //                         type="radio"
// //                         name="answer"
// //                         value="pvt"
// //                         onChange={(e) => setTypeOfOrg(e.target.value)}
// //                       />
// //                       <label className="text-[#374151] pr-8 pb-1">
// //                         Pvt Ltd
// //                       </label>
// //                     </div>
// //                     <div>
// //                       <input
// //                         className="mr-2"
// //                         type="radio"
// //                         name="answer"
// //                         value="Publiclimited"
// //                         onChange={(e) => setTypeOfOrg(e.target.value)}
// //                       />
// //                       <label className="text-[#374151] pr-8 pb-1">
// //                         Public Limited
// //                       </label>
// //                     </div>
// //                     <div>
// //                       <input
// //                         className="mr-2"
// //                         type="radio"
// //                         name="answer"
// //                         value="individual"
// //                         onChange={(e) => setTypeOfOrg(e.target.value)}
// //                       />
// //                       <label className="text-[#374151] pr-8 pb-1">
// //                         Individual/Not incorporated
// //                       </label>
// //                     </div>
// //                   </fieldset>
// //                 </div>

// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     Address*
// //                   </label>
// //                   <textarea
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="text"
// //                     value={address}
// //                     onChange={(e) => setAddress(e.target.value)}
// //                     placeholder="Registered Company Address"
// //                     required
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="mt-4 mb-2">
// //               <div className="text-xl">Educational Background</div>
// //               <div className="edformelement formelement">
// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     {" "}
// //                     High Degree Earned*
// //                   </label>
// //                   <input
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="text"
// //                     value={highDegree}
// //                     required
// //                     onChange={(e) => setHighDegree(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     {" "}
// //                     Name of University*
// //                   </label>
// //                   <input
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="text"
// //                     value={universityName}
// //                     required
// //                     onChange={(e) => setUniversityName(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     {" "}
// //                     Year of Graduation*
// //                   </label>
// //                   <input
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="text"
// //                     value={yog}
// //                     required
// //                     onChange={(e) => setYog(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     {" "}
// //                     Languages Known
// //                   </label>
// //                   <input
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="text"
// //                     value={lanKnown}
// //                     required
// //                     onChange={(e) => setLanKnown(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     Upload Degree/Provisional
// //                   </label>
// //                   <input
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="file"
// //                     required
// //                     onChange={(e) => setDegree(e.target.files)}
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="mt-4 mb-2">
// //               <div className="text-xl">Professional Credintials</div>
// //               <div className="pdformelement formelement">
// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     {" "}
// //                     RCI Number
// //                   </label>
// //                   <input
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="text"
// //                     value={Rci}
// //                     onChange={(e) => setRci(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     {" "}
// //                     No. of years practising as a Psycholigst*
// //                   </label>
// //                   <input
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="text"
// //                     value={noyPractice}
// //                     required
// //                     onChange={(e) => setNoyPractice(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     Do you have experience in Online Counselling?
// //                   </label>
// //                   <input
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="text"
// //                     value={expRes}
// //                     required
// //                     onChange={(e) => setExpRes(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     if yes, please describe your experience in online
// //                     counselling
// //                   </label>
// //                   <textarea
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="text"
// //                     value={expText}
// //                     onChange={(e) => setExpText(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     Share a challenging counselling session*
// //                   </label>
// //                   <textarea
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="text"
// //                     value={shareSession}
// //                     placeholder="without disclosing confidential information, describe a session that was challenging"
// //                     required
// //                     onChange={(e) => setshareSession(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     How many hours a day can you dedicate to our App?*
// //                   </label>
// //                   <input
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="text"
// //                     value={noh}
// //                     placeholder=""
// //                     required
// //                     onChange={(e) => setNoh(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     Are you available for online sessions during night hours?*
// //                   </label>
// //                   <input
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="text"
// //                     value={available}
// //                     placeholder="Fee for night hour is more than day fee"
// //                     required
// //                     onChange={(e) => setAvailable(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1 ">
// //                     Please list your specialisations*
// //                   </label>
// //                   <textarea
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="text"
// //                     value={specialization}
// //                     placeholder="Queer, Couple, Adolence etc."
// //                     required
// //                     onChange={(e) => setSpecialization(e.target.value)}
// //                   />
// //                 </div>
// //                 {/* <CvUploader /> */}

// //                 <div className="mt-3 mb-1">
// //                   <label className="block text-[#374151] pr-8 pb-1">
// //                     Upload Degree/Provisional
// //                   </label>
// //                   <input
// //                     className="sm:w-[30rem] pr-2 border p-1 rounded-sm border-[#d1d5db] w-max-[20rem]"
// //                     type="file"
// //                     required
// //                     onChange={(e) => setCv(e.target.files)}
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="mt-4 mb-2">
// //               <div className="mt-3 mb-1">
// //                 <input className="mr-2" type="checkbox" required />
// //                 <label>
// //                   I understand that I am applying for a Independent Contracter
// //                   Position
// //                 </label>
// //               </div>
// //               <div className="mt-3 mb-1">
// //                 <input className="mr-2" type="checkbox" required />
// //                 <label>
// //                   I give my consent to Asmi team to contact me through SMS,
// //                   Whatsapp,Email regarding this application
// //                 </label>
// //               </div>
// //               <div className="mt-3 mb-1">
// //                 <input
// //                   className="px-4 py-1 text-white rounded-md bg-primary03 hover:bg-primary05"
// //                   type="submit"
// //                   value="Submit"
// //                 />
// //               </div>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </Fragment>
// //   );
// // };

// // export default VendorForm;

// import { useState, Fragment } from "react";
// import BASE_URL from "../apis/Config";
// import { useNavigate } from "react-router-dom";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Axios from "axios";

// import FileDownload from "js-file-download";

// const OnboardingForm = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Define state variables for form fields
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [birthday, setBirthday] = useState("");
//   const [presentAddress, setPresentAddress] = useState("");
//   const [gender, setGender] = useState("");
//   const [photo, setPhoto] = useState(null); // Store photo file
//   const [about, setAbout] = useState("");
//   const [qualification, setQualification] = useState("");
//   const [certificates, setCertificates] = useState(null); // Store certificates file
//   const [workExperience, setWorkExperience] = useState("");

//   const [selectedSpecializations, setSelectedSpecializations] = useState([]);

//   const [reference, setReference] = useState("");
//   const [referenceContact, setReferenceContact] = useState("");
//   const [pan, setPan] = useState("");
//   const [panFile, setPanFile] = useState(null); // Store PAN card file
//   const [aadhar, setAadhar] = useState("");
//   const [aadharFile, setAadharFile] = useState(null); // Store Aadhar card file
//   const [accountName, setAccountName] = useState("");
//   const [accountNumber, setAccountNumber] = useState("");
//   const [bankName, setBankName] = useState("");
//   const [branchName, setBranchName] = useState("");
//   const [ifsc, setIfsc] = useState("");
//   const [accountType, setAccountType] = useState("");
//   const [preferredTimings, setPreferredTimings] = useState("");
//   const [preferredLanguage, setPreferredLanguage] = useState("");

//   const [languages, setLanguages] = useState([]); // State variable for selected languages
//   const [otherLanguage, setOtherLanguage] = useState(""); // State variable for other language input field

//   const [consentDataUsage, setConsentDataUsage] = useState(false);
//   const [consentNotifications, setConsentNotifications] = useState(false);
//   const [consentAgreement, setConsentAgreement] = useState(false);
//   const [chequeFile, setChequeFile] = useState("");

//   const downloadDoc = (e) => {
//     e.preventDefault();

//     Axios({
//       url: `${BASE_URL}/agreement`,
//       method: "GET",
//       responseType: "blob",
//     }).then((res) => {
//       console.log(res);
//       FileDownload(res.data, "INDEPENDENT_CONTRACTOR_AGREEMENT.pdf");
//     });
//   };

//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;

//     if (checked) {
//       // Add the selected specialization to the array
//       setSelectedSpecializations((prevSelected) => [...prevSelected, value]);
//     } else {
//       // Remove the deselected specialization from the array
//       setSelectedSpecializations((prevSelected) =>
//         prevSelected.filter((spec) => spec !== value)
//       );
//     }
//   };

//   const sendFormData = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("firstName", firstName);
//     formData.append("lastName", lastName);
//     formData.append("email", email);
//     formData.append("mobile", mobile);
//     formData.append("birthday", birthday);
//     formData.append("presentAddress", presentAddress);
//     formData.append("gender", gender);
//     formData.append("photo", photo);
//     formData.append("about", about);
//     formData.append("qualification", qualification);
//     formData.append("certificates", certificates);
//     formData.append("workExperience", workExperience);

//     selectedSpecializations.forEach((spec) => {
//       formData.append("specializations[]", spec);
//     });

//     formData.append("reference", reference);
//     formData.append("referenceContact", referenceContact);
//     formData.append("pan", pan);
//     formData.append("panFile", panFile);
//     formData.append("aadhar", aadhar);
//     formData.append("aadharFile", aadharFile);
//     formData.append("accountName", accountName);
//     formData.append("accountNumber", accountNumber);
//     formData.append("bankName", bankName);
//     formData.append("branchName", branchName);
//     formData.append("ifsc", ifsc);
//     formData.append("accountType", accountType);
//     formData.append("preferredTimings", preferredTimings);
//     formData.append("preferredLanguage", preferredLanguage);
//     formData.append("chequeFile", chequeFile);

//     try {
//       const response = await fetch(`${BASE_URL}/send-counselor-form`, {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         // If the response is not okay (HTTP status code not in the range 200-299),
//         // we parse the error response JSON
//         const errorResponse = await response.json();

//         // Extracting the error message from the JSON response
//         let errorMessage = errorResponse.error.message;

//         if (
//           errorMessage ===
//           "File size too large. Got 17800381. Maximum is 10485760."
//         ) {
//           errorMessage =
//             "File size too large. Please Upload file less than 10mb";
//         }

//         // Displaying the error message to the user
//         toast.error(errorMessage);

//         // Throwing an error with the message received from the server
//         throw new Error(errorMessage);
//       }

//       navigate("/submission-successful");
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error(
//         "An error occurred, Please try again after reloading website"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Fragment>
//       <div className="m-8 sm:m-20">
//         <div className="mb-8 text-3xl font-medium underline">
//           Counselor Onboarding Form
//         </div>
//         <form onSubmit={sendFormData}>
//           <div className="mb-8">
//             <div className="mb-2 text-xl font-medium">Personal Details</div>
//             {/* Personal Details */}

//             <p>Keep the following PDF ready before filling the Form:</p>

//             <p>1. Latest Photograph</p>

//             <p>2. Single PDF of all Edu. Qualifications after 12th Grade</p>

//             <p>3. Clear & Self Attested Copy of Pan</p>

//             <p className="mb-12">4. Clear & Self Attested Copy of Aadhar</p>
//             {/* First Name */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 First Name*
//               </label>
//               <input
//                 className="p-2 rounded-sm border md:w-3/5 w-full border-[#d1d5db]"
//                 type="text"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 required
//               />
//             </div>
//             {/* Last Name */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Last Name*
//               </label>
//               <input
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 type="text"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 required
//               />
//             </div>
//             {/* Email */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Email*
//               </label>
//               <input
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             {/* Mobile */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Mobile*
//               </label>
//               <PhoneInput
//                 value={mobile}
//                 country="in"
//                 onChange={setMobile}
//                 required
//               />
//             </div>
//             {/* Birthday */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Date of Birth*
//               </label>
//               <input
//                 type="date"
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 value={birthday}
//                 onChange={(e) => setBirthday(e.target.value)}
//                 required
//               />
//             </div>
//             {/* Present Address */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Present Address with PIN Code*
//               </label>
//               <textarea
//                 value={presentAddress}
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 onChange={(e) => setPresentAddress(e.target.value)}
//                 placeholder="Enter your address"
//                 required
//               ></textarea>
//             </div>
//             {/* Gender */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Gender*
//               </label>
//               <select
//                 className="md:w-3/5 bg-white w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 value={gender}
//                 onChange={(e) => setGender(e.target.value)}
//                 required
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//                 <option value="Prefer Not To Say">Prefer Not To Say</option>
//               </select>
//             </div>
//             {/* Photograph */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Photograph*
//               </label>
//               <input
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 type="file"
//                 onChange={(e) => setPhoto(e.target.files[0])}
//                 required
//               />
//               <div className="mt-1 text-sm font-medium">
//                 Please upload a latest, clear, high resolution photograph of
//                 yourself. This will be uploaded on the App and will be available
//                 for Users to view.{" "}
//               </div>
//             </div>
//             {/* Brief About Yourself */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Brief About Yourself*
//               </label>
//               <textarea
//                 value={about}
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 placeholder="Brief description about you & briefly describe your professional skills for Users to read"
//                 onChange={(e) => setAbout(e.target.value)}
//                 required
//               ></textarea>
//             </div>
//           </div>

//           {/* Qualification */}
//           <div className="mb-8">
//             <div className="mb-2 text-xl font-medium">Qualification</div>
//             {/* Qualification */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Qualification*
//               </label>
//               <input
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 placeholder="Enter your highest educational qualification"
//                 type="text"
//                 value={qualification}
//                 onChange={(e) => setQualification(e.target.value)}
//                 required
//               />
//             </div>
//             {/* Certificates & Degrees */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Certificates & Degrees*
//               </label>
//               <input
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 type="file"
//                 onChange={(e) => setCertificates(e.target.files[0])}
//                 required
//               />
//               <div className="mt-1 text-sm font-medium">
//                 Upload a single pdf containing UG and PG Degrees and
//                 certifications (if any)
//               </div>
//             </div>
//           </div>

//           {/* Professional Information */}
//           <div className="mb-8">
//             <div className="mb-2 text-xl font-medium">
//               Professional Information
//             </div>
//             {/* Years of Full Time Work Experience */}
//             <div className="money">
//               <label className="block text-[#374151] mt-4 pr-8 pb-1 ">
//                 Years of Full Time Experience in Psychology*
//               </label>
//               <input
//                 type="number"
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 value={workExperience}
//                 placeholder="Work Experience as a Psychologist"
//                 onChange={(e) => setWorkExperience(e.target.value)}
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Specialization*
//               </label>
//               <fieldset>
//                 <legend>Select Specialization</legend>
//                 <div>
//                   <input
//                     className="mr-2"
//                     type="checkbox"
//                     name="noneGeneral"
//                     value="None/General"
//                     checked={selectedSpecializations.includes("None/General")}
//                     onChange={handleCheckboxChange}
//                   />
//                   <label className="text-[#374151] pr-8 pb-1">
//                     None/General
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     className="mr-2"
//                     type="checkbox"
//                     name="substanceAbuse"
//                     value="Substance Abuse"
//                     checked={selectedSpecializations.includes(
//                       "Substance Abuse"
//                     )}
//                     onChange={handleCheckboxChange}
//                   />
//                   <label className="text-[#374151] pr-8 pb-1">
//                     Substance Abuse
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     className="mr-2"
//                     type="checkbox"
//                     name="pediatrics"
//                     value="Pediatrics"
//                     checked={selectedSpecializations.includes("Pediatrics")}
//                     onChange={handleCheckboxChange}
//                   />
//                   <label className="text-[#374151] pr-8 pb-1">Pediatrics</label>
//                 </div>
//                 <div>
//                   <input
//                     className="mr-2"
//                     type="checkbox"
//                     name="adolescent"
//                     value="Adolescent"
//                     checked={selectedSpecializations.includes("Adolescent")}
//                     onChange={handleCheckboxChange}
//                   />
//                   <label className="text-[#374151] pr-8 pb-1">Adolescent</label>
//                 </div>
//                 <div>
//                   <input
//                     className="mr-2"
//                     type="checkbox"
//                     name="couples"
//                     value="Couples"
//                     checked={selectedSpecializations.includes("Couples")}
//                     onChange={handleCheckboxChange}
//                   />
//                   <label className="text-[#374151] pr-8 pb-1">Couples</label>
//                 </div>
//                 <div>
//                   <input
//                     className="mr-2"
//                     type="checkbox"
//                     name="queer"
//                     value="Queer"
//                     checked={selectedSpecializations.includes("Queer")}
//                     onChange={handleCheckboxChange}
//                   />
//                   <label className="text-[#374151] pr-8 pb-1">Queer</label>
//                 </div>
//                 <div>
//                   <input
//                     className="mr-2"
//                     type="checkbox"
//                     name="trauma"
//                     value="Trauma"
//                     checked={selectedSpecializations.includes("Trauma")}
//                     onChange={handleCheckboxChange}
//                   />
//                   <label className="text-[#374151] pr-8 pb-1">Trauma</label>
//                 </div>
//                 <div>
//                   <input
//                     className="mr-2"
//                     type="checkbox"
//                     name="other"
//                     value="Other"
//                     checked={selectedSpecializations.includes("Other")}
//                     onChange={handleCheckboxChange}
//                   />
//                   <label className="text-[#374151] pr-8 pb-1">Other</label>
//                 </div>
//               </fieldset>
//             </div>

//             {/* Reference */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Reference*
//               </label>
//               <input
//                 type="text"
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 value={reference}
//                 placeholder="Provide Name of One Professional Reference"
//                 onChange={(e) => setReference(e.target.value)}
//                 required
//               />
//             </div>
//             {/* Reference Contact */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Reference Contact*
//               </label>
//               <input
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 type="text"
//                 placeholder="Provide Email or Mobile Number of the Reference"
//                 value={referenceContact}
//                 onChange={(e) => setReferenceContact(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           {/* Banking Information */}
//           <div className="mb-8">
//             <div className="mb-2 text-xl font-medium">Banking Information</div>
//             {/* PAN */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 PAN Number*
//               </label>
//               <input
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 type="text"
//                 value={pan}
//                 onChange={(e) => setPan(e.target.value)}
//                 required
//               />
//             </div>
//             {/* Upload PAN Card */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Upload PAN Card*
//               </label>
//               <input
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 type="file"
//                 onChange={(e) => setPanFile(e.target.files[0])}
//                 required
//               />
//             </div>
//             {/* Aadhar Number */}
//             <div className="money">
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Aadhar Number*
//               </label>
//               <input
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 type="number"
//                 value={aadhar}
//                 onChange={(e) => setAadhar(e.target.value)}
//                 required
//               />
//             </div>
//             {/* Upload Aadhar Card */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Upload Aadhar Card (Front and Back)*
//               </label>
//               <input
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 type="file"
//                 onChange={(e) => setAadharFile(e.target.files[0])}
//                 required
//               />
//             </div>
//             {/* Account Name */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Account Name*
//               </label>
//               <input
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 placeholder="Exact Ac Holder Name As Per Bank Records"
//                 type="text"
//                 value={accountName}
//                 onChange={(e) => setAccountName(e.target.value)}
//                 required
//               />
//             </div>
//             {/* Account Number */}
//             <div className="money">
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Account Number*
//               </label>
//               <input
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 type="number"
//                 value={accountNumber}
//                 onChange={(e) => setAccountNumber(e.target.value)}
//                 required
//               />
//             </div>
//             {/* Bank Name */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Bank Name*
//               </label>
//               <input
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 type="text"
//                 value={bankName}
//                 onChange={(e) => setBankName(e.target.value)}
//                 required
//               />
//             </div>
//             {/* Branch Name */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Branch Name*
//               </label>
//               <input
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 type="text"
//                 value={branchName}
//                 onChange={(e) => setBranchName(e.target.value)}
//                 required
//               />
//             </div>
//             {/* IFSC */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 IFSC*
//               </label>
//               <input
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 type="text"
//                 value={ifsc}
//                 onChange={(e) => setIfsc(e.target.value)}
//                 required
//               />
//             </div>
//             {/* Account Type */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Account Type*
//               </label>
//               <select
//                 className="md:w-3/5 w-full bg-white p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 value={accountType}
//                 onChange={(e) => setAccountType(e.target.value)}
//                 required
//               >
//                 <option value="">Select Account Type</option>
//                 <option value="Savings">Savings</option>
//                 <option value="Current">Current</option>
//               </select>
//             </div>
//             {/* Upload Cancelled Cheque */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Upload Cancelled Cheque/Passbook Front Page*
//               </label>
//               <input
//                 className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 type="file"
//                 onChange={(e) => setChequeFile(e.target.files[0])}
//                 required
//               />
//             </div>
//           </div>

//           {/* General Information */}
//           <div className="mb-8">
//             <div className="mb-2 text-xl font-medium">General Information</div>
//             {/* Preferred Timings */}
//             {/* <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Preferred Timings (IST)*
//               </label>
//               <input
//                 className="md:w-3/5 w-full bg-white p-2 rounded-sm border border-[#d1d5db] w-max-[20rem]"
//                 value={preferredTimings}
//                 placeholder="9AM to 9PM / 9PM to 9AM"
//                 onChange={(e) => setPreferredTimings(e.target.value)}
//                 required
//               />
//             </div> */}

//             {/* Preferred Timings */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Preferred Timings (IST)*
//               </label>
//               <div>
//                 <input
//                   type="checkbox"
//                   id="morning"
//                   value="9am to 9pm"
//                   checked={preferredTimings.includes("9am to 9pm")}
//                   onChange={(e) =>
//                     setPreferredTimings((prevTimings) =>
//                       e.target.checked
//                         ? [...prevTimings, e.target.value]
//                         : prevTimings.filter(
//                             (timing) => timing !== e.target.value
//                           )
//                     )
//                   }
//                 />
//                 <label htmlFor="morning" className="ml-2">
//                   9am to 9pm
//                 </label>
//               </div>
//               <div>
//                 <input
//                   type="checkbox"
//                   id="evening"
//                   value="9pm to 9am"
//                   checked={preferredTimings.includes("9pm to 9am")}
//                   onChange={(e) =>
//                     setPreferredTimings((prevTimings) =>
//                       e.target.checked
//                         ? [...prevTimings, e.target.value]
//                         : prevTimings.filter(
//                             (timing) => timing !== e.target.value
//                           )
//                     )
//                   }
//                 />
//                 <label htmlFor="evening" className="ml-2">
//                   9pm to 9am
//                 </label>
//               </div>
//             </div>
//             {/* Preferred Language */}
//             {/* Languages You're Proficient with for Taking Sessions */}
//             <div>
//               <label className="block text-[#374151] mt-4 pr-8 pb-1">
//                 Languages You're Proficient with for Taking Sessions*
//               </label>
//               <div>
//                 <input
//                   type="checkbox"
//                   id="english"
//                   value="English"
//                   checked={languages.includes("English")}
//                   onChange={(e) =>
//                     setLanguages((prevLanguages) =>
//                       e.target.checked
//                         ? [...prevLanguages, e.target.value]
//                         : prevLanguages.filter(
//                             (lang) => lang !== e.target.value
//                           )
//                     )
//                   }
//                 />
//                 <label htmlFor="english" className="ml-2">
//                   English
//                 </label>
//               </div>
//               <div>
//                 <input
//                   type="checkbox"
//                   id="hindi"
//                   value="Hindi"
//                   checked={languages.includes("Hindi")}
//                   onChange={(e) =>
//                     setLanguages((prevLanguages) =>
//                       e.target.checked
//                         ? [...prevLanguages, e.target.value]
//                         : prevLanguages.filter(
//                             (lang) => lang !== e.target.value
//                           )
//                     )
//                   }
//                 />
//                 <label htmlFor="hindi" className="ml-2">
//                   Hindi
//                 </label>
//               </div>
//               <div>
//                 <input
//                   type="checkbox"
//                   id="other"
//                   value="Other"
//                   checked={languages.includes("Other")}
//                   onChange={(e) => {
//                     if (e.target.checked) {
//                       setLanguages([...languages, "Other"]);
//                       setOtherLanguage(""); // Reset other language field when "Other" is checked
//                     } else {
//                       setLanguages(
//                         languages.filter((lang) => lang !== "Other")
//                       );
//                       setOtherLanguage(""); // Reset other language field when "Other" is unchecked
//                     }
//                   }}
//                 />
//                 <label htmlFor="other" className="ml-2 ">
//                   Other
//                   <br />
//                 </label>
//                 {languages.includes("Other") && (
//                   <input
//                     type="text"
//                     className="md:w-3/5 w-full p-2 rounded-sm border border-[#d1d5db] w-max-[20rem] mt-2"
//                     placeholder="Please specify other languages"
//                     value={otherLanguage}
//                     onChange={(e) => setOtherLanguage(e.target.value)}
//                     required
//                   />
//                 )}
//               </div>
//             </div>

//             {/* Consent */}
//             <div className="mt-4 mb-2">
//               <div className="mt-3 mb-1">
//                 <input className="mr-2" type="checkbox" required />
//                 <label>
//                   I give my consent to the Company to Use my data for account
//                   creation and for reference checks.
//                 </label>
//               </div>
//               <div className="mt-3 mb-1">
//                 <input className="mr-2" type="checkbox" required />
//                 <label>
//                   I give my consent to the Company to send notifications to my
//                   email and mobile number.
//                 </label>
//               </div>
//               <div className="mt-3 mb-1">
//                 <input className="mr-2" type="checkbox" required />
//                 <label>
//                   I have read the{" "}
//                   <a
//                     onClick={(e) => downloadDoc(e)}
//                     className="text-blue-600 underline cursor-pointer"
//                   >
//                     Independent Contractors Agreement
//                   </a>{" "}
//                   between the Company and myself and expressly agree to the
//                   terms of the agreement.
//                 </label>
//               </div>
//               <div className="mt-3 mb-1">
//                 <input className="mr-2" type="checkbox" required />
//                 <label>
//                   After submitting this Form, I understand that I have given
//                   consent to the Company to on-board me as an Independent
//                   Psychologist for Asmi, mobile application, in accordance to
//                   the Agreement mentioned above.
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="mb-8">
//             <button
//               type="submit"
//               className="px-4 py-2 text-white rounded-md bg-primary03 hover:bg-primary05"
//               disabled={loading} // Disable button when loading
//             >
//               {loading
//                 ? "Submitting... Please wait, it will take some mins"
//                 : "Submit"}
//             </button>
//           </div>
//         </form>
//       </div>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//     </Fragment>
//   );
// };

// export default OnboardingForm;

import React from "react";

const Test = () => {
  return <div>Test</div>;
};

export default Test;
