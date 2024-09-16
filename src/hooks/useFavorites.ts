import { useState } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    // Загружаем избранное из localStorage при инициализации
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const addFavorite = (country: string) => {
    if (!favorites.includes(country)) {
      const updatedFavorites = [...favorites, country];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Сохраняем в localStorage
    }
  };

  const removeFavorite = (country: string) => {
    const updatedFavorites = favorites.filter((fav) => fav !== country);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Обновляем localStorage
  };

  return { favorites, addFavorite, removeFavorite };
}
