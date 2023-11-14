import { ArtworkItem } from "../../../types/fetch";
import {View, FlatList} from 'react-native';
import styles from './Explore.style';
import ExploreCard from "../explore_card/ExploreCard";

interface ExploreProps {
    items?: ArtworkItem[]
}   

export default function Explore({items}: ExploreProps) {
    return (
        <View style={styles.container}>
            <FlatList 
                data={items}
                renderItem={({ item }) => (
                    <ExploreCard item={item}/>
                )}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                initialNumToRender={10}
            />
        </View>
    )
}