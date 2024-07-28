import { AccountType } from "../../../constants/types";
import {
  Container,
  Grid,
  Button,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FormReqField from "../../../components/FormReqField";
import { FormEvent } from "react";

interface Props {
  accountType: AccountType;
  onBackClick: () => void;
  onFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const SignUpForm = ({ accountType, onBackClick, onFormSubmit }: Props) => {
  const theme = useTheme();

  const widthLarge = useMediaQuery(theme.breakpoints.up("sm"));

  const validatePasswordMatch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const input = e.target as HTMLInputElement;
    const passwordInput = input
      .closest("form")
      ?.querySelector('input[name="password"]') as HTMLInputElement;
    console.log(passwordInput.value);
    if (passwordInput) {
      if (input.value !== passwordInput.value) {
        input.setCustomValidity("Passwords do not match");
      } else {
        input.setCustomValidity("");
      }
    }
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        zIndex: 1,
        backgroundColor: "white",
        borderRadius: "25px",
        top: "30px",
        position: "absolute",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "16px",
        }}
      >
        <Button
          type="button"
          startIcon={<ArrowBackIcon />}
          sx={{
            border: "none",
            color: "black",
            top: "13px",
            fontSize: "18px",
            left: "-44%",
            position: "relative",
          }}
          onClick={onBackClick}
        >
          Back
        </Button>
        <Typography color="black" fontSize="40px" mt="15px">
          Register Account
        </Typography>
        <Box
          component="form"
          autoComplete="off"
          onSubmit={onFormSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            {accountType === "Personal" ? (
              <>
                <Grid item xs={12} sm={5.5}>
                  <FormReqField name="firstName" label="First Name" />
                </Grid>
                {widthLarge && <Grid item xs={0} sm={1} />}
                <Grid item xs={12} sm={5.5}>
                  <FormReqField label="Last Name" name="lastName" />
                </Grid>
              </>
            ) : (
              <Grid item xs={12}>
                <FormReqField label={accountType + " Name"} name="name" />
              </Grid>
            )}
            <Grid item xs={12}>
              <FormReqField label="Email Address" name="email" />
            </Grid>
            <Grid item xs={12} mt="30px">
              <FormReqField name="password" label="Password" type="password" />
            </Grid>
            <Grid item xs={12}>
              <FormReqField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                onChange={validatePasswordMatch}
                invalidMsg="Passwords do not match"
              />
            </Grid>
            <Grid item xs={12} mt="30px">
              <FormReqField label="Address" name="address" />
            </Grid>
            <Grid item xs={12}>
              <FormReqField label="Phone Number" name="phoneNumber" />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: "60px", mb: "30px", left: "20%", width: "60%" }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpForm;
