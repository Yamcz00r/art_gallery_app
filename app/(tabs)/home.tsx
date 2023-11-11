import { useState } from "react";
import { ScrollView, Text, View, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import useFetch from "../../hooks/useFetch";
import ArtworkCard from "../../components/artwork/ArtworkCard";
export default function Home() {
   
    const {data, isLoading, error } = useFetch("artworks", {page: 1, limit: 15})

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
                        <ArtworkCard item={item}/>
                    )}  />

                )}
                   
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

