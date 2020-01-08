import React from 'react'
import { Icon } from 'react-native-elements'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import RestaurantsScreenStacks from './RestaurantsStacks'
import Restaurants from '../screens/Restaurants';

const NavigationsStacks = createBottomTabNavigator(
    {
        Restaurants: {
            screen: RestaurantsScreenStacks,
            navigationOptions: () => ({
                tabBarLabel: "Restaurantes",
                tabBarIcon: ({ tintColor }) => {
                    <Icon
                        type= "material-community"
                        name= "compass-outline"
                        size={22}
                        color= {tintColor}
                    />
                }
            })
        }
    }
);

export default createAppContainer(NavigationsStacks)

