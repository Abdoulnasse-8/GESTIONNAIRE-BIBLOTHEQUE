export default function StatutEmprunt({ statut }) {
    const statusStyles = {
      en_rayon: "bg-green-100 text-green-700",
      en_pret: "bg-yellow-100 text-yellow-700",
      en_retard: "bg-red-100 text-red-700",
      en_reserve: "bg-blue-100 text-blue-700",
      en_travaux: "bg-gray-100 text-gray-700",
    };
  
    return (
      <span className={`px-2 py-1 rounded ${statusStyles[statut] || ""}`}>
        {statut.replace("_", " ")}
      </span>
    );
  }