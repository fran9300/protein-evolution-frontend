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
      <h2>Analyzed Proteins</h2>

      {proteins.map((protein) => (
        <div key={protein.id}>
          <h3>
            <Link to={`/proteins/${encodeURIComponent(protein.id)}`}>
              {protein.proteinId}
            </Link>
          </h3>

          <p>Length: {protein.length}</p>

          <p>Weight: {protein.molecularWeight}</p>
        </div>
      ))}
    </div>
  );
}

export default Proteins;
