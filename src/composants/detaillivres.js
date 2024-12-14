export default function DetailLivres({ livre }) {
    return (
      <div className="p-6 bg-white shadow-md rounded">
        <h1 className="text-2xl font-bold">{livre.titre}</h1>
        <p className="mt-2">Auteur: {livre.auteur}</p>
        <p>Éditeur: {livre.editeur}</p>
        <p>Année de publication: {livre.annee}</p>
        <p className="mt-4 text-gray-700">{livre.description}</p>
      </div>
    );
  }