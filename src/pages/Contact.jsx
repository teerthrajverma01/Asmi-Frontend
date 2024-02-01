import React, { useRef, useState } from "react";

import image4 from "../assets/image/image4.png";
import BASE_URL from "../apis/Config";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [recipient_email, setEmail] = useState("");
  const [message, setMessages] = useState("");

  const sendMail = async (event) => {
    event.preventDefault();

    if (recipient_email && message) {
      try {
        const response = await fetch(`${BASE_URL}/send-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recipient_email,
            message,
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        // Reset input fields
        setUserName("");
        setEmail("");
        setMessages("");
      } catch (error) {
        console.error("Error sending mail:", error);
        // Handle error (e.g., display error message to user)
      }
    }
  };

  return (
    <>
      <div className="container px-[5%] mx-auto">
        <section className="w-full mx-auto mt-8 max-w-7xl md:mt-28">
          <div className="grid gap-y-6 md:grid-cols-2">
            <div className="flex flex-col max-w-[90%]">
              <div className="px-2 py-1 mb-4 border border-solid rounded-md border-neutral-900 max-w-fit">
                Contact us
              </div>
              <div className="font-sans text-4xl font-semibold md:my-1">
                We are here to Help
              </div>

              <form onSubmit={sendMail} className="flex flex-col">
                <label className="mt-4 text-gray-700 md:mb-4">Name</label>
                <input
                  type="text"
                  value={userName}
                  required
                  onChange={(e) => setUserName(e.target.value)}
                  className="p-2 mb-8 text-gray-700 bg-white border border-gray-300 border-solid rounded min-h-12"
                />
                <label className="text-gray-700 md:my-4">Email</label>
                <input
                  type="email"
                  value={recipient_email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 mb-8 text-gray-700 bg-white border border-gray-300 border-solid rounded min-h-12"
                />
                <label className="text-gray-700 md:my-4">Message</label>
                <textarea
                  type="text"
                  value={message}
                  onChange={(e) => setMessages(e.target.value)}
                  placeholder="Type your message.."
                  className="p-2 mb-8 text-gray-700 bg-white border border-gray-300 border-solid rounded min-h-32"
                  required
                />

                <button
                  type="submit"
                  className="p-2 font-medium text-white transition ease-in-out rounded cursor-pointer bg-primary03 w-fit hover:bg-primary05"
                >
                  Send a Message
                </button>
              </form>
            </div>
            <div className="p-8 rounded-md bg-neutral-100 border-neutral-900 max-w-fit">
              <p className="mb-4">
                In the midst of the shadows that depression and anxiety cast
                upon your days, I want you to know that there is a resilient
                light within you that can pierce through the darkness. I
                understand that these struggles can make life feel like an
                uphill battle, but I urge you to recognize the strength that
                resides within your very being.
              </p>
              <p className="mb-4">
                You are not defined by your challenges; rather, you are shaped
                by the courage you summon to face them. Each day you navigate
                through the storm, you are a testament to your own resilience.
                Remember, it's okay to seek support; reaching out to loved ones
                or professionals is a sign of strength, not weakness.
              </p>
              {/* Add more paragraphs as needed */}

              <p className="mb-4">
                In moments when despair seems overwhelming, try to find solace
                in small victories. Celebrate the moments of peace, no matter
                how fleeting, and cherish the progress, no matter how
                incremental. Your journey is unique, and healing is not a linear
                path. Embrace the ups and downs as part of your transformative
                story. ​
              </p>
              <p className="mb-4">
                Surround yourself with compassion, and be gentle with yourself.
                Your worth is immeasurable, and your presence in this world is
                significant. You are not alone, and there is a community of
                understanding hearts ready to support you.
              </p>
              <p className="mb-4">
                As you navigate the complexities of mental health, remember that
                the clouds will eventually part, and the sun will shine again.
                Keep moving forward, one step at a time, and trust in the
                resilience that resides within you.
              </p>

              <p className="text-end">~ Asmi</p>
            </div>
          </div>

          <div className="mt-24 mb-12 text-lg text-center">
            <h1>Regd Address:</h1>
            <h1>
              C-77, 2nd floor, DDA Sheds Okhla Industrial Area 1, New Delhi
              110020
            </h1>
            <h1>Support: hello@asmi.life | +91-11-43054568</h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
