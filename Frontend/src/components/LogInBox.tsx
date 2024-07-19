import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

interface Props {
  height: string;
  width: string;
  top: string;
  left: string;
}

const LogInBox = ({ height, width, top, left }: Props) => {
  const navigate = useNavigate();

  const handleCreateAccClick = () => {
    navigate("/signup");
  };

  return (
    <Box
      sx={{
        height: height,
        width: width,
        display: "flex",
        backgroundColor: "#FFFFFF",
        borderRadius: "16px",
        position: "absolute",
        justifyContent: "center",
        top: top,
        left: left,
        zIndex: 1,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          position: "absolute",
          top: "7.5%",
          fontWeight: 700,
          fontSize: "4vh",
          color: "#000000",
        }}
      >
        Sign in to your account
      </Typography>

      <TextField
        label="Your Email"
        variant="standard"
        sx={{
          position: "absolute",
          top: 120,
          left: "8%",
          width: "80%",
        }}
      />

      <TextField
        label="Password"
        variant="standard"
        type="password"
        sx={{
          position: "absolute",
          top: 185,
          left: "8%",
          width: "80%",
        }}
      />

      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: 265,

          width: "45%",
        }}
      >
        Sign in
      </Button>

      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          top: 350,

          fontSize: "1.2rem",
          color: "#000000",
        }}
      >
        Don't have an account? Join Now.
      </Typography>

      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: 389,
          left: "%",
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
