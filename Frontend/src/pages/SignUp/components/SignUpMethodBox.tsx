import { Box, Button, Link, Typography } from "@mui/material";

interface StyleProps {
  height: string;
  width: string;
  top: string;
}
interface Props {
  oNPersonalAccClick: () => void;
  oNShopAccClick: () => void;
  oNOrgAccClick: () => void;
  styles: StyleProps;
}

const SignUpMethodBox = ({
  oNPersonalAccClick,
  oNShopAccClick,
  oNOrgAccClick,
  styles,
}: Props) => {
  return (
    <Box
      sx={{
        height: styles.height,
        width: styles.width,
        display: "flex",
        backgroundColor: "#FFFFFF",
        borderRadius: "30px",
        position: "absolute",
        justifyContent: "center",
        top: styles.top,
      }}
    >
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: "12%",
        }}
        onClick={oNPersonalAccClick}
      >
        Register Personal Account
      </Button>

      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          top: "31%",
          fontSize: "110%",
          color: "#000000",
        }}
      >
        Are you representing a food retailer?
      </Typography>
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: "39%",
        }}
        onClick={oNShopAccClick}
      >
        Register Retailer Shop
      </Button>

      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          top: "58%",
          fontSize: "110%",
          color: "#000000",
        }}
      >
        Are you representing a charity organization?
      </Typography>
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: "66%",
        }}
        onClick={oNOrgAccClick}
      >
        Register Charity Organization
      </Button>

      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          top: "86%",
          fontSize: "102%",
          color: "#6b6b69",
        }}
        onClick={() => console.log("Clicked")}
      >
        Already have an account?{" "}
        <Link href="/login" underline="always">
          Sign In
        </Link>
      </Typography>
    </Box>
  );
};

export default SignUpMethodBox;
