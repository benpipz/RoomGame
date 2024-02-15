import { useDispatch, useSelector } from "react-redux";
import { showKatilex } from "../Store/KatialexSlice";
import Button from "@mui/material/Button";

const buttonStyle = {
  margin: "10px",
  backgroundColor: " #e76f51",
  fontWeight: "bold",
};
const UpperButtons = ({ randomClick, resetClick }) => {
  const dispatch = useDispatch();
  const onKatilexClick = () => {
    dispatch(showKatilex());
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" onClick={randomClick} style={buttonStyle}>
          I Love my chances
        </Button>
        <Button variant="contained" onClick={resetClick} style={buttonStyle}>
          Reset
        </Button>
        <Button
          variant="contained"
          onClick={onKatilexClick}
          style={buttonStyle}
        >
          Where's katilex?
        </Button>
      </div>
    </>
  );
};

export default UpperButtons;
