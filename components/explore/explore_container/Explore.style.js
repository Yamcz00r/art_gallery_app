import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    fetch_more_button: {
        backgroundColor: "#FFF",
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        borderRadius: 10
    },
    loading_container: {
        marginVertical: 10,
        padding: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 17,
        color: "#111327",
        fontFamily: "Poppins-Medium",

    },
    loading_text: {
        fontSize: 17,
        color: "#FFF",
        fontFamily: "Poppins-Medium",
    }
})
export default styles