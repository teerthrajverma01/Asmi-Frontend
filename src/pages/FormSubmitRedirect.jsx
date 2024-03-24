import React from "react";
import { Link, useParams } from "react-router-dom";

const FormSubmitRedirect = () => {
  const { result } = useParams();

  console.log(result);
  return (
    <>
      <div className="flex flex-col justify-center h-[90vh] ">
        {result === "positive" ? (
          <div className="flex justify-center align-middle ">
            <div className="max-w-sm sm:max-w-[70%] p-6 bg-white border border-gray-200 rounded-lg shadow ">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-red-400">
                You are warranted for further questioning and more comprehensive
                assessment.
              </h5>

              <p className="mt-8 mb-3 text-2xl font-normal text-gray-800 ">
                Please book a session with us
              </p>
              <Link
                to={"/contact-us"}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Contact Us
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex justify-center align-middle ">
            <div className="max-w-sm  sm:max-w-[70%]  p-6 bg-white border border-gray-200 rounded-lg shadow">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-green-800 ">
                You are not warranted for further assessment as per this
                questionnaire.
              </h5>

              <p className="mb-3 text-2xl font-normal text-gray-700 ">
                If you would still want to consult a counsellor, you're always
                welcome
              </p>
              <Link
                to={"/contact-us"}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Contact Us
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FormSubmitRedirect;
