import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 20,
    justifyContent: "center",
  },
  user: {
    backgroundColor: "#999999",
    borderRadius: 50,
    padding: 40,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
    textShadowColor: "#000000",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 5,
  },
  Img: {
    width: 150,
    height: 150,
    borderRadius: 30,
    marginBottom: 30,
  },
  text: {
    fontSize: 13,
    color: "#FFFFFF",
    marginBottom: 10,
    marginLeft: 10,
  },
  line: {
    height: 1,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
  },
});

export default styles;