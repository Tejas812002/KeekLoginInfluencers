/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = ({ setOnboardingVisibility }) => {
  const [shoPass, setShowPass] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [termsChecked, setTermsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track form submission
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!password || password.length < 8) errors.password = "Password must be at least 8 characters";

    return errors;
  };

  const handleSignup = () => {
    setIsSubmitted(true); // Mark form as submitted
    const errors = validateForm();
    if (Object.keys(errors).length === 0 && termsChecked) {
      navigate("/personaliz");
      setOnboardingVisibility(true);
    } else {
      setFormErrors(errors);
    }
  };


  return (
    <div>
      <div className="ml-11 mt-[19px]">
        <h1 className="">
          <span className="font-semibold text-[31px] text-[#384EDD]">
            Sign up |{" "}
          </span>
          <span className="text-[21px]">Influencer</span>
        </h1>
        <div className="mb-[16px] mt-2">
          <p className="text-[#8E9090]">
            Welcome to Keek, please enter your data to create your account.
          </p>
        </div>
        <div className="flex items-center gap-5 mb-[29px]">
          <button className="border relative h-[43px] py-[12px] px-[122px] rounded-lg flex items-center">
            <FcGoogle className="text-2xl mr-3 absolute left-1/3" />{" "}
            <span className="absolute left-1/2">Google</span>
          </button>
          <Link to={"/mobilesignup"}>
            <button className="border relative h-[43px] py-[12px] px-[122px] rounded-lg flex items-center">
              <FaMobileAlt className="text-2xl mr-3 absolute left-10 opacity-50" />
              <span className="absolute left-[80px]">Mobile number</span>
            </button>
          </Link>
        </div>
        <div className="flex items-center mb-[17px]">
          <hr className="w-1/2 text-[#B1B2B2] " />
          <span className="px-6 text-sm text-[#B1B2B2]">OR</span>
          <hr className="w-1/2 text-[#B1B2B2]" />
        </div>
        <div>

           <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="mb-5">
          <label htmlFor="" className="block">
            Name<span className="text-[#06F]">*</span>
          </label>
          <input
            className="border h-[44px] border-[#363939] px-5 py-3 w-[500px] rounded-lg"
            type="text"
            name="name"
            placeholder="John Doe"
            required
          />
          {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
        </div>
        <div className="mb-5">
          <label htmlFor="" className="block">
            Email<span className="text-[#06F]">*</span>
          </label>
          <input
            className="border h-[44px] border-[#363939] px-5 py-3 w-[500px] rounded-lg"
            type="email"
            name="email"
            placeholder="John.doe@gmail.com"
            required
          />
          {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
        </div>
        <div className="relative">
          <label htmlFor="" className="block">
            Password<span className="text-[#06F]">*</span>
          </label>
          <input
            className="border h-[44px] border-[#363939] px-5 py-3 w-[500px] rounded-lg"
            type={`${shoPass ? "text" : "password"}`}
            name="password"
            placeholder="Password"
            required
          />
          {formErrors.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}
          <div
            onClick={() => {
              setShowPass(!shoPass);
            }}
            className="absolute top-1/2 right-6 pl-3 flex items-center"
          >
            {shoPass ? (
              <IoEyeOutline className="text-2xl opacity-50" />
            ) : (
              <BsEyeSlash className="text-2xl opacity-50" />
            )}
          </div>
        </div>
        <div className="mb-[26px] mt-1.5 text-[#8E9090] text-sm">
          Must be at least 8 characters.
        </div>
        <div className="mb-7">
          <input
            type="checkbox"
            id="term"
            className="mr-2"
            onChange={(e) => setTermsChecked(e.target.checked)}
          />
          <label htmlFor="term">
            I Agree to <span className="text-[#06F]">Terms & Condition</span>
          </label>
          {/* Only show the error after form submission */}
          {isSubmitted && !termsChecked && (
            <p className="text-red-500 text-sm">You must agree to the terms and conditions</p>
          )}
        </div>
        <div className="mb-[22px]">
          <button
            onClick={handleSignup}
            type="submit"
            className="w-full text-center text-white py-4 rounded-[10px] bg-[#0066FF]"
          >
            Sign up
          </button>
        </div>
      </form>

          <div className="mb-[21px]">
            <hr className="text-[#B1B2B2]" />
          </div>
          <div className="text-center mb-[21px]">
            Already Have an account? &nbsp;
            <Link to={"/"}>
              <span className="text-[#06F]">Login</span>
            </Link>
          </div>
          <div className="text-center">
            Want to Sign up as a creator? &nbsp;
            <a href="https://keek-login.vercel.app/">
              <span className="text-[#06F]">
                Brand page
                <RiArrowRightUpLine className="inline-block text-lg text-[#06F]" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
