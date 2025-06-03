import React from 'react';

const NotFound = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(120deg, #232526 0%, #414345 100%)',
    color: '#38bdf8',
    textAlign: 'center',
    padding: '2rem'
  }}>
    <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Page Not Found</h2>
    <p style={{ color: '#bae6fd', marginBottom: '2rem' }}>
      Sorry, the page you are looking for does not exist.<br />
    </p>
    <button
      onClick={() => window.location.hash = ''}
      style={{
        background: 'linear-gradient(90deg, #38bdf8 0%, #0ea5e9 100%)',
        color: '#fff',
        border: 'none',
        borderRadius: 8,
        padding: '0.7em 2em',
        fontSize: '1.1rem',
        fontWeight: 600,
        cursor: 'pointer',
        boxShadow: '0 2px 12px #38bdf822',
        marginTop: '1rem',
        transition: 'background 0.2s, color 0.2s',
      }}
      aria-label="Go to Home"
    >
      Go Home
    </button>
  </div>
);

export default NotFound;
