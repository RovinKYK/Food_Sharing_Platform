import { useState } from "react";
import { AccountType } from "../../constants/types";
import LogInBackground from "../../components/LogInBackground";
import SignUpMethodBox from "./components/SignUpMethodBox";
import SignUpForm from "./components/SignUpForm";
import getStyles from "./styles";

const SignUpPage = () => {
  const styles = getStyles();
  const [accountType, setAccountType] = useState<AccountType | "">("");

  const handlePersonalAccClick = () => setAccountType("Personal");
  const handleShopAccClick = () => setAccountType("Shop");
  const handleOrgAccClick = () => setAccountType("Organization");

  return (
    <LogInBackground>
      {!accountType ? (
        <SignUpMethodBox
          oNPersonalAccClick={handlePersonalAccClick}
          oNShopAccClick={handleShopAccClick}
          oNOrgAccClick={handleOrgAccClick}
          styles={styles.SignUpMethodBox}
        />
      ) : (
        <SignUpForm accountType={accountType} />
      )}
    </LogInBackground>
  );
};

export default SignUpPage;
