import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import '../assets/styles.scss'; // Импорт стилей

function MainPage() {
  const [countries, setCountries] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(""); // Для поиска
  const { signOut } = useAuth(); // Добавляем signOut
  const navigate = useNavigate();

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

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSignOut = () => {
    signOut();
    navigate('/'); // Перенаправление на страницу логина
  };

  return (
    <div className="main-page">
      <div className="header">
        <h1>Countries</h1>
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSignOut} className="sign-out-btn">
          Sign Out
        </button>
      </div>

      <div className="countries">
        {filteredCountries.map((country) => (
          <div
            key={country.cca3}
            className="country"
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
