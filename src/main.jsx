import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { TimelineProvider } from './context/TimelineContext';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';
import App from './App.jsx';

const basename = import.meta.env.BASE_URL;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename={basename}>
        <TimelineProvider>
          <App />
        </TimelineProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
