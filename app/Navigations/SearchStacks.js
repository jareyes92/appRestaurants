import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from '../screens/Search'
//import SearchScreen from '../screens/TopRestaurants'

const SearchScreenStacks = createStackNavigator({
    Restaurants: {
        screen: SearchScreen,
        navigationOptions: () => ({
            title: "Busca tu Restaurante"
        })
    }
})

export default SearchScreenStacks;