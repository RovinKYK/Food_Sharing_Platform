interface Props {
  accountType: string;
}

const SignUpForm = ({ accountType }: Props) => {
  return <h1>{accountType}</h1>;
};

export default SignUpForm;
