import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card_container: {
    padding: 5
  },
  card_image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    resizeMode: "cover",
  },
  description_container: {
    padding: 5,
  },
  title_header: {
    fontFamily: "Poppins-Medium",
    color: "#FFF",
    width: 170,
    fontSize: 13,
  },
  artist_header: {
    fontFamily: "Poppins-Regular",
    color: "#FFF",
    width: 170,
    fontSize: 12,
  },
  heart_container: {
    flex: 1,
    alignSelf: "flex-end",
    zIndex: 10
  },
});
export default styles;
