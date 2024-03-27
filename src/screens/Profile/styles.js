import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000", 
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  user: {
    backgroundColor: "#FFFFFF", 
    borderRadius: 12, 
    padding: 24, 
    marginBottom: 16,
    maxWidth: 400, 
    alignSelf: "stretch",
    marginHorizontal: 16, 
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  name: {
    fontSize: 24, 
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 16, 
  },
  Img: {
    width: 120, 
    height: 120,
    borderRadius: 60, 
    marginBottom: 24, 
    alignSelf: "center",
  },
  text: {
    fontSize: 16, 
    color: "#555555", 
    marginBottom: 16, 
    marginLeft: 0,
  },
  line: {
    height: 1, 
    backgroundColor: "#E0E0E0", 
    marginBottom: 16,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
  },
});

export default styles;