import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Properties from './pages/Properties';
import CreateListing from './pages/CreateListing'; 
import SignInPage from './pages/SignIn'; // Import SignIn component
import SignUpPage from './pages/SignUp'; // Import SignUp component
import PropertyDetail from './pages/PropertyDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Layout>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/sign-in" element={<SignInPage />} /> {/* Add route for SignIn */}
        <Route path="/sign-up" element={<SignUpPage />} /> {/* Add route for SignUp */}
        <Route path="/properties/:id" element={<PropertyDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
