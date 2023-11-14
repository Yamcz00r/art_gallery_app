import { TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./Footer.style";

export default function Footer({ id }: { id: number | undefined }) {
  return (
    <TouchableOpacity style={styles.footer_container}>
      <Text style={styles.footer_text}>Add to favorite</Text>
      <FontAwesome name="heart-o" color="#dc2626" size={30} />
    </TouchableOpacity>
  );
}
