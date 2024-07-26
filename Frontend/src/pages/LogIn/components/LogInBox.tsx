import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

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

      <TextField
        label="Your Email"
        variant="standard"
        autoComplete="off"
        sx={{
          position: "absolute",
          top: "26%",
          left: "8%",
          width: "80%",
        }}
      />

      <TextField
        label="Password"
        variant="standard"
        type="password"
        autoComplete="off"
        sx={{
          position: "absolute",
          top: "40%",
          left: "8%",
          width: "80%",
        }}
      />

      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: "56%",
          width: "45%",
        }}
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
