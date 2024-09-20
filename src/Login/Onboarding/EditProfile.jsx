/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import insta from "../../assets/I5.jpg";
import fb from "../../assets/I3.jpg";
import snap from "../../assets/I4.jpg";
import x from "../../assets/I1.jpg";
import yt from "../../assets/I2.png";
import { useNavigate } from "react-router-dom";

const PlatformComp = ({ setOnboardingVisibility }) => {
  const data = [
    {
      img: insta,
      title: "Connect to Instagram",
      url: "https://www.instagram.com", // URL for Instagram
    },
    {
      img: fb,
      title: "Connect to Facebook",
      url: "https://www.facebook.com", // URL for Facebook
    },
    {
      img: snap,
      title: "Connect to Snapchat",
      url: "https://www.snapchat.com", // URL for Snapchat
    },
    {
      img: x,
      title: "Connect to X",
      url: "https://www.twitter.com", // URL for X (formerly Twitter)
    },
    {
      img: yt,
      title: "Connect to YouTube",
      url: "https://www.youtube.com", // URL for YouTube
    },
  ];

  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const navigate = useNavigate(); // Hook to navigate to another route

  // Redirect function
  const handleRedirect = (url, platform) => {
    console.log(`You clicked on ${platform}`); // Log platform name
    // Perform any additional functionality here, like API calls, etc.
    window.open(url, "_blank"); // Open the link in a new tab
  };

  // Handle storing the data and redirecting on the "Next" button click
  const handleNext = () => {
    console.log("Selected platforms:", selectedPlatforms);

    // Store in localStorage (optional)
    localStorage.setItem(
      "selectedPlatforms",
      JSON.stringify(selectedPlatforms)
    );

    // Redirect to the next page (e.g., dashboard)
    navigate("/"); // You can replace '/dashboard' with your target URL
    setOnboardingVisibility(false);
  };

  return (
    <div className="w-[1440px] h-[895px] bg-[#D9D9D9] flex justify-center shrink-0">
      <div className="w-[710px] h-[790px] rounded-[10px] mt-[55px] bg-white shadow-[2px_4px_14px_2px_rgba(0,0,0,0.25)]">
        <div className="border-b-4 h-[78px] w-[710px]  pt-[48px] px-[24px] pb-[12px] border-[#0066ff] flex justify-between ">
          <h1 className="w-[105px] h-[18px] font-body font-semibold text-[14px] text-[#363939]">
            Step 4: Connect
          </h1>
          <h1 className="w-[24px] h-[18px] text-[14px] text-[#aeaeae] font-body font-normal">
            Exit
          </h1>
        </div>

        <div className="w-[606px] h-[60px] ml-11 mt-12">
          <h1 className="font-semibold font-body w-[606px] h-[30px] text-[24px] text-[#363939]">
            Connect your favourite Social Media!
          </h1>
          <h1 className="w-[606px] h-[20px] text-[16px] font-normal font-body mt-1 text-[#969696]">
            Show your brand on popular platforms
          </h1>
        </div>

        <div className="w-[584px] h-[391px] ml-16 mt-10">
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => handleRedirect(item.url, item.title)} // Pass platform title to handleRedirect
              className="cursor-pointer w-[584px] h-[59px] py-[18px] px-[24px] mt-6 bg-[#D1E3FF] rounded-[10px] flex justify-center gap-4"
            >
              <img
                src={item.img}
                className="w-[22px] h-[22px] rounded-[5px]"
                alt={item.title}
              />
              <p className="w-[212px] h-[23px] text-[18px] font-semibold font-body text-[#363939]">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-end mr-16">
          <button
            onClick={handleNext}
            className="w-[170px] h-[45px] px-[16px] bg-[#0066ff] rounded-[8px] text-[16px] font-normal font-body text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlatformComp;
