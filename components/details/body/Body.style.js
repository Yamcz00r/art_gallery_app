import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body_container: {
        flex: 1,
        widt: "100%",
        padding: 15,
    },
    title: {
        fontFamily: "Poppins-Medium",
        fontSize: 17,
        color: "#e2e8f0"
    },
    descritpion_container: {
        marginVertical: 20
    },
    descritpion: {
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        color: '#FFF'
    },
    info_container: {
        marginVertical: 10,
        flex: 1,
    },
    details_container: {
        flex: 1,
        flexDirection: "column",
        gap: 10,
        margin: 10
    }, 
    detail_title: {
        fontSize: 14,
        fontFamily: "Poppins-Bold",
        color: "#FFF",
    },
    detail_value: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        color: "#e2e8f0"
    }


});
export default styles;