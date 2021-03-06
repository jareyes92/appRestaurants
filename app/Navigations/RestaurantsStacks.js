import { createStackNavigator } from "react-navigation-stack";
import RestaurantsScreen from "../screens/Restaurants/Restaurants";
import AddRestaurantsScreen from "../screens/Restaurants/AddRestaurants";
import RestaurantScreen from "../screens/Restaurants/Restaurant";

const RestaurantsScreenStacks = createStackNavigator({
  Restaurants: {
    screen: RestaurantsScreen,
    navigationOptions: () => ({
      title: "Restaurantes"
    })
  },
  AddRestaurant: {
    screen: AddRestaurantsScreen,
    navigationOptions: () => ({
      title: "Nuevo Restaurante"
    })
  },
  Restaurant: {
    screen: RestaurantScreen,
    navigationOptions: props => ({
      title: props.navigation.state.params.restaurant.item.restaurant.name
    })
  }
});

export default RestaurantsScreenStacks;
