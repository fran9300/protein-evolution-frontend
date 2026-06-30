import { useState } from "react";

import { analyzeProtein } from "../api/proteinApi";

import type { ProteinAnalysis } from "../types/protein";

function FastaUploader() {
  const [file, setFile] = useState<File | null>(null);

  const [result, setResult] = useState<ProteinAnalysis | null>(null);

  const [error, setError] = useState<string | null>(null);

  async function handleAnalyze() {
    if (!file) return;

    try {
      setError(null);

      const response = await analyzeProtein(file);

      setResult(response);
    } catch (error) {
      console.error(error);

      setError("Error analyzing protein");
    }
  }

  return (
    <div
      className="
      bg-white
      rounded-xl
      shadow-md
      p-8
      border
      border-slate-200
      "
    >

      <h2
        className="
        text-2xl
        font-semibold
        mb-5
        "
      >
        Upload FASTA sequence
      </h2>


      <input
        id="fasta-upload"
        type="file"
        className="hidden"
        onChange={(event) =>
          setFile(event.target.files?.[0] ?? null)
        }
      />


      <label
        htmlFor="fasta-upload"
        className="
        block
        w-fit
        cursor-pointer
        bg-slate-700
        text-white
        px-5
        py-2
        rounded-lg
        hover:bg-slate-800
        transition
        mb-5
        "
      >
        Choose FASTA file
      </label>


      {file && (
        <p className="mb-5 text-sm text-slate-600">
          Selected: {file.name}
        </p>
      )}


      <button
        onClick={handleAnalyze}
        disabled={!file}
        className="
        bg-cyan-600
        text-white
        px-6
        py-2
        rounded-lg
        hover:bg-cyan-700
        transition
        disabled:bg-slate-400
        "
      >
        Analyze
      </button>


      {error && (
        <p className="text-red-600 mt-4">
          {error}
        </p>
      )}


      {result && (
        <div
          className="
          mt-8
          grid
          grid-cols-2
          gap-4
          "
        >

          <div className="bg-slate-100 p-4 rounded-lg">

            <h3 className="font-bold">
              {result.protein.proteinId}
            </h3>

            <p>
              Length: {result.protein.length} aa
            </p>

            <p>
              Weight: {result.protein.molecularWeight} Da
            </p>

          </div>


          <div className="bg-slate-100 p-4 rounded-lg">

            <p>
              pI: {result.protein.pI}
            </p>

            <p>
              Hydrophobicity: {result.protein.hydrophobicity}
            </p>

          </div>

        </div>
      )}

    </div>
  );
}

export default FastaUploader;
