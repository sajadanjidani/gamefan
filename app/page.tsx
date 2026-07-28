
// import component
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import DownloadBox from "./components/DownloadBox";
import Slider from "./components/Slider/Slider"
import ADS from "./components/ADS";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <DownloadBox />
      <Slider catrgoryTitle='Updated Games'/>
      <Slider catrgoryTitle='Favorite Games'/>
      <ADS />
      <Slider catrgoryTitle='Action Games'/>
      <Slider catrgoryTitle='Shooting Games'/>
      <Footer />
    </div>
  );
}
