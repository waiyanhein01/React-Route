import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [text, setText] = useState("");
  const nav = useNavigate();

  const handleToContact = () => {
    nav("/contact", { replace: true });
  };

  const handleInputDateTransfer = (e) => {
    setText(e.target.value);
  };

  const handleInputBtn = (e) => {
    e.preventDefault();
    setText("");
    nav('/contact', {state:{text}})
  };
  return (
    <div className=" flex flex-col justify-center items-center w-auto h-screen">
      <p>HomePage</p>
      <form>
        <div className=" space-x-3">
          <input
            value={text}
            onChange={handleInputDateTransfer}
            type="text"
            name="text"
            id="text"
            className=" border-2 border-gray-600 outline-none rounded-lg ps-3"
          />
          <button
            onClick={handleInputBtn}
            type="submit"
            className=" bg-gray-900 text-slate-50 rounded-lg hover:ring-2 ring-fuchsia-400 px-2 py-2 mt-3"
          >
            Submit
          </button>
        </div>
      </form>
      <button
        onClick={handleToContact}
        className=" bg-gray-900 text-slate-50 rounded-lg hover:ring-2 ring-fuchsia-400 px-2 py-2 mt-3"
      >
        Next to Contact
      </button>
    </div>
  );
};

export default HomePage;
