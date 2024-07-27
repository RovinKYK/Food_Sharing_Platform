import { AccountType } from "../../../constants/types";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  accountType: AccountType;
  onBackClick: () => void;
}

const SignUpForm = ({ accountType, onBackClick}: Props) => {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDataObject: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value.toString();
    });
    console.log(formDataObject);
    navigate("/login")
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
          onClick = {onBackClick}
        >
          Back
        </Button>
        <Typography color="black" fontSize="40px" mt="15px">
          Register Account
        </Typography>
        <Box
          component="form"
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            {(accountType==="Personal")&&<><Grid item xs={12} sm={5.5}>
              <TextField
                name="firstName"
                required
                fullWidth
                label="First Name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={0} sm={1}/>
            <Grid item xs={12} sm={5.5}>
              <TextField
                required
                fullWidth
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                variant="standard"
              />
            </Grid></>}
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label={accountType+" Name"}
                name="name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Email Address"
                name="email"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} mt="30px">
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} mt="30px">
              <TextField
                required
                fullWidth
                label="Address"
                name="address"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                variant="standard"
              />
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
