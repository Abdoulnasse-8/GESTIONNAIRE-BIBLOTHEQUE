import React from "react";
import { Link } from "react-router-dom";

export default function Tete() {
  return (
    <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:opacity-80">
            Gestionnaire de Bibliothèque
          </Link>
        </h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-gray-200 transition">Accueil</Link>
          <Link to="/connexion" className="hover:text-gray-200 transition">Connexion</Link>
          <Link to="/tableau-de-bord" className="hover:text-gray-200 transition">Tableau de bord</Link>
          <Link to="/utilisateurs" className="hover:text-gray-200 transition">Utilisateurs</Link>
        </nav>
      </div>
    </header>
  );
}
