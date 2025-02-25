import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { SignupScreen } from './SignupScreen';
import "./loginscreen.css";

export const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  const handleSignInToggle = () => {
    setSignIn(!signIn);
  };

  const handleGetStarted = (e) => {
    e.preventDefault();
    setSignIn(true);
  };

  return (
    <div className="loginscreen">
      <header className="loginscreen-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
          className="loginscreen-logo"
        />
        <button
          className="loginscreen-signin-button"
          onClick={handleSignInToggle}
          aria-label="Toggle Sign In"
        >
          {signIn ? "Back to Home" : "Sign In"}
        </button>
      </header>
      <div className="loginscreen-gradient" />
      <main className="loginscreen-body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <section className="loginscreen-welcome">
            <h1 className="loginscreen-title">Unlimited movies, TV shows, and more.</h1>
            <h2 className="loginscreen-subtitle">Watch anywhere. Cancel at any time.</h2>
            <p className="loginscreen-description">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <form className="loginscreen-form" onSubmit={handleGetStarted}>
              <input
                type="email"
                placeholder="Email Address"
                required
                aria-label="Email Address"
              />
              <button
                type="submit"
                className="loginscreen-getstarted-button"
                aria-label="Get Started"
              >
                GET STARTED
              </button>
            </form>
          </section>
        )}
      </main>
      <footer className="loginscreen-footer">
        <p>&copy; 2025 Netflix, Inc.</p>
      </footer>
    </div>
  );
};