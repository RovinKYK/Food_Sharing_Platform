import { Typography } from "@mui/material";
import LogInBackground from "../../components/LogInBackground";
import Logo from "../../components/Logo";
import LogInBox from "./components/LogInBox";
import getStyles from "./styles";

const LogInPage = () => {
  const styles = getStyles();
  return (
    <LogInBackground>
      <Logo styles={styles.Logo} />
      <Typography variant="h3" sx={styles.DescText}>
        Community Food Sharing Platform
      </Typography>
      <LogInBox styles={styles.LogInBox} />
    </LogInBackground>
  );
};

export default LogInPage;
