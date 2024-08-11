import { useRef, useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const ForgetPass2 = () => {

   const [otp, setOtp] = useState(["", "", "", ""]);
   const inputsRef = useRef([]);


  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 3) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="px-[35px]">
      <Link to={"/forgotpass"}>
        <div className=" flex item-center mt-[50px] ">
          <h2 className="text-[#000000] text-[16px]">
            {" "}
            <FiChevronLeft className="inline-block mb-0.5" /> Back
          </h2>
        </div>
      </Link>
      <div className="w-[500px] h-[400px] text-black flex flex-col space-y-9 pt-[111px]">
        <p className="text-[#000000] text-[34px]">
          Enter Your Code
          <div className="flex flex-row space-x-2">
            <h4 className="text-lg text-[#8E9090] text-[16px]  ">
              {" "}
              We’ve sent you code at
            </h4>
            <h1 className="text-lg text-[#0066FF] text-[16px]  ">
              {" "}
              98XXXXX112 or Holly@gmail.com{" "}
            </h1>
          </div>
        </p>
        <div className="flex space-x-5 mb-4 size-[55px] ">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              value={value}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength="1"
              className="w-[50px] h-[50px]  rounded-[14px] border border-[#363939] text-center text-[24px] font-semibold focus:outline-none"
              ref={(el) => (inputsRef.current[index] = el)}
            />
          ))}
        </div>
        <div className="flex flex-row space-x-2">
          <h4 className="text-lg text-[#000000] text-[16px]  ">
            Didn’t receive the Message?
          </h4>
          <h1 className="text-lg text-[#0066FF]  ">Resend </h1>
        </div>
        <div className="flex flex-col space-y-8  ">
          <div className="flex flex-col bg-[#0066FF] text-center rounded-[10px] border-[#363939] my-[16px]">
            <Link to={"/forgotpass3"}>
              <button className="text-[#FFFFFF] text-[18px] text-center w-full px-[16px] h-[50px] rounded-md gap-[8px] ">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass2;
