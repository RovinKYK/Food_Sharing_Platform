import { useMediaQuery } from "@mui/material";

const getStyles = () => {
  const widthLargeMethod = useMediaQuery("(min-width:600px)");

  return {
    SignUpMethodBox: {
      height: "390px",
      width: widthLargeMethod ? "600px" : "98vw",
      top: "120px",
    },
  };
};

export default getStyles;
