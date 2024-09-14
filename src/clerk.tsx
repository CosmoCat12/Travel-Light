import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter as Router } from 'react-router-dom';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY; // Replace with your Clerk Frontend API

const ClerkProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/main"
    >
      <Router>
        {children}
      </Router>
    </ClerkProvider>
  );
};

export default ClerkProviderWrapper;
