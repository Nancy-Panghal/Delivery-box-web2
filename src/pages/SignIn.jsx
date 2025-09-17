import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Added Link
import { auth, signInWithEmailAndPassword } from '../firebase';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUpHovered, setIsSignUpHovered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getFriendlyErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/user-disabled':
        return 'This account has been disabled. Please contact support.';
      case 'auth/user-not-found':
        return 'No account found with this email. Please sign up first.';
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your internet connection.';
      case 'auth/too-many-requests':
        return 'Too many failed attempts. Please try again later.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  };

  const handleSignIn = async () => {
    setStatusMessage('');
    setStatusType('');

    if (!email.trim()) {
      setStatusMessage('Please enter your email address');
      setStatusType('error');
      return;
    }

    if (!password) {
      setStatusMessage('Please enter your password');
      setStatusType('error');
      return;
    }

    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('userEmail', email.trim());
      setStatusMessage('Sign in successful! Redirecting...');
      setStatusType('success');
      setTimeout(() => {
        navigate('/account');
      }, 1500);
    } catch (err) {
      const errorCode = err.code;
      const friendlyMessage = getFriendlyErrorMessage(errorCode);
      setStatusMessage(friendlyMessage);
      setStatusType('error');
      console.error('Signin error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h1 className="signin-header">Sign In</h1>

        <input
          type="email"
          placeholder="Email"
          className="signin-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoCapitalize="none"
        />

        <div className="signin-password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="signin-password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="signin-eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            <ion-icon name={showPassword ? 'eye-off-outline' : 'eye-outline'}></ion-icon>
          </button>
        </div>

        {statusMessage && (
          <p className={`signin-status-message ${statusType === 'error' ? 'signin-error-message' : 'signin-success-message'}`}>
            {statusMessage}
          </p>
        )}

        <button
          className={`signin-button ${isLoading ? 'signin-button-disabled' : ''}`}
          onClick={handleSignIn}
          disabled={isLoading}
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>

        <p className="signin-link">
          Don't have an account?{' '}
          <Link
            to="/signup"
            className={`signin-sign-up-text ${isSignUpHovered ? 'signin-sign-up-text-hovered' : ''}`}
            onMouseEnter={() => setIsSignUpHovered(true)}
            onMouseLeave={() => setIsSignUpHovered(false)}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;