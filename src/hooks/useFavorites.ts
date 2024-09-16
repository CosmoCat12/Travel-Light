import { useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : []; // Возвращаем пустой массив, если ничего нет
  });

  const addFavorite = (country: string) => {
    if (!favorites.includes(country)) {
      const updatedFavorites = [...favorites, country];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const removeFavorite = (country: string) => {
    const updatedFavorites = favorites.filter((fav) => fav !== country);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return { favorites, addFavorite, removeFavorite };
}
