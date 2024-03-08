import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const app = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
};

app();
