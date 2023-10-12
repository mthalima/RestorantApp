import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealInfo from "../components/MealInfo";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { Ionicons } from "@expo/vector-icons";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressedHandler() {
    console.log("pressed!");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonPressedHandler}
            icon="star"
            color="white"
          />
        );
      },
    });
  }, [navigation, headerButtonPressedHandler]);

  return (
    <ScrollView style={styles.scroll}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealInfo
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <Subtitle>Ingredients</Subtitle>
      <List data={selectedMeal.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps}></List>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  scroll: {
    marginBottom: 24,
  },

  image: {
    width: "100%",
    height: 350,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    color: "white",
  },

  detailText: {
    color: "white",
  },
});
