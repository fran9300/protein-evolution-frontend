import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getProteinById } from "../api/proteinApi";

import type { ProteinAnalysisDetail } from "../types/protein";

import Navbar from "../components/Navbar";

function ProteinDetail() {
  const { id } = useParams();

  const [protein, setProtein] = useState<ProteinAnalysisDetail | null>(null);

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

      <main
        className="
        max-w-4xl
        mx-auto
        px-6
        py-10
        "
      >
        <div
          className="
          bg-white
          rounded-xl
          shadow
          p-8
          "
        >
          <h2
            className="
            text-3xl
            font-bold
            mb-6
            text-cyan-700
            "
          >
            {protein.proteinId}
          </h2>

          <div
            className="
            grid
            grid-cols-2
            gap-5
            "
          >
            <p>
              Length:
              <b> {protein.length}</b>
            </p>

            <p>
              Weight:
              <b> {protein.molecularWeight}</b>
            </p>

            <p>
              pI:
              <b> {protein.pI}</b>
            </p>

            <p>
              Hydrophobicity:
              <b> {protein.hydrophobicity}</b>
            </p>

            <p>
              Instability:
              <b> {protein.instabilityIndex}</b>
            </p>

            <p>
              Aliphatic:
              <b> {protein.aliphaticIndex}</b>
            </p>
          </div>

          <h3
            className="
            text-xl
            font-bold
            mt-8
            mb-4
            "
          >
            Secondary Structure
          </h3>

          <div
            className="
            grid
            grid-cols-3
            gap-4
            "
          >
            <div className="bg-slate-100 p-4 rounded-lg">
              Alpha Helix
              <br />
              {protein.structure.alphaHelix}%
            </div>

            <div className="bg-slate-100 p-4 rounded-lg">
              Beta Sheet
              <br />
              {protein.structure.betaSheet}%
            </div>

            <div className="bg-slate-100 p-4 rounded-lg">
              Turn
              <br />
              {protein.structure.turn}%
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProteinDetail;
