import React from "react";

export default function ConnexionPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Connexion</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Entrez votre email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mot de passe</label>
            <input
              type="password"
              placeholder="Entrez votre mot de passe"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition">
            Se connecter
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Pas encore inscrit ? <span className="text-indigo-500 hover:underline cursor-pointer">Créer un compte</span>
        </p>
      </div>
    </div>
  );
}

