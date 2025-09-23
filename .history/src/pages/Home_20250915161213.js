import Draggable from 'react-draggable';
import cam from '../media/cam.png';
import orchid from '../media/orchid.png';
import redpatches from '../media/red-patches.png';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to my page!</p>

        <Draggable>
          <img src={cam} alt="cam" className="draggable-img" />
        </Draggable>

        <Draggable>
          <img src={orchid} alt="orchid" className="draggable-img" />
        </Draggable>

        <Draggable>
          <img src={redpatches} alt="redpatches" className="draggable-img" />
        </Draggable>
      </header>
    </div>
  );
}

export default Home;
