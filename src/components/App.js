import './App.css';
import IMGSlide from './images-slide/img-slide';
import NavBar from './nav-bar/navBar';
import ImagesPart2Container from './images-par2/imagesPart2-contaner';
import BestSeller from './BEST-SELLER/BEST-SELLER';

function App() {
  return (
    <div className="App">
      <NavBar />
      <IMGSlide />
      <ImagesPart2Container />
      <BestSeller />
    </div>
  );
}

export default App;
