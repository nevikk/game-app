import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from './providers/ErrorBoundary';
import "./styles/index.scss";
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { StoreProvider } from './providers/StoreProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
);

