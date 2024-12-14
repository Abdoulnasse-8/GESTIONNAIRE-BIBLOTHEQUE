export default function CartesLivres({ titre, auteur }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
      <h2 className="text-lg font-bold text-gray-800">{titre}</h2>
      <p className="text-gray-600">Auteur : {auteur}</p>
      <button className="mt-2 bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600">
        Détails
      </button>
    </div>
  );
}


  