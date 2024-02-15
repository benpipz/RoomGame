import ussad from "../../images/ussad.jpeg";
import ushappy from "../../images/ushappy.jpeg";
import artsad from "../../images/art1.jpeg";
import arthappy from "../../images/art2.jpeg";
import sparkhappy from "../../images/spark1.jpeg";
import sparksad from "../../images/spark2.jpeg";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();
import CoupleCard from "./CoupleCard";

const CoupleImages = ({ leader, points, click }) => {
  const benImages = {
    happy: ushappy,
    sad: ussad,
  };

  const artImages = {
    happy: arthappy,
    sad: artsad,
  };

  const sparkImages = {
    happy: sparkhappy,
    sad: sparksad,
  };

  const imagesGroup = [benImages, artImages, sparkImages];
  return (
    <div className="images">
      {leader.map((element, key) => (
        <CoupleCard
          images={imagesGroup[key]}
          leader={element}
          points={points[key]}
          click={click}
        />
      ))}
    </div>
  );
};

export default CoupleImages;
