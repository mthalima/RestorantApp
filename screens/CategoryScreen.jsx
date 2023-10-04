import GridTile from "../components/GridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";

function renderCategoryItem(itemData) {
  return (
    <GridTile
      title={itemData.item.title}
      color={itemData.item.color}
    ></GridTile>
  );
}

function CategoryScreen() {
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
