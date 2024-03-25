import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: "#000000",
  },
  form: {
    width: "80%",
  },
  input: {
    height: 40,
    margin: 2,
    borderWidth: 1,
    textAlign: "center",
    borderColor: "#8895B3",
    borderRadius: 20,
    color: "#FFFFFF",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#8895B3",
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  list: {
    width: "80%",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF6347",
    marginBottom: 20,
    textShadowColor: "#FF6347",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 5,
  },
  placeholder: {
    color: "#CCCCCC",
  },
});

export default styles;