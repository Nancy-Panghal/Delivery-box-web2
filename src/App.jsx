import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/AboutUs';
import AboutProduct from './pages/AboutProduct';
import FAQs from './pages/FAQs';
import Account from './pages/Account';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import InstallationRequest from './pages/InstallationRequest';
import WarrantyRegistration from './pages/WarrantyRegistration';
import ShippingPolicy from './pages/ShippingPolicy';
import ServiceRequest from './pages/ServiceRequest';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ReturnAndRefund from './pages/ReturnAndRefund';
import Support from './pages/Support';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-product" element={<AboutProduct />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/account" element={<Account />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/installation-request" element={<InstallationRequest />} />
            <Route path="/warranty-registration" element={<WarrantyRegistration />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/service-request" element={<ServiceRequest />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/return-and-refund" element={<ReturnAndRefund />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        
      </div>
    </HashRouter>
  );
}

export default App;