import { ArtworkItem } from "../../types/fetch";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './artworkcard.style';
interface ArtworkCardProps {
  item: ArtworkItem;
}

const ArtworkCard = ({item}: ArtworkCardProps) => {
    return (
        <TouchableOpacity style={styles.main}>
            
        </TouchableOpacity>
    )

};
export default ArtworkCard;
