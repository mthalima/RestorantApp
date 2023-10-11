import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealInfo from "./MealInfo";

function MealItem({
  id,
  title,
  imageURL,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  function mealDetailNavigation() {
    navigation.navigate("MealDetail", { mealId: id });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "burlywood" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={mealDetailNavigation}
      >
        <View>
          <Image source={{ uri: imageURL }} style={styles.image}></Image>
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealInfo
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "bisque",
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 200,
  },

  buttonPressed: {
    opacity: 0.7,
  },

  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
