import GridTile from "../components/GridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import MealInfoScreen from "./MealInfoScreen";

function CategoryScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealInfoScreen", { categoryId: itemData.item.id });
    }
    return (
      <GridTile
        title={itemData.item.title}
        color="bisque"
        onPress={pressHandler}
      ></GridTile>
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    ></FlatList>
  );
}

export default CategoryScreen;
