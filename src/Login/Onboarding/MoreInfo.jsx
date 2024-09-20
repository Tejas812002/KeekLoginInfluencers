import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MoreInfo = () => {
  const navigate = useNavigate();

  const [moreInfo, setMoreInfo] = useState({
    detailstext: "",
    summarytext: "",
  });

  const getWordCount = (text) => {
    return text.trim().split(/\s+/).length;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (getWordCount(value) <= 500) {
      setMoreInfo({ ...moreInfo, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(moreInfo);
    navigate("/Platform");
  };

  return (
    <div className="min-w-[1440px] w-screen h-[895px] bg-[#D9D9D9] flex justify-center shrink-0">
      <form onSubmit={handleSubmit} className="mt-[55px]">
        <div className="bg-[#FFFFFF] w-[710px] h-[790px] rounded-[14px] relative">
          <div className="h-[82px] pt-[48px] pl-[24px] pb-[12px] pr-[24px] flex justify-between">
            <h4 className="w-[204px] h-[18px] text-sm  font-semibold text-[#363939]">
              Step 3: Additional Information
            </h4>
            <button className="text-[#AEAEAE] text-sm font-normal">Exit</button>
          </div>
          <div className="flex h-1 self-stretch bg-[#EAEAEA] relative">
            <div className="absolute w-[75%] h-full bg-[#06f]"></div>
          </div>
          <div className="mx-[52px]">
            <div className="w-[606px] h-[60px] mt-[40px] gap-y-[10px] flex flex-col mx-12 ">
              <h2 className="w-[606px] h-[30px] font-semibold text-2xl text-[#363939]">
                More Details
              </h2>
              <p className="w-[606px] h-[20px] text-[#969696] text-base font-normal">
                Tell us more about yourself
              </p>
            </div>
            <div className="mt-[44px]">
              <textarea
                className="border-[#969696] border-[0.7px] w-[606px] h-[193px] py-[19px] px-[20px] rounded-lg placeholder-[#6E6E6E] placeholder:font-normal  placeholder:text-[16px]"
                name="detailstext"
                value={moreInfo.detailstext}
                onChange={(e) => handleChange(e)}
                placeholder="About your brand"
              ></textarea>
              <div className="text-end">
                <p className=" text-[#6E6E6E] text-xs font-normal ">
                  {`${getWordCount(moreInfo.detailstext)} / 500 words`}
                </p>
              </div>
            </div>

            <div className="absolute right-[52px] bottom-10">
              <button
                type="submit"
                className="w-[170px] h-[45px] rounded-lg px-[16px] bg-[#0066FF] text-[#FFFFFF] text-center text-base font-normal"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MoreInfo;
