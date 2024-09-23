import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { useFavorites } from "../hooks/useFavorites"; // Подключаем хук избранного
import "../assets/styles.scss"; // Импорт стилей
import H1 from "../components/H1";
import Input from "../components/Input";
import Button from "../components/Button";

function MainPage() {
  const [countries, setCountries] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(""); // Для поиска
  const { signOut } = useAuth(); // Добавляем signOut
  const navigate = useNavigate();
  const { favorites } = useFavorites(); // Подключаем избранные страны

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  const handleClick = (countryCode: string) => {
    navigate(`/post/${countryCode}`);
  };

  const handleSignOut = () => {
    signOut();
    navigate("/"); // Перенаправление на страницу логина
  };

  // Добавляем кнопку перехода на страницу избранных стран
  const goToFavorites = () => {
    navigate("/fav");
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-page">
      <div className="header">
        <H1>Countries</H1>
        <Input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <Button onClick={handleSignOut} className="sign-out-btn">
          Sign Out
        </Button>
        <Button onClick={goToFavorites} className="favorites-btn">
          Go to Favorites
        </Button>{" "}
        {/* Кнопка перехода */}
      </div>

      <div className="countries">
        {filteredCountries.map((country) => (
          <div
            key={country.cca3}
            className={`country ${
              favorites.includes(country.name.common) ? "favorite" : ""
            }`} // Если страна в избранном, окрашиваем её
            onClick={() => handleClick(country.cca3)}
          >
            {country.name.common}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
