import "./App.css";
import Header from "./components/Header";
import ProductBody from "./components/ProductBody";
import FilterSection from "./components/FilterSection";
function App() {
  return (
    <>
      <Header />
      <ProductBody />
      <FilterSection />
      <div className="footer">
        <div className="boxFooter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign Up for updates from metta muse</p>
          <div className="searchBox">
            <input></input>
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="boxFooter"></div>
      </div>
    </>
  );
}

export default App;
