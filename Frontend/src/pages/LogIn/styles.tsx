import { useMediaQuery } from "@mui/material";

const getStyles = () => {
  const widthLarge = useMediaQuery("(min-width:1280px)");

  return {
    Logo: {
      fontSize: widthLarge ? "110px" : "85px",
      left: widthLarge ? "140px" : "",
      top: widthLarge ? "163px" : "20px",
    },
    DescText: {
      color: "#EBF9EB",
      fontSize: widthLarge ? "33px" : "25px",
      fontWeight: 700,
      left: widthLarge ? "160px" : "",
      position: "absolute",
      top: widthLarge ? "280px" : "110px",
    },
    LogInBox: {
      height: widthLarge ? "460px" : "420px",
      width: widthLarge ? "400px" : "370px",
      top: widthLarge ? "90px" : "190px",
      right: widthLarge ? "120px" : "",
    },
  };
};

export default getStyles;
