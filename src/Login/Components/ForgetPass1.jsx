import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const ForgetPass1 = () => {
  return (
    <div>
      <div className="px-[35px]">
        <Link to={"/"}>
          <div className=" flex item-center mt-[50px] ">
            <h2 className="text-[#000000] text-[16px]">
              <FiChevronLeft className="inline-block mb-0.5 mr-1" />
              Back
            </h2>
          </div>
        </Link>

        <div className="w-[500px] h-[400px] text-black flex flex-col space-y-9 pt-[111px]">
          <p className="text-[#000000] text-[34px]">
            Forgot Password?
            <p className="text-[#8E9090] text-base ">
              No worries, We’ll send you reset instructions
            </p>
          </p>
          <div className="flex flex-col">
            <h4 className="text-lg text-[#000000] pb-[8px]">
              Enter Email or Mobile Number
            </h4>
            <input
              type="email"
              className="w-full bg-transparent rounded-md border py-[16px] px-[14px] border-[#000000]"
              placeholder="Enter Email or Mobile Number "
            />
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col bg-[#0066FF] text-center rounded-[10px] border-[#363939] my-[16px]">
              <Link to={"/forgotpass2"}>
                <button className="text-[#FFFFFF] text-center w-full px-[16px] h-[50px] rounded-md gap-[8px] ">
                  Send 4-digit code
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass1;
