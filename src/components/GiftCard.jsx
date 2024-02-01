import React, { useState } from "react";

import giftImg from "../assets/image/gift.jpeg";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

import BASE_URL from "../apis/Config";

const GiftCard = () => {
  const [userEmail, setUserEmail] = useState("");
  const [recipientEmail, setrecipientEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [recipientName, setRecipentName] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [message, setMessage] = useState("");
  const [isMyself, setIsMyself] = useState(true);

  // payment-----------------------------
  const paymentHandler = async (event) => {
    event.preventDefault();

    const amount = 500;
    const currency = "INR";
    const receiptID = "qwsaq1";

    const response = await fetch(`${BASE_URL}/order`, {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptID,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const order = await response.json();
    console.log(order);

    if (isMyself) {
      setRecipentName("");
      setrecipientEmail("");
      setMessage("");
    }

    const razorpayKey = await fetch(`${BASE_URL}/getKey`);

    const razorpayKeyData = await razorpayKey.json();

    var options = {
      key: razorpayKeyData.key, // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "Asmi Health", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const data = {
          // orderCreationId: order.id,
          userName: userName,
          userEmail: userEmail,
          recipientName: recipientName,
          recipientEmail: recipientEmail,
          deliveryDate: deliveryDate,
          userMessage: message,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        };

        const result = await fetch(`${BASE_URL}/order/validate`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const responseData = await result.json();

        if (result.ok) {
          alert(`Success!   Order ID: ${responseData.orderId}`);
        } else {
          alert(responseData.msg);
        }
      },
      prefill: {
        // name: "", //your customer's name
        // email: "gaurav.kumar@example.com",
        // contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
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
  // end of payment-----------------------------

  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const amount = 650 * quantity;

  return (
    <>
      <div className="container px-[5%] mx-auto">
        <div className="w-full mx-auto max-w-7xl py-28">
          <section className="text-xl">
            <div className="grid items-center md:grid-cols-2 gap-x-20 gap-y-16 auto-cols-auto">
              <div className="flex flex-col items-center w-full h-full rounded-xl">
                <img src={giftImg} alt="" />
              </div>
              <div className=" w-full max-w-[35rem]">
                <div className="text-5xl font-semibold leading-[1.2] font-sans text-neutral-900">
                  Gift Card
                </div>
                <div className="text-4xl my-4 font-medium leading-[1.2] font-sans text-neutral-900">
                  ₹650
                </div>
                <p className="text-xl">
                  The best Gift you can give your loved ones this festive
                  season, is a window to happiness! Gift them a free counselling
                  session today!
                </p>
                <form className="mt-8" onSubmit={paymentHandler}>
                  <div className="grid grid-cols-2 mt-6">
                    <div>
                      <h1>Amount</h1>
                      <div className="bg-[#e8effd] border-[#1a6aff] border w-fit px-2 py-1 ">
                        ₹{amount}
                      </div>
                    </div>
                    <div>
                      <h1>Quantity</h1>
                      <div className="flex gap-2 px-3 py-1 border border-black opacity-90 w-fit">
                        <button onClick={handleDecrease}>
                          <FiMinus />
                        </button>
                        <span>{quantity}</span>
                        <button onClick={handleIncrease}>
                          <FiPlus />
                        </button>
                      </div>
                    </div>
                  </div>

                  <h1 className="mt-6">Who's the gift card for?</h1>
                  <div className="grid grid-cols-2 my-2 gap-x-2">
                    <div
                      onClick={() => setIsMyself(false)}
                      className={
                        "px-5 py-2 text-center border cursor-pointer " +
                        (!isMyself
                          ? "bg-[#e8effd] border-[#1a6aff]"
                          : "border-black")
                      }
                    >
                      For someone else
                    </div>
                    <div
                      onClick={() => setIsMyself(true)}
                      className={
                        "px-5 py-2 text-center border cursor-pointer " +
                        (isMyself
                          ? "bg-[#e8effd] border-[#1a6aff]"
                          : "border-black")
                      }
                    >
                      For myself
                    </div>
                  </div>

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
                  {!isMyself && (
                    <div>
                      <label className="block my-1">Recipient Name*</label>
                      <input
                        type="text"
                        className="block w-full p-2 mb-6 bg-white border border-black border-solid min-h-12"
                        value={recipientName}
                        onChange={(e) => setRecipentName(e.target.value)}
                        required
                      />

                      <label className="block my-1 ">Recipient Email*</label>
                      <input
                        type="email"
                        className="block w-full p-2 mb-4 bg-white border border-black border-solid min-h-12"
                        value={recipientEmail}
                        onChange={(e) => setrecipientEmail(e.target.value)}
                        required
                      />

                      <label className="block my-1">Message*</label>
                      <textarea
                        value={message}
                        placeholder="Type your message.."
                        className="w-full p-2 mb-4 bg-white border border-black border-solid rounded min-h-32"
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  )}

                  <button className="w-full p-3 text-white transition transform bg-black hover:bg-neutral-900">
                    Buy now
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default GiftCard;
