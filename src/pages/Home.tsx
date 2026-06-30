import FastaUploader from "../components/FastaUploader";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <h1>Protein Evolution Explorer</h1>
      <Navbar />
      <FastaUploader />
    </div>
  );
}

export default Home;
