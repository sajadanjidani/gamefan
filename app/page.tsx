
// import component
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import DownloadBox from "./components/DownloadBox";
import Slider from "./components/Slider/Slider"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <DownloadBox />
      <Slider catrgoryTitle='Updated Games'/>
      <Slider catrgoryTitle='Favorite Games'/>
      <Slider catrgoryTitle='Action Games'/>
      <Slider catrgoryTitle='Shooting Games'/>
    </div>
  );
}
