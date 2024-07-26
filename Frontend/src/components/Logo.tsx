import { Typography } from "@mui/material";

interface StyleProps {
  fontSize: string;
  left: string;
  top: string;
}
interface Props {
  styles: StyleProps;
}

const Logo = ({ styles }: Props) => {
  return (
    <Typography
      variant="h1"
      sx={{
        position: "absolute",
        top: styles.top,
        left: styles.left,
        fontFamily: "playwrite-no, latin",
        fontWeight: 700,
        fontSize: styles.fontSize,
        color: "#1CB31C",
        WebkitTextStroke: "2px black",
      }}
    >
      FoodConnect
    </Typography>
  );
};

export default Logo;
