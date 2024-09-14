import { Routes, Route } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage'; // Импортируйте новый компонент

function App() {
  const { isSignedIn } = useAuth();

  return (
    <Routes>
      <Route path="/" element={isSignedIn ? <MainPage /> : <LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/main" element={isSignedIn ? <MainPage /> : <LoginPage />} />
      <Route path="/post/:countryCode" element={isSignedIn ? <PostPage /> : <LoginPage />} />
    </Routes>
  );
}

export default App;
