import { View, Text } from "react-native";
import styles from "./Body.style";
interface BodyProps {
  description?: string;
  artist_title?: string;
  place_of_origin?: string;
  dimensions?: string;
  credit_line?: string;
}

export default function DetailsBody(props: BodyProps) {
  return (
    <View style={styles.body_container}>
      <View>
        <Text style={styles.title}>Description</Text>
        <Text style={styles.descritpion}>
            {props.description}
        </Text>
      </View>
    </View>
  );
}
