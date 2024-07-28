import { Container, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
const RegisterSuccessBox = () => {
  const navigate = useNavigate();
  const handleReturnClick = () => {
    navigate("/login");
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        zIndex: 1,
        backgroundColor: "white",
        marginTop: "120px",
        justifyContent: "center",
        display: "flex",
        height: "260px",
        borderRadius: "30px",
      }}
    >
      <CheckCircleIcon color="success" sx={{ fontSize: "80px", mt: "5%" }} />
      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          top: "32%",
          fontSize: "130%",
          color: "#000000",
        }}
      >
        Account Registered Successfully!
      </Typography>
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: "41%",
        }}
        onClick={handleReturnClick}
      >
        Return to Login Page
      </Button>
    </Container>
  );
};

export default RegisterSuccessBox;
