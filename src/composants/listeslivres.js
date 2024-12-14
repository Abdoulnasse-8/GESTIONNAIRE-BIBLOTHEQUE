import React from "react";
import CartesLivres from "./carteslivres";
import { motion } from "framer-motion";

const livres = [
  { titre: "1984", auteur: "George Orwell" },
  { titre: "Harry Potter", auteur: "J.K. Rowling" },
  { titre: "Don Quichotte", auteur: "Miguel de Cervantes" },
];

export default function ListesLivres() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {livres.map((livre, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <CartesLivres titre={livre.titre} auteur={livre.auteur} />
        </motion.div>
      ))}
    </div>
  );
}
