import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  planet: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#333333",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FF6347",
    shadowColor: "#FF6347",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF6347",
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "#FF6347",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 5,
  },
  planetName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "#000",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 5,
  },
  detail: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default styles;