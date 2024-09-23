import { SignUp, useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles.scss'; // Импорт стилей

function RegistrationPage() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/main');
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="registration-page">
      <SignUp />
    </div>
  );
}

export default RegistrationPage;
