import { Box } from "@mui/material";
import image from "../assets/loginPageBG.jpeg";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const LogInBackground = ({ children }: Props) => {
  return (
    <Box
      sx={{
        height: screen.height - 122,
        width: "100vw",
        display: "flex",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Box
        sx={{
          height: screen.height - 122,
          width: "100vw",
          backgroundColor: "rgba(0, 0, 0, 0.53)",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      {children}
    </Box>
  );
};

export default LogInBackground;
