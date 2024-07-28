import { TextField } from "@mui/material";

interface Props {
  invalidMsg?: string;
  label: string;
  name: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
}

const FormReqField = ({ invalidMsg, label, name, onChange, type }: Props) => {
  const handleInvalid = (event: React.FormEvent<HTMLDivElement>) => {
    if (!invalidMsg) invalidMsg = "This field is required";
    const target = event.target as HTMLInputElement;
    target.setCustomValidity(invalidMsg);
  };

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    target.setCustomValidity("");
  };
  return (
    <TextField
      name={name}
      required
      fullWidth
      label={label}
      variant="standard"
      type={type}
      onInvalid={handleInvalid}
      onInput={handleInput}
      onChange={onChange}
    />
  );
};

export default FormReqField;
