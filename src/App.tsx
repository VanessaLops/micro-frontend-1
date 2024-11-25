import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Login from './pages/login/login';
import { theme } from '../util/theme';
import MicroFrontendPage from './microFrontendPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThemeProvider theme={theme}><Login /></ThemeProvider>} />
        <Route path="/micro-frontend-2" element={<MicroFrontendPage />} />
      </Routes>
    </Router>
  );
};

export default App;
