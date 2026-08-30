import RestaurantCard from "./RestuarantCard";
import resLists from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Variable -> Super Powerful Variable
  // To make it super powerful variable we use React Hooks ie. useState().
  // React Hook -> useState()
  // It is a normal JS function which is given to us. But that function has some super powers in it.
  // useState() will always give or returns a state variable.

  const [listOfRestaurants, setListOfRestuarant] = useState(resLists);
  // whatever we pass in this function is a default value.
  // Also here if we want to update anything we can't just directly update this variable using assignment operator.
  // Here we need to use setListOfRestuarant menthod to update the listOfRestaurants variable.

  // This is a normal JS variable
  /*
   let listOfRestaurants = [
    {
      info: {
        id: "10894",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "2nd Stage",
        areaName: "BTM Layout",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.9,
        parentId: "721",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        deliveryTime: 31,
      },
    },
    {
      info: {
        id: "211192",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "lczhp9lptdzbqn09nfns",
        locality: "2nd Stage",
        areaName: "BTM Layout",
        costForTwo: "₹250 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 4,
        parentId: "4961",
        avgRatingString: "4.0",
        totalRatingsString: "10K+",
        deliveryTime: 28,
      },
    },
    {
      info: {
        id: "477963",
        name: "The Belgian Waffle Co.",
        cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
        locality: "2nd Stage",
        areaName: "BTM 2nd Stage",
        costForTwo: "₹200 for two",
        cuisines: ["Waffle", "Desserts", "Ice Cream"],
        avgRating: 4.3,
        veg: true,
        parentId: "2233",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        deliveryTime: 32,
      },
    },
    {
      info: {
        id: "23683",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/1c999aef-c166-496d-a9f1-8508e83e6d5a_23683.jpg",
        locality: "2nd Stage",
        areaName: "Btm Layout",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 3.8,
        parentId: "630",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        deliveryTime: 28,
      },
    },
  ];
  */
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Here you need to write a filter logic so that when you click on the button only top rated restuarants should be rendered on page.
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListOfRestuarant(filteredList);
            // When ever this state variable updates React re render my component.
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restuarant) => (
          <RestaurantCard key={restuarant.info.id} resData={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
// This is one way to export the code. Before you import it in another file first you have to export from this file.
