import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimer from "./Shimer";


const Body = ()=>{
  const [listOfRestaurant , setlistOfRestaurant] = useState([]);
  const[filterlistOfRestaurant,setfilterlistOfRestaurant] = useState([]);
  const[searchText,setsearchText] = useState("");
  console.log("Bodyrender");
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9654&lng=77.5428&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistOfRestaurant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterlistOfRestaurant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };

    return  listOfRestaurant.length === 0 ? 
    <Shimer/>:(
    <div className="Body_Container">
      
      <div className="filter">
        <div className="search">
          <input type="text" 
          className="search-box"
          value={searchText} 
          onChange={(e)=>{
            setsearchText(e.target.value)
          }}
          ></input>
          <button 
          className="btn btn-secondary"
          onClick={()=>{
            // console.log(setlistOfRestaurant);
            const filtered = listOfRestaurant.filter((res) => {
              return res?.info?.name.toLowerCase()?.includes(searchText?.toLowerCase());
            });
            setfilterlistOfRestaurant(filtered);

          }    
          }
          >Search</button>
        </div>
      <button 
        className="btn btn-secondary filter-btn"
        onClick={()=>{
          //logic of filter restaurant 
          const filterdsList = listOfRestaurant.filter(
            (res) =>res.info.avgRating>4
          );
          setlistOfRestaurant(filterdsList);
        }}
        >Top_Rates_Restaurant
        </button>
      </div>
        
        <div className="res_container">
          {
            filterlistOfRestaurant.map((restaurant) =>(
              // always use key for unique identify each card
              <ResturantCard key={restaurant.info.id} resData={restaurant}/>
            ))
          }
          
        </div>
    </div>
    );
  }
  export default Body;