import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Added Link
import { auth, createUserWithEmailAndPassword } from '../firebase';
import './SignUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignInHovered, setIsSignInHovered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getFriendlyErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'This email is already registered. Please sign in or use a different email.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/operation-not-allowed':
        return 'Email/password accounts are not enabled. Please contact support.';
      case 'auth/weak-password':
        return 'Password is too weak. Please use at least 6 characters.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your internet connection.';
      case 'auth/too-many-requests':
        return 'Too many unsuccessful attempts. Please try again later.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  };

  const handleSignUp = async () => {
    setStatusMessage('');
    setStatusType('');

    if (!username.trim()) {
      setStatusMessage('Please enter a username');
      setStatusType('error');
      return;
    }

    if (!email.trim()) {
      setStatusMessage('Please enter your email address');
      setStatusType('error');
      return;
    }

    if (!password) {
      setStatusMessage('Please enter a password');
      setStatusType('error');
      return;
    }

    if (password.length < 6) {
      setStatusMessage('Password must be at least 6 characters long');
      setStatusType('error');
      return;
    }

    setIsLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const userData = {
        username: username.trim(),
        email: email.trim(),
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      setStatusMessage('Account created successfully! Redirecting...');
      setStatusType('success');
      setTimeout(() => {
        navigate('/account');
      }, 1500);
    } catch (err) {
      const errorCode = err.code;
      const friendlyMessage = getFriendlyErrorMessage(errorCode);
      setStatusMessage(friendlyMessage);
      setStatusType('error');
      console.error('Signup error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-header">Create Account</h1>

        <input
          type="text"
          placeholder="Username"
          className="signup-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoCapitalize="none"
        />

        <div className="signup-password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="signup-password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="signup-eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            <ion-icon name={showPassword ? 'eye-off-outline' : 'eye-outline'}></ion-icon>
          </button>
        </div>

        {statusMessage && (
          <p className={`signup-status-message ${statusType === 'error' ? 'signup-error-message' : 'signup-success-message'}`}>
            {statusMessage}
          </p>
        )}

        <button
          className={`signup-button ${isLoading ? 'signup-button-disabled' : ''}`}
          onClick={handleSignUp}
          disabled={isLoading}
        >
          {isLoading ? 'Creating Account...' : 'Sign Up'}
        </button>

        <p className="signup-link">
          Already have an account?{' '}
          <Link
            to="/signin"
            className={`signup-sign-in-text ${isSignInHovered ? 'signup-sign-in-text-hovered' : ''}`}
            onMouseEnter={() => setIsSignInHovered(true)}
            onMouseLeave={() => setIsSignInHovered(false)}
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;