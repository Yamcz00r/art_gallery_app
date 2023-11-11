import { useState } from "react";
import { ScrollView, Text, View, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

export default function Home() {
   
    const {data, isLoading, error, handleNextPage} = useInfiniteScroll("artworks", {page: 1, limit: 15})

    return (
        <SafeAreaView style={{backgroundColor: "#FFF", flex: 1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding: 30}}>
                {isLoading ? (
                    <ActivityIndicator size="large" color="#000"/>
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList data={data} renderItem={({ item }) => (
                        <View>
                            <Text style={{fontFamily: "Poppins-Bold", fontSize: 20}}>{item.title}</Text>
                            <Text style={{fontFamily: "Poppins-Regular", fontSize: 15}}>{item.artist_display}</Text>
                        </View>
                    )} onEndReached={handleNextPage}  onEndReachedThreshold={0.1} />

                )}
                   
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

