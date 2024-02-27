import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, fa1 } from "@fortawesome/free-solid-svg-icons";

const MyImage = ({ image, click }) => {
  return (
    <div>
      <img
        src={image}
        style={{
          borderRadius: "50%",
          cursor: "pointer",
        }}
        onClick={click}
        data-aos="flip-up"
        data-aos-duration="2000"
      />
    </div>
  );
};

const CoupleCard = ({ images, leader, points, click }) => {
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    if (points > 0) {
      setUpdated(true);
      setTimeout(() => {
        setUpdated(false);
      }, 800);
    }
  }, [points]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {<MyImage image={leader ? images.happy : images.sad} click={click} />}
      {updated && (
        <div
          style={{
            position: "absolute",
          }}
        >
          <FontAwesomeIcon
            icon={faPlus}
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          />
          <FontAwesomeIcon
            icon={fa1}
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          />
        </div>
      )}
    </div>
  );
};

export default CoupleCard;
