import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites'; // Подключаем хук избранного
import '../assets/styles.scss'; // Импорт стилей

function FavoritePage() {
  const { favorites } = useFavorites(); // Получаем избранные страны
  const navigate = useNavigate();

  const handleCountryClick = (countryName: string) => {
    navigate(`/post/${countryName}`); // Переход на страницу с информацией о стране
  };

  // Проверка на наличие избранных стран
  if (favorites.length === 0) {
    return <div className="favorite-page">No favorite countries yet!</div>;
  }

  return (
    <div className="favorite-page">
      <h1>Favorite Countries</h1>
      <div className="favorite-list">
        {favorites.map((country) => (
          <div
            key={country}
            className="favorite-country"
            onClick={() => handleCountryClick(country)}
          >
            {country}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritePage;
