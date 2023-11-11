import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{
                tabBarIcon: ({focused}) => {
                    return ( <Ionicons name={focused ? "home" : "home-outline"} size={25} />);
                },
                title: "Home",
                headerTitle: "Gallery App",
                headerTitleAlign: "left",
                headerTitleAllowFontScaling: true,
                headerBackgroundContainerStyle: {backgroundColor: "#FFF"},
                headerTitleStyle: {fontFamily: "Poppins-Bold", fontSize: 20}
            }}/>
            <Tabs.Screen name="search" options={{
                tabBarIcon: ({focused}) => {
                    return ( <Ionicons name={focused ? "search" : "search-outline"} size={25} />);
                },
                title: "Search",
                headerTitle: "Search",
                headerTitleAlign: "center"
            }}/>
            <Tabs.Screen name="favorites" options={{
                tabBarIcon: ({focused}) => {
                    return ( <Ionicons name={focused ? "star" : "star-outline"} size={25} />);
                },
                
                title: "Favorites",
                headerTitle: "Favorites",
                headerTitleAlign: "center",
            }}/>
        </Tabs>
    )
}