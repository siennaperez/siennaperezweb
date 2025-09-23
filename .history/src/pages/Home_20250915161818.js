import cam from '../media/cam.png';
import orchid from '../media/orchid.png';
import redpatches from '../media/red-patches.png';


function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            Welcome to my page!
        </p>
            <img src={cam} alt="cam" className="cam-img"/>;
            <img src={orchid} alt="orchid" className="orchid-img"/>;
            <img src={redpatches} alt="redpatches" className="redpatches-img"/>;

        
      </header>
    </div>
    
  );
}

export default Home;