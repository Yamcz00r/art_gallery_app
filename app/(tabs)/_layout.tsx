import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarStyle: {
                backgroundColor: "#111827",
                borderBlockStartColor: "#111827"
            },
            headerStyle: {
                backgroundColor: "#111827",

            },
            headerShadowVisible: false
        }}>
            <Tabs.Screen name="home" options={{
                tabBarIcon: ({focused}) => {
                    return ( <Ionicons color="#FFF" name={focused ? "home" : "home-outline"} size={30} />);
                },
                title: "",
                headerTitle: "Explore",
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontFamily: "Poppins-Bold",
                    color: "#FFF"
                }
            }}/>
            <Tabs.Screen name="search" options={{
                tabBarIcon: ({focused}) => {
                    return ( <Ionicons color="#FFF" name={focused ? "search" : "search-outline"} size={30} />);
                },
                title: "",
                headerTitle: "Search",
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontFamily: "Poppins-Bold",
                    color: "#FFF"
                }
            }}/>
            <Tabs.Screen name="favorites" options={{
                tabBarIcon: ({focused}) => {
                    return ( <Ionicons color="#FFF" name={focused ? "star" : "star-outline"} size={30} />);
                },
                title: "",
                headerTitle: "Favorites",
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontFamily: "Poppins-Bold",
                    color: "#FFF"
                }
            }}/>
        </Tabs>
    )
}