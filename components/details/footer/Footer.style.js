import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footer_container: {
        width: "100%",
        margin: "auto",
        backgroundColor: "#FFF",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
        padding: 15,
        borderRadius: 10,
        marginBottom: 20
    },
    footer_text: {
        fontFamily: "Poppins-Medium",
        fontSize: 17,
        color: "#dc2626"
    }
})

export default styles;