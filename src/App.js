import './styles/App.css';
import Node from './Node.js';

function makeNode(placed, index) {
  return <Node hasBeenPlaced={placed} isCone={![2, 5, 8].includes(index % 9)} index={index} key={index} />;
}

function App() {
  return (
    <div className="App">
      <header>
        <img src="/images/text-4611.png" alt="Ozone Robotics" id="header-image" />
      </header>
      <section id="main-content">
        
        <div id="grid">
          <div id="left-section" className='grid-section'>
            {[2, 1, 0].map(n => <div>{[1, 2, 3].map(m => makeNode(false, n * 9 + m))}</div>)}
          </div>
          <div id="middle-section" className='grid-section'>
            {[2, 1, 0].map(n => <div>{[4, 5, 6].map(m => makeNode(false, n * 9 + m))}</div>)}
          </div>
          <div id="right-section" className='grid-section'>
            {[2, 1, 0].map(n => <div>{[7, 8, 9].map(m => makeNode(false, n * 9 + m))}</div>)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
