import Footer from "./components/Footer";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

function App() {
  return (
    <div>
      <div class="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
        <div class="w3-row-padding">
          <LeftBar />
          <RightBar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
