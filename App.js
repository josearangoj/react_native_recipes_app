import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from 'react-redux';
import store from './redux/store/index';
import DishDashScreen from "./components/screens/DishDashScreen";
import AdvancedSearchScreen from "./components/screens/AdvancedSearchScreen";
import RecipeScreen from "./components/screens/RecipeScreen";
import FavouriteScreen from "./components/screens/FavouriteScreen";

import 'react-native-gesture-handler'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="DishDash" component={DishDashScreen} />
          <Stack.Screen name="Favourites" component={FavouriteScreen} />
          <Stack.Screen name="Recipes" component={RecipeScreen} />
          <Stack.Screen name="AdvancedSearch" component={AdvancedSearchScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}


