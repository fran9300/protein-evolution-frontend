import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getProteinById } from "../api/proteinApi";

import type { ProteinDetail } from "../types/protein";

import Navbar from "../components/Navbar";

function ProteinDetail() {
  const { id } = useParams();

  const [protein, setProtein] = useState<ProteinDetail | null>(null);

  useEffect(() => {
    if (id) {
      getProteinById(Number(id)).then(setProtein);
    }
  }, [id]);

  if (!protein) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar />
      <h2>{protein.proteinId}</h2>

      <p>Length: {protein.length}</p>

      <p>Weight: {protein.molecularWeight}</p>

      <p>pI: {protein.pI}</p>

      <p>Hydrophobicity: {protein.hydrophobicity}</p>

      <p>
        Instability:
        {protein.instabilityIndex}
      </p>

      <p>
        Aliphatic:
        {protein.aliphaticIndex}
      </p>

      <h3>Structure</h3>

      <p>
        Alpha helix:
        {protein.structure.alphaHelix}
      </p>

      <p>
        Beta sheet:
        {protein.structure.betaSheet}
      </p>

      <p>
        Turn:
        {protein.structure.turn}
      </p>
    </div>
  );
}

export default ProteinDetail;
