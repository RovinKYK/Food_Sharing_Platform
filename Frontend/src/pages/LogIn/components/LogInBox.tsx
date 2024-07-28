import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Grid } from "@mui/material";
import { FormEvent } from "react";
import FormReqField from "../../../components/FormReqField";

interface StyleProps {
  height: string;
  width: string;
  top: string;
  right: string;
}
interface Props {
  styles: StyleProps;
}

const LogInBox = ({ styles }: Props) => {
  const navigate = useNavigate();

  const handleCreateAccClick = () => {
    navigate("/signup");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDataObject: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value.toString();
    });
    console.log(formDataObject);
    navigate("/search");
  };

  return (
    <Box
      sx={{
        height: styles.height,
        width: styles.width,
        display: "flex",
        backgroundColor: "#FFFFFF",
        borderRadius: "16px",
        position: "absolute",
        justifyContent: "center",
        top: styles.top,
        right: styles.right,
        zIndex: 1,
      }}
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography
        variant="h3"
        sx={{
          position: "absolute",
          top: "7.5%",
          fontWeight: 700,
          fontSize: "175%",
          color: "#000000",
        }}
      >
        Sign in to your account
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          height: "100px",
          width: "86%",
          display: "flex",
          position: "absolute",
          top: "24%",
          left: "7%",
        }}
      >
        <Grid item xs={12}>
          <FormReqField label="Your Email" name="email" />
        </Grid>
        <Grid item xs={12}>
          <FormReqField label="Password" type="password" name="password" />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: "56%",
          width: "45%",
        }}
        type="submit"
      >
        Sign in
      </Button>

      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          top: "77%",
          fontSize: "110%",
          color: "#000000",
        }}
      >
        Don't have an account? Join Now.
      </Typography>

      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: "84%",
          width: "57%",
        }}
        onClick={handleCreateAccClick}
      >
        Create Account
      </Button>
    </Box>
  );
};

export default LogInBox;
