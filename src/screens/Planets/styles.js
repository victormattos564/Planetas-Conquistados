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
    backgroundColor: "#ffffff", 
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#000000",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.6, 
    shadowRadius: 10,
    elevation: 8, 
  },
  title: {
    fontSize: 32, 
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "#FFA07A", 
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 3, 
  },
  planetName: {
    fontSize: 18, 
    color: "#000000",
    marginBottom: 10,
    textShadowColor: "#000000",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
  },
  detail: {
    fontSize: 16, 
    marginBottom: 8, 
    color: "#000000",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.3, 
  },
});

export default styles;
