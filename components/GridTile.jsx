import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function GridTile({ title, color, onPress }) {
  return (
    <View style={[styles.gridTile, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#ccccc" }}
        style={({ pressed }) => [
          styles.buttonTile,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default GridTile;

const styles = StyleSheet.create({
  gridTile: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 6,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "bisque",
  },

  buttonTile: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
