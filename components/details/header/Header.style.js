import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    banner_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    credits_container: {
        padding: 15,
        flex: 1,
        flexDirection: "column",
    },
    title_display: {
        fontFamily: "Poppins-Medium",
        fontSize: 17,
        color: "#FFF"
    },
    date_display: {
        fontSize: 15,
        fontFamily: "Poppins-Regular",
        color: "#d1d5db",
        alignSelf: "flex-end"
    },
    artist_display: {
        fontFamily: "Poppins-Medium",
        fontSize: 16,
        color: "#e2e8f0",
        textDecorationStyle: "solid",
        textDecorationColor: "#e2e8f0",
        textDecorationLine: "underline"
    }
    
});
export default styles;