import React from "react";
import Barrerech from "../composants/barrerech";
import ListesLivres from "../composants/listeslivres";

export default function HomePage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Bienvenue à la Bibliothèque</h1>
      <Barrerech />
      <ListesLivres />
    </div>
  );
}
