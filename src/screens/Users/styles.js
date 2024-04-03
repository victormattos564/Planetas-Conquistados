import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: "#1E1E1E",

  },
  form: {
    width: "80%",
  },
  input: {
    height: 48, 
    margin: 8, 
    borderWidth: 1,
    textAlign: "center",
    borderColor: "#4A4A4A", 
    borderRadius: 8, 
    color: "#FFFFFF",
    backgroundColor: "#2C2C2C",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#8899F4", 
    padding: 16, 
    borderRadius: 8, 
    marginTop: 24, 
    elevation: 3, 
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
    padding: 16,
    fontSize: 16, 
    height: 56, 
    color: "#FFFFFF",
    backgroundColor: "#2C2C2C", 
    borderRadius: 8, 
    marginVertical: 4, 
  },
  title: {
    fontSize: 28, 
    fontWeight: "bold",
    color: "#8899F4",
    marginBottom: 24, 
    textShadowColor: "transparent", 
  },
  placeholder: {
    color: "#8A8A8A", 
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.5,
  },
  planet: {
    padding: 24, 
    borderRadius: 16,
    backgroundColor: "#FFFFFF", 
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8, 
  },
  planetCard: {
    backgroundColor: "#FFFFFF", 
    borderRadius: 24, 
    padding: 32, 
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 12, 
  },
  planetName: {
    fontSize: 36, 
    fontWeight: "bold",
    color: "#000000", 
    textShadowColor: "#6677A0", 
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
    textAlign: "center",
    marginBottom: 24, 
  },
  detail: {
    fontSize: 20, 
    color: "#333333", 
    width: "100%",
    backgroundColor: "#F2F2F2", 
    padding: 20, 
    borderRadius: 16, 
    marginTop: 24,
  },
  buttonContainer: {
    flexDirection: "row", 
    justifyContent: "space-around", 
    marginTop: 32, 
  },
  buttonDelete: {
    alignItems: "center",
    backgroundColor: "#FF0000",
    padding: 24, 
    borderRadius: 16,
    elevation: 6, 
  },
  buttonEdit: {
    alignItems: "center",
    backgroundColor: "#297e1e", 
    padding: 24, 
    borderRadius: 16, 
    elevation: 6, 
  },
  buttonTextDelete: {
    fontSize: 22, 
    fontWeight: "bold",
    color: "#FFFFFF", 
    textShadowColor: "#CC0000", 
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
  },
  buttonTextEdit: {
    fontSize: 22, 
    fontWeight: "bold",
    color: "#FFFFFF", 
    textShadowColor: "#1C5C12",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
  },
});

export default styles;