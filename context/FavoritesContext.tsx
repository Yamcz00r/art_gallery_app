import { createContext, useState, useEffect } from "react";
import { ExploreArtworkItem } from "../types/fetch";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface FavoritesContextProviderProps {
  children?: React.ReactNode;
}

export interface FavoritesContextType {
  favorites: ExploreArtworkItem[];
  saveArtwork: (item: ExploreArtworkItem) => Promise<void>;
  getFavoriteArtwork: (id: number | undefined) => number | undefined;
  getItems: () => Promise<void>;
  removeArtwork: (id: number | undefined) => Promise<void>;
  readingError: string;
  isLoading: boolean;
}

const initContextState = {
  favorites: [],
  saveArtwork: async () => console.log(""),
  getFavoriteArtwork: (id: number | undefined) => 1,
  removeArtwork: async (id: number | undefined) => console.log(""),
  getItems: async () => console.log(""),
  readingError: "",
  isLoading: false,
};

export const FavoritesContext =
  createContext<FavoritesContextType>(initContextState);

const FavoritesContextProvider = ({
  children,
}: FavoritesContextProviderProps) => {
  const [errorSave, setSaveError] = useState("");
  const [readingError, setReadingError] = useState("");
  const [favorites, setFavorites] = useState<ExploreArtworkItem[]>([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const getItems = async () => {
    try {
      setIsLoading(true);
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);
      if (!items.length) {
        throw new Error("Sorry, you dont have any artworks saved yet");
      }
      const artworks: ExploreArtworkItem[] = items.map(([key, value]) => {
        if (!value) {
          return;
        }
        return JSON.parse(value);
      });

      setFavorites((prevFavorites) => [...prevFavorites, ...artworks]);
    } catch (error: any) {
      setReadingError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const saveArtwork = async (artwork: ExploreArtworkItem) => {
    try {
      if (!artwork.id) {
        return;
      }
      const existingArtwork = await AsyncStorage.getItem(artwork.id.toString());
      if (!existingArtwork) {
        setFavorites((prevFavorites) => [...prevFavorites, artwork]);
        await AsyncStorage.setItem(
          artwork.id.toString(),
          JSON.stringify(artwork)
        );
      }
      throw new Error("You have already added this item");
    } catch (error: any) {
      setSaveError(error.message);
    }
  };

  const getFavoriteArtwork = (id: number | undefined) => {
    if (!id) {
      return;
    }
    const existingArtwork = favorites.find((favorite) => {
      if (!favorite.id) {
        return;
      }
      return favorite.id.toString() === id.toString();
    });
    if (!existingArtwork) {
      return;
    }
    return existingArtwork.id;
  };

  const removeArtwork = async (id: number | undefined) => {
    if (!id) {
      return;
    }
    try {
      setFavorites(prevFavorites => prevFavorites.filter(favorite => favorite.id !== id))
      await AsyncStorage.removeItem(id.toString());
    } catch (error) {
      setSaveError("Something went wrong");
    }
  };

  const initialValues: FavoritesContextType = {
    removeArtwork,
    getFavoriteArtwork,
    saveArtwork,
    getItems,
    favorites,
    readingError,
    isLoading,
  };

  return (
    <FavoritesContext.Provider value={initialValues}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
