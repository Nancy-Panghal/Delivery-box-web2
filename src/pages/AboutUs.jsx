import React from 'react';
import Footer from '../components/Footer';
import './AboutUs.css';

const AboutUs = () => {
  const handleEmailPress = () => {
    window.open("mailto:nancypanghal13@gmail.com", '_blank');
  };

  const handleContactPress = () => {
    window.open("tel:+919306385029", '_blank');
  };

  return (
    <div className="about-us-container">
      <div className="content">
        <h1 className="header">About Us</h1>
        
        <div className="section">
          <h2 className="sub-header">Our Story</h2>
          <p className="text">
            Founded by Nancy Panghal, IoTCloud emerged from personal experiences with 
            package theft, damage, and missed deliveries. We understand the frustration 
            of waiting for an important package only to not find it missing or damaged. 
            Our journey began when we realized that these challenges were not isolated 
            incidents but common problems affecting countless online shoppers.
          </p>
        </div>
        
        <div className="section">
          <h2 className="sub-header">Our Mission</h2>
          <p className="text">
            We are dedicated to revolutionizing the last mile of delivery through 
            innovative IoT technology. Our mission is to create seamless, secure, 
            and reliable delivery experiences that eliminate the worries associated 
            with online shopping. No worries if the delivery package arrive and no one at home our product will receive and secure your package.
          </p>
        </div>
        
        <div className="section">
          <h2 className="sub-header">Our Technology</h2>
          <p className="text">
            Using cutting-edge IoT sensors and edge-computing, our smart delivery 
            solutions provide real-time notifications to app, secure authentication.
             Our products are designed with both security and convenience 
            in mind, ensuring that your packages remain safe until you're ready to 
            retrieve them.
          </p>
        </div>
        
        <div className="section">
          <h2 className="sub-header">Our Vision</h2>
          <p className="text">
            Our Vision is to create home automation related vision AI models and robots which will help you in daily chores and will add a unique value and convenience in your life and make you productive. Accroding to Indian homes environment too, at affordable price.
          </p>
        </div>
        
        <div className="section">
          <h2 className="sub-header">Our Commitment</h2>
          <p className="text">
            We stand behind our products with comprehensive customer support, warranty 
            protection, and continuous software updates. Our commitment extends beyond 
            just selling products - we're building a community of satisfied customers 
            who can shop online with confidence, knowing their deliveries are protected 
            by IoTCloud's innovative technology.
          </p>
        </div>
        
        {/* Feedback Section */}
        <div className="section feedback-section">
          <h2 className="sub-header">Your Feedback Matters</h2>
          <p className="text">
            We are constantly striving to improve our products and services. 
            If you have any feedback, suggestions for improvement, or ideas 
            for customization, we would love to hear from you. Your input helps 
            us create better solutions tailored to your needs.
          </p>
          <p className="text">
            We offer customized products and services based on customer 
            requirements and feedback. You can provide feedback directly 
            through our app, via email, or by contacting us directly.
          </p>
          
          <div className="contact-options">
            <button className="contact-button" onClick={handleEmailPress}>
              <ion-icon name="mail-outline" className="contact-icon"></ion-icon>
              <span className="contact-button-text">Email Us</span>
            </button>
            
            <button className="contact-button" onClick={handleContactPress}>
              <ion-icon name="call-outline" className="contact-icon"></ion-icon>
              <span className="contact-button-text">Call Us</span>
            </button>
            
            <button 
              className="contact-button"
              onClick={() => window.open("https://wa.me/919306385029", '_blank')}
            >
              <ion-icon name="logo-whatsapp" className="contact-icon whatsapp"></ion-icon>
              <span className="contact-button-text">WhatsApp</span>
            </button>
          </div>
        </div>
        
        <p className="closing">
          Join us in transforming the delivery experience.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;