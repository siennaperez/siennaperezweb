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
            <img src={cam} alt="cam" />;
            <img src={orchid} alt="orchid" />;
            <img src={redpatches} alt="redpatches" />;

        
      </header>
    </div>
    
  );
}

export default Home;