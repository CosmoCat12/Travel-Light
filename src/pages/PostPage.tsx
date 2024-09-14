import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../assets/styles.scss'; // Импорт стилей

function PostPage() {
  const { countryCode } = useParams<{ countryCode: string }>();
  const [country, setCountry] = useState<any>(null);

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

  return (
    <div className="post-page">
      <h1>{country.name.common}</h1>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Subregion:</strong> {country.subregion}</p>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages).join(", ")}</p>
      <button onClick={() => window.history.back()} className="back-btn">Back</button>
    </div>
  );
}

export default PostPage;
