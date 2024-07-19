import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <Typography sx={{ top: 0, left: 0, position: "absolute" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Return to Home Page</Link>
    </Typography>
  );
};

export default NoPage;
