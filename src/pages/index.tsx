import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Home from 'templates/Home';

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,900;1,300;1,900&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Home />
    </HelmetProvider>
  );
};

export default App;
