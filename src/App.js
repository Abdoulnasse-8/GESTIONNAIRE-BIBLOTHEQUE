import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import des composants globaux
import Tete from "./composants/tete";
import Pied from "./composants/pied";

// Import des pages
import HomePage from "./pages/homepage";
import ConnexionPage from "./pages/connexionpage";
import TabBord from "./pages/tabbord";
import Utilisateur from "./pages/utilisateur";

export default function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      <Tete />
      <div className="flex-1">
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route
            path="/"
            element={
              <div className="max-w-7xl mx-auto p-6">
                <HomePage />
              </div>
            }
          />
          {/* Route pour la page de connexion */}
          <Route
            path="/connexion"
            element={
              <div className="max-w-7xl mx-auto p-6">
                <ConnexionPage />
              </div>
            }
          />
          {/* Route pour le tableau de bord */}
          <Route
            path="/tableau-de-bord"
            element={
              <div className="max-w-7xl mx-auto p-6">
                <TabBord />
              </div>
            }
          />
          {/* Route pour la gestion des utilisateurs */}
          <Route
            path="/utilisateurs"
            element={
              <div className="max-w-7xl mx-auto p-6">
                <Utilisateur />
              </div>
            }
          />
        </Routes>
      </div>
      <Pied />
    </div>
  );
}
