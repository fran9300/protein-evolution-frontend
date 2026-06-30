import { useEffect, useState } from "react";

import { getProteins, deleteProtein } from "../api/proteinApi";

import type { ProteinAnalysisDetail } from "../types/protein";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

function Proteins() {
  const [proteins, setProteins] = useState<ProteinAnalysisDetail[]>([]);

  useEffect(() => {
    getProteins().then(setProteins);
  }, []);

  async function handleDelete(id: number) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this protein analysis?",
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteProtein(id);

      setProteins(proteins.filter((protein) => protein.id !== id));
    } catch (error) {
      console.error(error);

      alert("Error deleting protein");
    }
  }

  return (
    <div>
      <Navbar />

      <main
        className="
        max-w-5xl
        mx-auto
        px-6
        py-10
        "
      >
        <h2
          className="
          text-3xl
          font-bold
          mb-8
          "
        >
          Analyzed Proteins
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          gap-6
          "
        >
          {proteins.map((protein) => (
            <div
              key={protein.id}
              className="
              bg-white
              rounded-xl
              shadow
              p-6
              border
              hover:shadow-lg
              transition
              "
            >
              <Link
                className="
                text-xl
                font-bold
                text-cyan-700
                "
                to={`/proteins/${protein.id}`}
              >
                🧬 {protein.proteinId}
              </Link>

              <p>Length: {protein.length} aa</p>

              <p>Weight: {protein.molecularWeight} Da</p>

              <button
                className="
                mt-4
                bg-red-500
                text-white
                px-4
                py-2
                rounded-lg
                hover:bg-red-600
                "
                onClick={() => handleDelete(protein.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Proteins;
