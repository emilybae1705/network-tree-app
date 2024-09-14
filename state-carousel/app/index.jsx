import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import Carousel from "../src/components/Carousel";

export default function Index() {
  return (
    <SafeAreaView styles={styles.container}>
      <Text style={styles.title}>Savings carousel test</Text>
      <Carousel />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f5",
  },
  title: {
    fontSize: 25,
    textAlign: "left",
    fontWeight: "bold",
    fontFamily: "Arial",
    marginTop: 45,
    marginBottom: 20,
    marginLeft: 35,
  }
})
