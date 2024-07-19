import { Typography } from "@mui/material";

interface Props {
  fontSize: string;
  left: string;
  top: string;
}

const Logo = ({ fontSize, left, top }: Props) => {
  return (
    <Typography
      variant="h1"
      sx={{
        position: "absolute",
        top: top,
        left: left,
        fontFamily: "playwrite-no, latin",
        fontWeight: 700,
        fontSize: fontSize,
        color: "#1CB31C",
        WebkitTextStroke: "2px black",
      }}
    >
      FoodConnect
    </Typography>
  );
};

export default Logo;
