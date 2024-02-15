import BarChart from "../Barchart";
import UpperButtons from "../UpperButtons";
import { useDispatch, useSelector } from "react-redux";
import { updateGraphLeader, updateGraphData } from "../../Store/KatialexSlice";
import { CreateLeaderArray, Random } from "./ContentLogix";
import CoupleImages from "../CoupleImages";
import katilexImage from "../../../images/katilex.jpeg";

const initialData = [0, 0, 0];
const initialLeader = [false, false, false];

const Content = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.katilex);

  const randomClick = () => {
    let random = Random();
    let newArr = [...state.data];
    newArr[random]++;

    dispatch(updateGraphData(newArr));
    dispatch(updateGraphLeader(CreateLeaderArray(newArr, state.leader)));
    return newArr;
  };

  const resetClick = () => {
    dispatch(updateGraphData(initialData));
    dispatch(updateGraphLeader(initialLeader));
  };

  return (
    <div>
      <UpperButtons randomClick={randomClick} resetClick={resetClick} />
      {state.katilex && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={katilexImage}
            style={{
              borderRadius: "10%",
            }}
          />
        </div>
      )}
      <BarChart mydata={state.data} leader={state.leader} />
      <CoupleImages
        leader={state.leader}
        points={state.data}
        click={randomClick}
      />
      <div style={{ height: "40px" }}></div>
    </div>
  );
};

export default Content;
