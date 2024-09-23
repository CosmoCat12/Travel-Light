import { useNavigate } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites"; // Подключаем хук избранного
import "../assets/styles.scss"; // Импорт стилей
import H1 from "../components/H1";

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
      <H1>Favorite Countries</H1>
      <ul className="favorite-list">
        {favorites.map((country) => (
          <li
            key={country} // Используем название страны как ключ
            className="favorite-country"
            onClick={() => handleCountryClick(country)} // При клике на название переходим на страницу страны
          >
            {country} {/* Выводим только название страны */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritePage;
