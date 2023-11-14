import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card_container: {
    margin: 10,
    position: "relative",
    width: "100%"
  },
  card_image: {
    width: "70%",
    height: 300,
    borderRadius: 10,
    resizeMode: "contain",
  },
  description_container: {
    padding: 5,
  },
  title_header: {
    fontFamily: "Poppins-Medium",
    color: "#FFF",
    width: "auto",
    fontSize: 13,
  },
  artist_header: {
    fontFamily: "Poppins-Regular",
    color: "#FFF",
    width: "auto",
    fontSize: 12,
  },
  heart_container: {
    flex: 1,
    alignSelf: "flex-end",
    zIndex: 10
  },
});
export default styles;
