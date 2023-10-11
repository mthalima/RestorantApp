import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoryScreen from "./screens/CategoryScreen";
import MealInfoScreen from "./screens/MealInfoScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#873e23",
            },
            contentStyle: {
              backgroundColor: "burlywood",
            },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoryScreen}
            options={{
              title: "Categories",
            }}
          />
          <Stack.Screen
            name="MealInfoScreen"
            component={MealInfoScreen}
            options={{
              title: "Meal Recipe",
            }}
          />

          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
