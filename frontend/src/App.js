// frontend/src/App.js

import React from 'react';
import Table from './components/Table';
import './App.css'; // Import CSS file for styling

function App() {
  return (
    <div className="App">
       <h1> Dashboard</h1>
      <div className="card-container">
        <div className="card blue">
          <h1>This is a Card</h1>
          <h2 className="primary">Primary Header</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ligula ac turpis efficitur mollis. Sed ultricies arcu ac varius eleifend.</p>
        </div>
        <div className="card red">
          <h1>This is Another Card</h1>
          <h2 className="primary">Secondary Header</h2>
          <p>Suspendisse consequat justo sed libero vehicula, ut egestas nunc eleifend. Ut rutrum vestibulum felis, vel aliquam nisi fermentum id.</p>
        </div>
        <div className="card green">
          <h1>Yet Another Card</h1>
          <h2 className="primary">Tertiary Header</h2>
          <p>Praesent sit amet sapien at nisl bibendum viverra. Vestibulum sit amet enim vitae mauris scelerisque sollicitudin ac id arcu.</p>
        </div>
      </div>
     
      <Table />
    </div>
  );
}

export default App;
