import { SignIn, useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles.scss'; // Импорт стилей

function LoginPage() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/main');
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="login-page">
      <SignIn />
    </div>
  );
}

export default LoginPage;
