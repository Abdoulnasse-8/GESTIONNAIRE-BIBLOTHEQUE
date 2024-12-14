import React from "react";
import StatutEmprunt from "../composants/statutemprunt";

export default function TabBord() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Tableau de Bord</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-700">Livres disponibles</h2>
            <p className="text-2xl text-indigo-500 font-semibold">120</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-700">Livres empruntés</h2>
            <p className="text-2xl text-indigo-500 font-semibold">35</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-700">Utilisateurs</h2>
            <p className="text-2xl text-indigo-500 font-semibold">50</p>
          </div>
        </div>
        <div className="mt-8">
          <StatutEmprunt />
        </div>
      </div>
    </div>
  );
}

  