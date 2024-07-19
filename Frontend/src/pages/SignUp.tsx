import { useState } from "react";
import LogInBackground from "../components/LogInBackground";
import SignUpMethodBox from "../components/SignUpMethodBox";
import SignUpForm from "../components/SignUpForm";

const SignUpPage = () => {
  const [accountType, setAccountType] = useState("");

  const handlePersonalAccClick = () => setAccountType("Personal");
  const handleShopAccClick = () => setAccountType("Shop");
  const handleOrgAccClick = () => setAccountType("Org");

  return (
    <LogInBackground>
      {!accountType ? (
        <SignUpMethodBox
          oNPersonalAccClick={handlePersonalAccClick}
          oNShopAccClick={handleShopAccClick}
          oNOrgAccClick={handleOrgAccClick}
        />
      ) : (
        <SignUpForm accountType={accountType} />
      )}
    </LogInBackground>
  );
};

export default SignUpPage;
