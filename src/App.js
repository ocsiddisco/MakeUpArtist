import './App.css';
import TopPart from './components/TopPart';
import MiddlePart from './components/MiddlePart';
import Contact from './components/Contact';
import { images } from "./components/images";
import PortfolioBox from "./components/PortfolioBox";


function App() {

  return (
    <div id='App' className="App">
      <TopPart />
      <MiddlePart>
          <PortfolioBox images={images} />
      </MiddlePart>
      <Contact />
    </div>
  );
}

export default App;

