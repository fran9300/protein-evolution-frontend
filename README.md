# ⚛️ Protein Evolution Frontend

<p>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-19-blue.svg" alt="React Version">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-supported-blue.svg" alt="TypeScript">
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/TailwindCSS-supported-cyan.svg" alt="Tailwind CSS">
  </a>
  <a href="https://vite.dev/">
    <img src="https://img.shields.io/badge/Vite-build-purple.svg" alt="Vite">
  </a>
</p>

Frontend application developed with React and TypeScript for exploring and visualizing protein analysis results.

This project provides the user interface of the Protein Evolution Explorer platform, allowing users to upload FASTA files, analyze proteins, and visualize biological properties.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Architecture](#project-architecture)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Application Flow](#application-flow)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## Overview

**Protein Evolution Frontend** is the user interface component of the _Protein Evolution Explorer_ platform.

The application connects with the Spring Boot backend to:

- Upload FASTA protein sequences.
- Request protein analysis.
- Display analyzed proteins.
- Show detailed biological information.

The frontend communicates with the REST API and presents analysis results in an interactive web interface.

---

## Features

### Protein Upload

Provides a user interface for:

- FASTA file selection.
- Sending analysis requests.
- Displaying immediate results after processing.

### Protein Explorer

Allows users to:

- Browse analyzed proteins.
- Access protein summaries.
- Navigate to detailed analysis pages.

### Protein Details Visualization

Displays biological properties:

- Sequence identifier and protein length.
- Molecular weight and Isoelectric point (pI).
- Hydrophobicity, instability index, and aliphatic index.
- Structural composition.

### Navigation

Includes:

- Home page.
- Protein explorer.
- Protein detail pages.

---

## Project Architecture

The frontend follows a component-based architecture:

```text
src/
├── api/
│   └── proteinApi.ts
├── components/
│   ├── Navbar.tsx
│   └── FastaUploader.tsx
├── pages/
│   ├── Home.tsx
│   ├── Proteins.tsx
│   └── ProteinDetail.tsx
├── types/
│   └── protein.ts
├── App.tsx
└── main.tsx
```

### Core Components

- **Pages:** Represent application views and routes.
- **Components:** Reusable UI elements such as navigation and upload forms.
- **API Layer:** Handles communication with the backend REST API.
- **Types:** Defines TypeScript interfaces for biological data models.

---

## Technologies

- **Framework:** React
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **API Communication:** Fetch API
- **Development Tools:** Git, Node.js, npm

---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/fran9300/protein-evolution-frontend.git
cd protein-evolution-frontend
```

2. **Install dependencies:**

```bash
npm install
```

---

## Usage

To start the local development server, run:

```bash
npm run dev
```

The application will be available at:
👉 **http://localhost:5173**

---

## Application Flow

The frontend communicates with the ecosystem components following this workflow:

```text
User ──> React Frontend ──> Spring Boot API ──> Python Protein Analyzer
                                   │
                                   └──> PostgreSQL Database
```

### Process Example:

1. User uploads a FASTA file through the UI.
2. Frontend sends the request to the Spring Boot backend.
3. Backend forwards the data to the Python analyzer service.
4. The analysis result is processed and stored in the database.
5. Frontend retrieves the structured data and displays the visualizations.

---

## Future Improvements

- [ ] Advanced interactive protein 3D structure visualization.
- [ ] Dynamic biological charts and distribution graphs.
- [ ] Protein side-by-side comparison interface.
- [ ] Multi-parameter search and filtering system.
- [ ] User authentication and private accounts.
- [ ] Full platform deployment using Docker Compose.

---

## Author

**Francisco Kin**

- Bioinformatics Student | Backend Development | Data Analysis
- **GitHub:** [@fran9300](https://github.com/fran9300)
