import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    height: 100,
    display: "flex",
    justifyContent: "center",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <AppBarTab tabText="Repositories" />
      </Pressable>
    </View>
  );
};

export default AppBar;
