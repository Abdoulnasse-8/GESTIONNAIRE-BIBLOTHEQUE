import React from "react";
import Barrerech from "../composants/barrerech";
import ListesLivres from "../composants/listeslivres";

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Bienvenue à la Bibliothèque</h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Recherchez et explorez vos livres préférés !
        </p>
        <Barrerech />
        <ListesLivres />
      </div>
    </div>
  );
}

