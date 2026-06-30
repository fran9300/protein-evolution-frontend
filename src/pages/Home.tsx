import FastaUploader from "../components/FastaUploader";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <main
        className="
        max-w-5xl
        mx-auto
        px-6
        py-12
        "
      >
        <h1
          className="
          text-5xl
          font-bold
          text-slate-900
          mb-4
          "
        >
          Protein Evolution Explorer 🧬
        </h1>

        <p
          className="
          text-slate-600
          mb-10
          "
        >
          Analyze protein sequences and explore molecular properties.
        </p>

        <FastaUploader />
      </main>
    </div>
  );
}

export default Home;
