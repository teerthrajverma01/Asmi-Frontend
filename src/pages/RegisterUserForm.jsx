import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import BASE_URL from "../apis/Config";
import SubmissionSuccesful from "../components/SubmissionSuccesful";

const RegisterUserForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [amount, setAmount] = useState(99);

  const navigate = useNavigate();

  const { assessmenttype } = useParams();

  // payment-----------------------------
  const paymentHandler = async (event) => {
    event.preventDefault();

    const currency = "INR";
    const payingAmount = amount * 100;

    console.log(payingAmount);

    const response = await fetch(`${BASE_URL}/order`, {
      method: "POST",
      body: JSON.stringify({
        amount: payingAmount,
        currency,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const order = await response.json();
    // console.log(order);

    const razorpayKey = await fetch(`${BASE_URL}/getKey`);

    const razorpayKeyData = await razorpayKey.json();

    const options = {
      key: razorpayKeyData.key, // Enter the Key ID generated from the Dashboard
      amount: payingAmount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "Asmi Health", //your business name
      description: "Gift Card",
      image:
        "https://res.cloudinary.com/dhlmdbx4t/image/upload/v1710864005/logo_hliyyv.png",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const data = {
          // orderCreationId: order.id,
          username: userName,
          email: userEmail,
          assessmentCategory: assessmenttype,

          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        };

        const result = await fetch(`${BASE_URL}/aru/postuser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const responseData = await result.json();

        if (result.ok) {
          // toast.success(`Your Payment is Successful! Please Check your mail`);

          navigate("/payment-successful");
        } else {
          toast.error(responseData.msg);
        }
      },
      prefill: {
        name: userName, //your customer's name
        email: userEmail,
      },
      notes: {
        address: "",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.description);
    });

    rzp1.open();
  };
  // end of payment------------------------

  return (
    <>
      <div className="flex justify-center">
        <div className=" md:min-w-[35rem] py-28">
          <section className="text-xl">
            <div className=" w-full max-w-[35rem]">
              <div className="text-5xl font-semibold leading-[1.2] font-sans text-neutral-900 text-center">
                Buy the Assesment
              </div>
              <div className="mt-8">
                <div className="grid grid-cols-2 mt-6">
                  <div>
                    <h1>Amount</h1>
                    <div className="bg-[#e8effd] border-[#1a6aff] border w-fit px-2 py-1 ">
                      ₹{amount}
                    </div>
                  </div>
                </div>
                <form onSubmit={paymentHandler}>
                  <div>
                    <label className="block my-1">Your Name*</label>
                    <input
                      type="text"
                      className="block w-full p-2 mb-6 bg-white border border-black border-solid min-h-12"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block my-1 ">Your Email*</label>
                    <input
                      type="email"
                      className="block w-full p-2 mb-4 bg-white border border-black border-solid min-h-12"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      required
                    />
                  </div>

                  <button className="w-full p-3 text-white transition transform bg-black hover:bg-neutral-900">
                    Buy now
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default RegisterUserForm;
