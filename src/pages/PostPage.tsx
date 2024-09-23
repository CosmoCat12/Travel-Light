import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFavorites } from "../hooks/useFavorites"; // Подключаем хук избранного
import "../assets/styles.scss"; // Импорт стилей
import H1 from "../components/H1";
import P from "../components/P";
import Button from "../components/Button";

function PostPage() {
  const { countryCode } = useParams<{ countryCode: string }>();
  const [country, setCountry] = useState<any>(null);
  const { favorites, addFavorite, removeFavorite } = useFavorites(); // Добавляем removeFavorite
  const isFavorite = favorites.includes(country?.name.common); // Проверяем, находится ли страна в избранном

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );
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
      <H1>{country.name.common}</H1>
      <P>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </P>
      <P>
        <strong>Region:</strong> {country.region}
      </P>
      <P>
        <strong>Subregion:</strong> {country.subregion}
      </P>
      <P>
        <strong>Capital:</strong> {country.capital?.[0]}
      </P>
      <P>
        <strong>Languages:</strong>{" "}
        {Object.values(country.languages).join(", ")}
      </P>
      <Button
        onClick={handleFavoriteToggle}
        className={`favorite-btn ${isFavorite ? "remove-favorite" : ""}`}
      >
        {isFavorite ? "Remove from Favorite" : "Add to Favorite"}
      </Button>
      <Button onClick={() => window.history.back()} className="back-btn">
        Back
      </Button>
    </div>
  );
}

export default PostPage;
