import { Text, View, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealInfo from "../components/MealInfo";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealInfo
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
      />
      <View></View>
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredients) => (
        <Text key={ingredients}>{ingredients}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

export default MealDetailScreen;
