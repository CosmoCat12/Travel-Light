import ReactDOM from 'react-dom';
import App from './App';
import ClerkProviderWrapper from './clerk';

ReactDOM.render(
  <ClerkProviderWrapper>
    <App />
  </ClerkProviderWrapper>,
  document.getElementById('root')
);
