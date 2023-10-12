import { Text, View, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#873e23",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitleContainer: {
    marginHorizontal: 24,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "#873e23",
    borderBottomWidth: 2,
  },
});
