/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unreachable */
import { Route, Routes } from "react-router-dom";
import ImagePanel from "./Login/Components/ImagePanel";
import LoginPage from "./Login/Components/LoginPage";
import SignUpPage from "./Login/Components/SignUpPage";
import MobileSignUpPage from "./Login/Components/MobileSignUpPage";
import VerifyNumber from "./Login/Components/VerifyNumber";
import ForgetPass1 from "./Login/Components/ForgetPass1";
import ForgetPass2 from "./Login/Components/ForgetPass2";
import ForgetPass3 from "./Login/Components/ForgetPass3";
import Personalization from "./Login/Onboarding/Personalization";
import Category from "./Login/Onboarding/Categoey";
import MoreInfo from "./Login/Onboarding/MoreInfo";
import PlatformComp from "./Login/Onboarding/EditProfile";
import { useState } from "react";
const App = () => {
  const [onboardingVisibility, setOnboardingVisibility] = useState(false);

  return (
    <>
      {onboardingVisibility ? (
        <Routes>
          <Route path="/personaliz" element={<Personalization />} />
          <Route path="/category" element={<Category />} />
          <Route path="/moreInfo" element={<MoreInfo />} />
          <Route
            path="/Platform"
            element={
              <PlatformComp setOnboardingVisibility={setOnboardingVisibility} />
            }
          />
        </Routes>
      ) : (
        <div className="flex w-[1440px] h-screen max-h-[895px] font-openSans">
          <div>
            <ImagePanel />
          </div>
          <div className="ml-[850px]">
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route
                path="/signup"
                element={
                  <SignUpPage
                    setOnboardingVisibility={setOnboardingVisibility}
                  />
                }
              />
              <Route path="/mobilesignup" element={<MobileSignUpPage />} />
              <Route path="/verifynumber" element={<VerifyNumber />} />
              <Route path="/forgotpass" element={<ForgetPass1 />} />
              <Route path="/forgotpass2" element={<ForgetPass2 />} />
              <Route path="/forgotpass3" element={<ForgetPass3 />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
