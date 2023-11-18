import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 10,

    },
    artistHeader: {
        textAlign: "justify",
        fontSize: 24,
        fontFamily: "Poppins-Bold",
        color: "#FFF"
    },
    detailsContainer: {
        marginVertical: 20
    },
    detail: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "row",
        width: '100%',
        marginVertical: 10
    },
    detailTitle: {
        fontSize: 19,
        fontFamily: "Poppins-Medium",
        color: '#d1d5db'
    },
    detailValue: {
        fontSize: 18,
        fontFamily: "Poppins-Regular",
        color: '#FFF',
        textAlign: "center",
        alignSelf: "flex-end"
    },
    descriptionContainer: {
        marginVertical: 20
    },
    description: {
        fontSize: 18,
        fontFamily: "Poppins-Regular",
        color: '#FFF',
        marginVertical: 10
    },
    artworksContainer: {
        marginVertical: 10,
        width: "100%"
    }
    
});

export default styles;