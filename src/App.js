import "./App.css";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
function App() {
  const API_KEY = `${process.env.REACT_APP_GOOGLE_API_KEY}`;

  return (
    <HelmetProvider>
      <Helmet>
        <script
          src={
            "https://maps.googleapis.com/maps/api/js?key=" +
            API_KEY +
            "&callback=initAutocomplete&libraries=places&v=weekly"
          }
        />
      </Helmet>
    </HelmetProvider>
  );
}

export default App;
