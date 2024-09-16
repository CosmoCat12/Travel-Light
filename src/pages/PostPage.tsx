import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFavorites } from '../hooks/useFavorites'; // Подключаем хук избранного
import '../assets/styles.scss'; // Импорт стилей

function PostPage() {
  const { countryCode } = useParams<{ countryCode: string }>();
  const [country, setCountry] = useState<any>(null);
  const { favorites, addFavorite, removeFavorite } = useFavorites(); // Добавляем removeFavorite
  const isFavorite = favorites.includes(country?.name.common); // Проверяем, находится ли страна в избранном

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
      const data = await response.json();
      setCountry(data[0]);
    };

    if (countryCode) {
      fetchCountry();
    }
  }, [countryCode]);

  if (!country) return <div>Loading...</div>;

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(country.name.common); // Удаляем из избранного
    } else {
      addFavorite(country.name.common); // Добавляем в избранное
    }
  };

  return (
    <div className="post-page">
      <h1>{country.name.common}</h1>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Subregion:</strong> {country.subregion}</p>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages).join(", ")}</p>
      <button
        onClick={handleFavoriteToggle}
        className={`favorite-btn ${isFavorite ? 'remove-favorite' : ''}`}
      >
        {isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
      </button>
      <button onClick={() => window.history.back()} className="back-btn">Back</button>
    </div>
  );
}

export default PostPage;
