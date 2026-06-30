export interface ProteinSummary {
  proteinId: string;

  length: number;

  molecularWeight: number;

  pI: number;

  hydrophobicity: number;

  instabilityIndex: number;

  aliphaticIndex: number;
}

export interface Structure {
  alphaHelix: number;

  turn: number;

  betaSheet: number;
}

export interface ProteinAnalysis {
  protein: ProteinSummary;

  composition: Record<string, number>;

  structure: Structure;
}

export interface ProteinDetail {
  id: number;

  proteinId: string;

  length: number;

  molecularWeight: number;

  pI: number;

  hydrophobicity: number;

  instabilityIndex: number;

  aliphaticIndex: number;

  composition: Record<string, number>;

  structure: Structure;

  createdAt: string;
}
