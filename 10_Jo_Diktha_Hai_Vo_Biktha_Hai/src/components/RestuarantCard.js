import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { slaString },
  } = resData?.info;

  return (
    <div className="m-2 p-2 w-50" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="rounded-lg "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
      <h5>{slaString}</h5>
    </div>
  );
};

export default RestaurantCard;
