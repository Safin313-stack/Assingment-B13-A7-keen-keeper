import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { TimelineProvider } from './context/TimelineContext';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <TimelineProvider>
          <App />
        </TimelineProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
