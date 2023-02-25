import './styles/App.css';
import Node from './Node.js';
import { useEffect, useState } from 'react';


const App = () => {
  const [placedNodes, setPlacedNodes] = useState([1, 5, 18, 3, 9, 8]);
  const [selectedNode, setSelectedNode] = useState(5);

  useEffect(() => {
    NetworkTables.addKeyListener("/SmartDashboard/placedNodes", (key, value, isNew) => { // eslint-disable-line
      setPlacedNodes(value);
    });
  }, []);

  useEffect(() => {
    NetworkTables.putValue("/SmartDashboard/selectedNode", selectedNode); // eslint-disable-line
  }, [selectedNode])


  function makeNode(index) {
    return <Node 
              hasBeenPlaced={placedNodes.includes(index)}
              isCone={(index > 18)? undefined : ![2, 5, 8].includes(index % 9)}
              index={index}
              key={index}
              selected={selectedNode === index}
              onClick={() => setSelectedNode(index)}
            />;
  }

  return (
    <div className="App">
      <header>
        <img src="/images/text-4611.png" alt="Ozone Robotics" id="header-image" />
      </header>
      <section id="main-content">
        
        <div id="grid">
          <div id="left-section" className='grid-section'>
            {[2, 1, 0].map(n => <div>{[1, 2, 3].map(m => makeNode(n * 9 + m))}</div>)}
          </div>
          <div id="middle-section" className='grid-section'>
            {[2, 1, 0].map(n => <div>{[4, 5, 6].map(m => makeNode(n * 9 + m))}</div>)}
          </div>
          <div id="right-section" className='grid-section'>
            {[2, 1, 0].map(n => <div>{[7, 8, 9].map(m => makeNode(n * 9 + m))}</div>)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
