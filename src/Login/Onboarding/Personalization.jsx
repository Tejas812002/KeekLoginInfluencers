import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Onboarding = () => {
  const [formData, setFormData] = useState({
    dob: "",
    gender: "",
    city: "",
  });
  const [errors, setErrors] = useState({
    dob: "",
    gender: "",
    city: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    // Validate Date of Birth
    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    } else {
      const inputDate = new Date(formData.dob);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Normalize today's date to remove time part

      if (isNaN(inputDate.getTime())) {
        newErrors.dob = "Invalid date format";
      } else if (inputDate > today) {
        newErrors.dob = "Date of Birth cannot be in the future";
      }
    }

    // Validate Gender
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    // Validate City
    if (!formData.city) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data:", formData);
      // Navigate to another route after successful form submission
      navigate("/category");
    }
  };

  return (
    <div className="w-[1440px] h-[895px] bg-[#D9D9D9] flex items-center justify-center shrink-0">
      <div className="w-[710px] h-[790px] bg-white rounded-[14px] relative">
        <div className="flex justify-between pt-[48px] px-6 pb-3">
          <h3>step 1: Personalization</h3>
          <button>Exit</button>
        </div>
        <div className="flex h-1 self-stretch bg-[#EAEAEA] relative">
          <div className="absolute w-[25%] h-full bg-[#06f]"></div>
        </div>
        <form
          className="mt-9 mx-[52px] flex flex-col items-start"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold">Add a photo</h2>
          <p className="text-[#969696]">
            Please upload a photo, this allows Brands to know who you are and
            get in contact with you.
          </p>
          <div className="mt-6 w-full">
            <div className="flex gap-[42px] items-center">
              <div className="w-[110px] h-[110px] rounded-full bg-[#F6F6F6] flex items-center justify-center">
                <FiUser className="text-[#8D8D8D] h-[50px] w-[50px]" />
                <img src="" alt="" />
              </div>
              <label htmlFor="profile">
                <div className="w-[203px] h-[50px] px-4 flex items-center justify-center border rounded-lg border-[#384EDD] bg-[#FFF] cursor-pointer">
                  upload my photo
                </div>
              </label>
              <input className="sr-only" type="file" id="profile" />
            </div>
          </div>
          <div
            className={`flex flex-col ${
              errors.dob || errors.gender || errors.city ? "gap-4" : "gap-6"
            }  w-full`}
          >
            <hr className="mt-[20px] w-full" />
            <div className="w-full">
              <label className="text-lg" htmlFor="dob">
                Date Of Birth
              </label>
              <input
                className="h-[45px] mt-[10px] px-5 py-[19px] w-full border rounded-lg border-[#969696]"
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
              {errors.dob && (
                <p className="text-sm text-red-600">{errors.dob}</p>
              )}
            </div>
            <div className="w-full relative">
              <label className="text-lg" htmlFor="gender">
                What is your Gender ?
              </label>
              <select
                className="h-[45px] mt-[10px] px-5 block  w-full border rounded-lg border-[#969696] text-[#6E6E6E]"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-sm text-red-600 ">{errors.gender}</p>
              )}
            </div>
            <div className="w-full">
              <label className="text-lg" htmlFor="city">
                Where do you live?
              </label>
              <select
                className="h-[45px] mt-[10px] px-5 block  w-full border rounded-lg border-[#969696] text-[#6E6E6E]"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              >
                <option value="">Select City</option>
                <option value="new delhi">New Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="nagpur">Nagpur</option>
              </select>
              {errors.city && (
                <p className="text-sm text-red-600">{errors.city}</p>
              )}
            </div>
          </div>
          <div className="absolute right-[52px] bottom-[20px] flex justify-end">
            <button
              type="submit"
              className="flex w-[170px] h-[45px] px-4 justify-center items-center rounded-lg bg-[#06f] text-white"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Onboarding;
