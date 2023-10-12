import { View, Text, StyleSheet } from "react-native";

function MealInfo({ complexity, duration, affordability, textStyle }) {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, textStyle]}>{duration} min</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealInfo;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },

  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },

  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    margin: 6,
  },
});
