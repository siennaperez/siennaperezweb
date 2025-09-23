import cam from '../media/cam.png';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            Welcome to my page!
            <img src={cam} alt="cam" />;

        </p>
      </header>
    </div>
    
  );
}

export default Home;