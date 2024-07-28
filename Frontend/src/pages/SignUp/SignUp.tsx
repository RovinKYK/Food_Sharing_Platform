import { useState } from "react";
import { AccountType } from "../../constants/types";
import LogInBackground from "../../components/LogInBackground";
import SignUpMethodBox from "./components/SignUpMethodBox";
import SignUpForm from "./components/SignUpForm";
import RegisterSuccessBox from "./components/RegisterSuccessBox";
import { FormEvent } from "react";
import getStyles from "./styles";

const SignUpPage = () => {
  const styles = getStyles();
  const [accountType, setAccountType] = useState<AccountType | "">("");
  const [accountCreated, setAccountCreated] = useState(false);

  const handlePersonalAccClick = () => setAccountType("Personal");
  const handleShopAccClick = () => setAccountType("Shop");
  const handleOrgAccClick = () => setAccountType("Organization");

  const handleFormBackClick = () => setAccountType("");
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDataObject: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value.toString();
    });
    console.log(formDataObject);
    setAccountCreated(true);
  };

  return (
    <LogInBackground>
      {accountCreated ? (
        <RegisterSuccessBox />
      ) : !accountType ? (
        <SignUpMethodBox
          oNPersonalAccClick={handlePersonalAccClick}
          oNShopAccClick={handleShopAccClick}
          oNOrgAccClick={handleOrgAccClick}
          styles={styles.SignUpMethodBox}
        />
      ) : (
        <SignUpForm
          accountType={accountType}
          onBackClick={handleFormBackClick}
          onFormSubmit={handleFormSubmit}
        />
      )}
    </LogInBackground>
  );
};

export default SignUpPage;
