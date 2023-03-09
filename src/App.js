
import './App.css';
import AppFeatures from './Components/AppFeatures/AppFeatures';
import featureData from './data';
import Header from './Components/Header/Header'
import MusicApp from './Components/MusicApp/MusicApp';
import ProductAnalysis from './Components/Product-Analysis/ProductAnalysis.jsx';
import FeaturesAnalysis from './Components/Features-Anlaysis/FeaturesAnalysis';
import ServiceCard from './common-components/ServiceCard.jsx/ServiceCard';
import Service from './Components/Services/Service';
import Customers from './Components/Customers/Customers';
import Download from './Components/Download/Download';
import Footer from './Components/Footer/Footer';

function App() {
  const fun =()=>
  {
    console.log("hii",featureData)
  }
  return (
    <div className="App">
      hi{/* <Header/> */}
      {/* <MusicApp/>
      <AppFeatures/>
      <ProductAnalysis/>
      <FeaturesAnalysis/>
      <Service/>
      <Customers/>
      <Download/>
      <Footer/> */}
    </div>
  );
}

export default App;
