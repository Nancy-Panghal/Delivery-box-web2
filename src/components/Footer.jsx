import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleLinkPress = (route) => {
    navigate(route);
  };

  const handleSocialPress = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="main-content">
        {/* Contact Info Column */}
        <div className="footer-column contact-column">
          <h3 className="column-title">Contact Info</h3>
          <div className="contact-item">
            <ion-icon name="location-outline" className="contact-icon"></ion-icon>
            <span className="contact-text">Rohtak, NCR, Haryana</span>
          </div>
          <div className="contact-item">
            <ion-icon name="mail-outline" className="contact-icon"></ion-icon>
            <span className="contact-text">nancypanghal13@gmail.com</span>
          </div>
          <div className="contact-item">
            <ion-icon name="call-outline" className="contact-icon"></ion-icon>
            <span className="contact-text">+91 9306385029</span>
          </div>
        </div>

        {/* Solutions Column */}
        <div className="footer-column solutions-column">
          <h3 className="column-title">Solutions</h3>
          <button
            className={`footer-link ${hoveredItem === 'aboutProduct' ? 'link-hover' : ''}`}
            onClick={() => handleLinkPress('/about-product')}
            onMouseEnter={() => setHoveredItem('aboutProduct')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Models
          </button>
          <button
            className={`footer-link ${hoveredItem === 'faqs' ? 'link-hover' : ''}`}
            onClick={() => handleLinkPress('/faqs')}
            onMouseEnter={() => setHoveredItem('faqs')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            FAQs
          </button>
          <button
            className={`footer-link ${hoveredItem === 'about' ? 'link-hover' : ''}`}
            onClick={() => handleLinkPress('/about')}
            onMouseEnter={() => setHoveredItem('about')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            About
          </button>
        </div>

        {/* Legal Column */}
        <div className="footer-column legal-column">
          <h3 className="column-title">Legal</h3>
          <button
            className={`footer-link ${hoveredItem === 'installationRequest' ? 'link-hover' : ''}`}
            onClick={() => handleLinkPress('/installation-request')}
            onMouseEnter={() => setHoveredItem('installationRequest')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Installation request
          </button>
          <button
            className={`footer-link ${hoveredItem === 'warrantyRegistration' ? 'link-hover' : ''}`}
            onClick={() => handleLinkPress('/warranty-registration')}
            onMouseEnter={() => setHoveredItem('warrantyRegistration')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Warranty registration
          </button>
          <button
            className={`footer-link ${hoveredItem === 'shippingPolicy' ? 'link-hover' : ''}`}
            onClick={() => handleLinkPress('/shipping-policy')}
            onMouseEnter={() => setHoveredItem('shippingPolicy')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Shipping Policy
          </button>
          <button
            className={`footer-link ${hoveredItem === 'serviceRequest' ? 'link-hover' : ''}`}
            onClick={() => handleLinkPress('/service-request')}
            onMouseEnter={() => setHoveredItem('serviceRequest')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Service request
          </button>
        </div>

        {/* Policies Column */}
        <div className="footer-column policies-column">
          <h3 className="column-title">Policies</h3>
          <button
            className={`footer-link ${hoveredItem === 'Terms&Conditions' ? 'link-hover' : ''}`}
            onClick={() => handleLinkPress('/terms-and-conditions')}
            onMouseEnter={() => setHoveredItem('Terms&Conditions')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Terms and conditions
          </button>
          <button
            className={`footer-link ${hoveredItem === 'PrivacyPolicy' ? 'link-hover' : ''}`}
            onClick={() => handleLinkPress('/privacy-policy')}
            onMouseEnter={() => setHoveredItem('PrivacyPolicy')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Privacy policy
          </button>
          <button
            className={`footer-link ${hoveredItem === 'Return&Refund' ? 'link-hover' : ''}`}
            onClick={() => handleLinkPress('/return-and-refund')}
            onMouseEnter={() => setHoveredItem('Return&Refund')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Return & Refund
          </button>
          <button
            className={`footer-link ${hoveredItem === 'Support' ? 'link-hover' : ''}`}
            onClick={() => handleLinkPress('/support')}
            onMouseEnter={() => setHoveredItem('Support')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Support
          </button>
        </div>

        {/* Company Description Column */}
        <div className="footer-column company-column">
          <h3 className="column-title">IoTCloud</h3>
          <p className="company-description">
            We provide innovative home technology solutions that make your life easier, smarter, and more connected. Our products are designed with cutting-edge technology and user experience in mind.
          </p>
        </div>
      </div>

      {/* Copyright and Social Links */}
      <div className="bottom-section">
        <span className="copyright">
          Copyright © 2025 IoTCloud Corporation. All rights reserved.
        </span>
        <div className="social-links">
          <button
            className="social-icon-x"
            onClick={() => handleSocialPress('https://x.com/PanghalNancy')}
          >
            <FontAwesomeIcon icon={faXTwitter} aria-label="X" />
          </button>
          <button
            className="social-icon-whatsapp"
            onClick={() => handleSocialPress('https://wa.me/919306385029')}
          >
            <ion-icon name="logo-whatsapp"></ion-icon>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;