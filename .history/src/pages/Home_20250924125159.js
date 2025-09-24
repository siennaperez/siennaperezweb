import cam from '../media/cam.png';
import orchid from '../media/orchid.png';
import redpatches from '../media/red-patches.png';
import toops from '../media/sienna_toopy.jpg';
import honeywell from '../media/honeywell_gator.JPG';


import about from '../pages/About.js'

import "./Home.css";



function Home() {
  return (
    <div className="App">
        <img src={toops} alt="toops" className="toops-img"/>;
        <img src={cam} alt="cam" className="cam-img"/>;
        <img src={orchid} alt="orchid" className="orchid-img"/>;
        <img src={redpatches} alt="redpatches" className="redpatches-img"/>;
        <img src={honeywell} alt="honeywell" className="honeywell-img"/>;


        < about />
    </div>
    
  );
}

export default Home;