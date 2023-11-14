import { View, Text } from "react-native";
import styles from "./Body.style";
interface BodyProps {
  description?: string;
  artist_title?: string;
  place_of_origin?: string;
  dimensions?: string;
  credit_line?: string;
  date_end?: number;
  date_start?: number;
  artist_id?: number;
  medium_display?: string;
  artwork_type_title?: string;
  departament_title?: string;
}

export default function DetailsBody(props: BodyProps) {
  const deleteHTMLTags = (text: string) => {
    return text.replace(/<\/?[^>]+(>|$)/g, "");
  };

  const details = [
    {
      title: "Artist",
      value: props.artist_title,
    },
    {
      title: "Place of origin",
      value: props.place_of_origin,
    },
    {
      title: "Dimensions",
      value: props.dimensions,
    },
    {
      title: "Medium display",
      value: props.medium_display
    },
    {
      title: "Credit line",
      value: props.credit_line,
    },
    {
      title: "Time",
      value: `${props.date_start < 0 ? Math.abs(props.date_start) + " BCE" : props.date_start} - ${props.date_end < 0 ? Math.abs(props.date_end) + " BCE" : props.date_end }`,
    },
    {
      title: "Departament",
      value: props.departament_title
    },
    {
      title: "Artwork type",
      value: props.artwork_type_title
    }
  ];

 
  return (
    <View style={styles.body_container}>
      <View style={styles.descritpion_container}>
        <Text style={styles.title}>Description</Text>
        <Text style={styles.descritpion}>
          {!props.description
            ? "Description was not provided"
            : deleteHTMLTags(props.description)}
        </Text>
      </View>
      <View style={styles.info_container}>
        <Text style={styles.title}>Additional info</Text>
        {details.map((detail, index) => (
          <View style={styles.details_container} key={index}>
            <Text style={styles.detail_title}>{detail.title}</Text>
            <Text style={styles.detail_value}>{!detail.value ? "Not provided" : detail.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
