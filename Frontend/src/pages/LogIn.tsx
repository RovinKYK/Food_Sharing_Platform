import { Typography } from "@mui/material";
import LogInBackground from "../components/LogInBackground";
import Logo from "../components/Logo";
import LogInBox from "../components/LogInBox";

const LogInPage = () => {
  return (
    <LogInBackground>
      <Logo fontSize="14vh" left="9vw" top="23vh" />
      <Typography
        variant="h3"
        sx={{
          position: "absolute",
          top: "38vh",
          left: "10vw",
          fontWeight: 700,
          fontSize: "2.1rem",
          color: "#EBF9EB",
        }}
      >
        Community Food Sharing Platform
      </Typography>
      <LogInBox height="62.5vh" width="27vw" top="10.5vh" left="66.5vw" />
    </LogInBackground>
  );
};

export default LogInPage;
