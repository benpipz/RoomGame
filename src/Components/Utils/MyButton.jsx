import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const MyLinkButton = ({ text, link }) => {
  return (
    <Link to={link}>
      <Button
        className="myButton1"
        style={{
          color: "white",
          borderColor: "white",
          display: "inline-block",
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "center",
          borderRadius: "5px",
          padding: "5px",
          margin: "5px",
        }}
        variant="outlined"
      >
        {text}
      </Button>
    </Link>
  );
};

export default MyLinkButton;
