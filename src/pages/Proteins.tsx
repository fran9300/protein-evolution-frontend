import { useEffect, useState } from "react";

import { getProteins } from "../api/proteinApi";

import type { ProteinDetail } from "../types/protein";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

function Proteins() {
  const [proteins, setProteins] = useState<ProteinDetail[]>([]);

  useEffect(() => {
    getProteins().then(setProteins);
  }, []);

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
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Proteins;
