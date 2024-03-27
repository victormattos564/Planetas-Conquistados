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
});

export default styles;