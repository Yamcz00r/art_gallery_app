import { Text, View } from "react-native";
import styles from "./Artist.style";
import ArtworksList from "./ArtworksList";
import { useEffect, useState } from "react";
import { ExploreArtworkItem } from "../../types/fetch";
import { useRouter } from "expo-router";
interface ArtistProps {
  artist_id?: number;
  title?: string;
  birth_date?: number;
  death_date?: number;
  description?: string;
}

export default function Artist(props: ArtistProps) {
  const [results, setResults] = useState<ExploreArtworkItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const queryObject = {
    query: {
      terms: {
        artist_ids: [props.artist_id],
      },
    },
  };
  
  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks/search?fields=id,image_id,artist_title,title`,
          {
            method: "POST",
            body: JSON.stringify(queryObject),
            headers: {
                "Content-Type": "appliaction/json"
            }
          }
        );
        if (!response.ok) {
            throw new Error("Soemthing went wrong!");
        }
        const data = await response.json();
        setResults(data.data)
      } catch (error: any) {
        console.error(error.message)
      } finally {
        setIsLoading(false)
      }
    };
    fetchArtworks();
  }, [props.artist_id]);
  return (
    <View style={styles.container}>
      <Text style={styles.artistHeader}>{props.title}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detail}>
          <Text style={styles.detailTitle}>Date of birth:</Text>
          <Text style={styles.detailValue}>
            {!props.birth_date ? "Not provided" : props.birth_date}
          </Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailTitle}>Date of death:</Text>
          <Text style={styles.detailValue}>
            {!props.death_date ? "Not provided" : props.death_date}
          </Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.detailTitle}>Description</Text>
        <Text style={styles.description}>
          {!props.description ? "Not provided" : props.description}
        </Text>
      </View>
      <ArtworksList items={results} isLoading={isLoading}/>
    </View>
  );
}
