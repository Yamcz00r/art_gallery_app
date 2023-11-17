import { createContext, useState, useEffect } from "react";
import { ExploreArtworkItem } from "../types/fetch";
import AsyncStorage from '@react-native-async-storage/async-storage';
interface FavoritesContextProviderProps {
    children?: React.ReactNode
}

interface FavoritesContextType {
    saveArtwork: (artwork: ExploreArtworkItem) => Promise<void>;
    getFavoriteArtwork: (id: string) => Promise<any>;
    readAllArtworks: () => Promise<any[] | undefined>;
    removeArtwork: (id: string) => Promise<void>;
    readingError: string;
    errorSave: string;
}

export const FavoritesContext = createContext({});


const FavoritesContextProvider = ({ children }: FavoritesContextProviderProps) => {
    const [errorSave, setSaveError] = useState("");
    const [readingError, setReadingError] = useState("");

    const saveArtwork = async (artwork: ExploreArtworkItem) => {
        try {
            const existingArtwork = await AsyncStorage.getItem(artwork.id.toString());
            if (existingArtwork) {
                throw new Error("Sorry, you have already save this artwork!");
            } 
            const key = artwork.id.toString();
            const value = JSON.stringify(artwork);
            await AsyncStorage.setItem(key, value);
        } catch (error: any) {
            setSaveError(error.message)
        }
    };

    const getFavoriteArtwork = async (id: string) => {
        try {
            const item = await AsyncStorage.getItem(id);
            if (!item) {
                throw new Error("Sorry, we cannot find the item with this id!")
            }
            return JSON.parse(item);
        } catch (error: any) {
            setReadingError(error.message)
        }
    }

    const readAllArtworks = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const items = await AsyncStorage.multiGet(keys);
            if (!items.length) {
                throw new Error("Sorry, you dont have any artworks saved yet")
            }
            const artworks = items.map(([key, value]) => {
                if (!value) {
                    return 
                }
                return JSON.parse(value)
            });
            
            return artworks
        } catch (error: any) {
            setReadingError(error.message)
        }
    }

    const removeArtwork = async (id: string) => {
        try {
            await AsyncStorage.removeItem(id);

        } catch (error) {
            setSaveError("Something went wrong")
        }
    }

    const contextValues: FavoritesContextType = {
        removeArtwork,
        readAllArtworks,
        getFavoriteArtwork, 
        saveArtwork,
        readingError,
        errorSave
    } 

    return (
        <FavoritesContext.Provider value={contextValues}>
            {children}
        </FavoritesContext.Provider>
    )

};

export default FavoritesContextProvider;