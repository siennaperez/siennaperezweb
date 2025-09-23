import cam from '../media/cam.png';
import orchid from '../media/orchid.png';
import redpatches from '../media/red-patches.png';
import about from '../pages/About.js'


function Home() {
  return (
    <div className="App">
        <img src={cam} alt="cam" className="cam-img"/>;
        <img src={orchid} alt="orchid" className="orchid-img"/>;
        <img src={redpatches} alt="redpatches" className="redpatches-img"/>;
        < about />
    </div>
    
  );
}

export default Home;