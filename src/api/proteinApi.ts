import type { ProteinAnalysis } from "../types/protein";

const API_URL = "http://localhost:8080/api/proteins";

export async function analyzeProtein(file: File): Promise<ProteinAnalysis> {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(`${API_URL}/analyze`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Error analyzing protein");
  }

  return response.json();
}
