import BarChart from "../Barchart";
import UpperButtons from "../UpperButtons";
import { useDispatch, useSelector } from "react-redux";
import { updateGraphLeader, updateGraphData } from "../../Store/KatialexSlice";
import { CreateLeaderArray, Random } from "./ContentLogix";
import CoupleImages from "../CoupleImages";
import katilexImage from "../../../images/katilex.jpeg";
import { useEffect, useState } from "react";
import PoppingMessage from "./PoppingMessage";

const initialData = [0, 0, 0];
const initialLeader = [false, false, false];

const Content = () => {
  const [info, setInfo] = useState();
  const [first, setFirst] = useState(false);
  const [displayedInfo, setDisplayInfo] = useState(false);
  const [katilex, setKatilex] = useState([]);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.katilex);

  useEffect(() => {
    if (first) {
      setDisplayInfo(true);
      setInfo("You can click the pictures to test your luck aswell!!");
      setTimeout(() => {
        setInfo(null);
      }, 3000);
    }
  }, [first, displayedInfo]);

  useEffect(() => {
    if (state.katilex) {
      const intervalId = setInterval(() => {
        setKatilex((prevArray) => [...prevArray, katilexImage]);
        console.log("Something is happening every 1 second!");
      }, 1000);
      return () => clearInterval(intervalId);
    } else {
      setKatilex([]);
    }
  }, [state.katilex]);

  const randomClick = () => {
    let random = Random();
    let newArr = [...state.data];
    newArr[random]++;
    if (!displayedInfo) {
      setFirst(true);
    }
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
      <PoppingMessage info={info} />
      {state.katilex && (
        <div className="div">
          <img
            src={katilexImage}
            style={{
              borderRadius: "10%",
            }}
          />
          {katilex.map((e, id) => (
            <img
              key={id}
              src={katilexImage}
              style={{
                borderRadius: "10%",
              }}
            />
          ))}
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
