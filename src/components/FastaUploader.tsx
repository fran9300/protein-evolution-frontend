import { useState } from "react";

import { analyzeProtein } from "../api/proteinApi";

import type { ProteinAnalysis } from "../types/protein";

function FastaUploader() {
  const [file, setFile] = useState<File | null>(null);

  const [result, setResult] = useState<ProteinAnalysis | null>(null);

  const [error, setError] = useState<string | null>(null);

  async function handleAnalyze() {
    if (!file) {
      return;
    }

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
    <div>
      <h2>Upload FASTA</h2>

      <input
        type="file"
        onChange={(event) => setFile(event.target.files?.[0] ?? null)}
      />

      <button onClick={handleAnalyze}>Analyze</button>

      {error && <p>{error}</p>}

      {result && (
        <div>
          <h3>{result.protein.proteinId}</h3>

          <p>Length: {result.protein.length}</p>

          <p>Weight: {result.protein.molecularWeight}</p>

          <p>pI: {result.protein.pI}</p>

          <p>Hydrophobicity: {result.protein.hydrophobicity}</p>
        </div>
      )}
    </div>
  );
}

export default FastaUploader;
