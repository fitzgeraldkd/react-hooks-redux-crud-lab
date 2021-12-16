import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { restaurantAdded, restaurantRemoved } from './restaurantsSlice';
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";

function RestaurantsContainer() {
  const dispatch = useDispatch();
  const restaurants = useSelector(state => state.restaurants.entities);

  return (
    <div>
      <RestaurantInput />
      <Restaurants restaurants={restaurants} />
    </div>
  );
}

export default RestaurantsContainer;
