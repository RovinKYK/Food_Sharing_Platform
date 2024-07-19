import { AccountType } from "../constants/types";

interface Props {
  accountType: AccountType;
}

const SignUpForm = ({ accountType }: Props) => {
  return <h1>{accountType}</h1>;
};

export default SignUpForm;
