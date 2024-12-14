import React, { useState } from "react";

// Exemple de données utilisateurs
const utilisateursInitials = [
  { id: 1, nom: "Jean Dupont", email: "jean.dupont@example.com" },
  { id: 2, nom: "Marie Curie", email: "marie.curie@example.com" },
  { id: 3, nom: "Albert Einstein", email: "albert.einstein@example.com" },
];

export default function Utilisateur() {
  const [utilisateurs, setUtilisateurs] = useState(utilisateursInitials);
  const [nouveauNom, setNouveauNom] = useState("");
  const [nouveauEmail, setNouveauEmail] = useState("");
  const [editerUtilisateur, setEditerUtilisateur] = useState(null);

  const ajouterUtilisateur = () => {
    if (nouveauNom && nouveauEmail) {
      setUtilisateurs([
        ...utilisateurs,
        { id: Date.now(), nom: nouveauNom, email: nouveauEmail },
      ]);
      setNouveauNom("");
      setNouveauEmail("");
    }
  };

  const supprimerUtilisateur = (id) => {
    setUtilisateurs(utilisateurs.filter((utilisateur) => utilisateur.id !== id));
  };

  const modifierUtilisateur = (utilisateur) => {
    setEditerUtilisateur(utilisateur);
    setNouveauNom(utilisateur.nom);
    setNouveauEmail(utilisateur.email);
  };

  const enregistrerModification = () => {
    if (nouveauNom && nouveauEmail && editerUtilisateur) {
      const utilisateursModifies = utilisateurs.map((utilisateur) =>
        utilisateur.id === editerUtilisateur.id
          ? { ...utilisateur, nom: nouveauNom, email: nouveauEmail }
          : utilisateur
      );
      setUtilisateurs(utilisateursModifies);
      setEditerUtilisateur(null);
      setNouveauNom("");
      setNouveauEmail("");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Gestion des Utilisateurs</h1>

        {/* Formulaire pour ajouter ou modifier un utilisateur */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">{editerUtilisateur ? "Modifier un utilisateur" : "Ajouter un utilisateur"}</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Nom</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={nouveauNom}
              onChange={(e) => setNouveauNom(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={nouveauEmail}
              onChange={(e) => setNouveauEmail(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition"
            onClick={editerUtilisateur ? enregistrerModification : ajouterUtilisateur}
          >
            {editerUtilisateur ? "Enregistrer" : "Ajouter"}
          </button>
        </div>

        {/* Liste des utilisateurs */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-3 px-4 bg-gray-100 text-left text-gray-600 font-medium uppercase text-sm">Nom</th>
                <th className="py-3 px-4 bg-gray-100 text-left text-gray-600 font-medium uppercase text-sm">Email</th>
                <th className="py-3 px-4 bg-gray-100 text-left text-gray-600 font-medium uppercase text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {utilisateurs.map((utilisateur) => (
                <tr key={utilisateur.id} className="border-t hover:bg-gray-100">
                  <td className="py-3 px-4 text-gray-700">{utilisateur.nom}</td>
                  <td className="py-3 px-4 text-gray-700">{utilisateur.email}</td>
                  <td className="py-3 px-4 text-gray-700">
                    <button
                      className="text-indigo-500 hover:text-indigo-600 mr-4"
                      onClick={() => modifierUtilisateur(utilisateur)}
                    >
                      Modifier
                    </button>
                    <button
                      className="text-red-500 hover:text-red-600"
                      onClick={() => supprimerUtilisateur(utilisateur.id)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
