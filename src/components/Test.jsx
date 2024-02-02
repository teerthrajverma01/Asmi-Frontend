import React from "react";

const Test = () => {
  const testroute = async () => {
    const res = await fetch("http://13.233.9.241:4001");

    console.log(res);

    // console.log(res.json());
  };

  return (
    <div>
      <button
        className="my-32 bg-primary03 hover:bg-primary05"
        onClick={testroute}
      >
        Get connected
      </button>
    </div>
  );
};

export default Test;
