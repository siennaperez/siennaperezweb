import cam from '../media/cam.png';
import orchid from '../media/orchid.png';
import redpatches from '../media/red-patches.png';
import toops from '../media/sienna_toopy.jpg';
import honeywell from '../media/honeywell_gator.JPG';
import wicse from '../media/wicse.JPG';
import sienna from '../media/sienna_headshot.JPG';
import winghacks from '../media/winghacks.JPG';
import polaroids from '../media/polaroids.JPG';



import "./Home.css";



function Home() {
  return (
    <div className="App">
        <img src={toops} alt="toops" className="toops-img"/>;
        <img src={cam} alt="cam" className="cam-img"/>;
        <img src={orchid} alt="orchid" className="orchid-img"/>;
        <img src={redpatches} alt="redpatches" className="redpatches-img"/>;
        <img src={honeywell} alt="honeywell" className="honeywell-img"/>;
        <img src={wicse} alt="wicse" className="wicse-img"/>;
        <img src={winghacks} alt="winghacks" className="winghacks-img"/>;

        <img src={sienna} alt="sienna" className="sienna-img"/>;
        <img src={polaroids} alt="polaroids" className="polaroids-img"/>;


        < about />
    </div>
    
  );
}

export default Home;