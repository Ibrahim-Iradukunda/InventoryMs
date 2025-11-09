import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import NewData from './pages/NewData';
import Product from './pages/Product';
import Inventory from './pages/Inventory';
import Category from './pages/Category';
import FeedHistory from './pages/FeedHistory';
import Settings from './pages/Settings';
import CustomImage from './pages/CustomImage';
import CustomFrames from './pages/CustomFrames';
import Enrichment from './pages/Enrichment';
import CustomLabels from './pages/CustomLabels';
import EditFeed from './pages/EditFeed';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          {/* Login and Register are outside the main layout */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />

          {/* Main layout wraps protected routes */}
          <Route element={<MainLayout />}>
            <Route path="/Newdata" element={<NewData />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Inventory" element={<Inventory />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/FeedHistory" element={<FeedHistory />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/CustomImage" element={<CustomImage />} />
            <Route path="/CustomFrames" element={<CustomFrames />} />
            <Route path="/Enrichment" element={<Enrichment />} />
            <Route path="/CustomLabels" element={<CustomLabels />} />
            <Route path="/EditFeed" element={<EditFeed />} />
          </Route>
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;