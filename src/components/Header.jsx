import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Logo from '../assets/images/icon.png'; // Import logo
import CompanyName from '../assets/images/CompanyName.png'; // Import company name image

const Header = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Home');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabPress = (tabName, path) => {
    setActiveTab(tabName);
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleAccountPress = () => {
    navigate(isSignedIn ? '/account' : '/signin');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header-container">
      {/* Top Header with Contact Info */}
      <div className="top-header">
        <div className="contact-info">
          <ion-icon name="call-outline" className="icon"></ion-icon>
          <span className="contact-text-header">+91 9306385029</span>
          <ion-icon name="mail-outline" className="mail-icon"></ion-icon>
          <span className="contact-text-header">nancypanghal13@gmail.com</span>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="main-header">
        {/* Left: Logo and Company Name */}
        <div className="header-left">
          <img src={Logo} alt="Logo" className="logo-image" />
          <img src={CompanyName} alt="Company Name" className="company-name-image" />
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <ion-icon name={isMobileMenuOpen ? "close-outline" : "menu-outline"}></ion-icon>
        </button>

        {/* Center: Navigation Tabs */}
        <div className={`tabs-container ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <button
            className={`tab ${activeTab === 'Home' ? 'active-tab' : ''}`}
            onClick={() => handleTabPress('Home', '/')}
          >
            Home
          </button>
          <button
            className={`tab ${activeTab === 'Shop' ? 'active-tab' : ''}`}
            onClick={() => handleTabPress('Shop', '/products')}
          >
            Shop
          </button>
          <button
            className={`tab ${activeTab === 'About Us' ? 'active-tab' : ''}`}
            onClick={() => handleTabPress('About Us', '/about')}
          >
            About Us
          </button>
          <button
            className={`tab ${activeTab === 'About Product' ? 'active-tab' : ''}`}
            onClick={() => handleTabPress('About Product', '/about-product')}
          >
            About Product
          </button>
          <button
            className={`tab ${activeTab === 'FAQs' ? 'active-tab' : ''}`}
            onClick={() => handleTabPress('FAQs', '/faqs')}
          >
            FAQs
          </button>
        </div>

        {/* Right: Actions */}
        <div className="header-right">
          <button className="sign-in-text1" onClick={() => navigate('/signin')}>
            LOG IN
          </button>
          <button className="icon-button">
            <ion-icon name="cart-outline" className="icon"></ion-icon>
          </button>
          <button className="icon-button" onClick={handleAccountPress}>
            <ion-icon name="person-outline" className="icon"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;