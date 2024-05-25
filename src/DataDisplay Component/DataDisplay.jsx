import React from 'react';
import './DataDisplay.css';

function DataDisplay({ facts }) {
  return (
    <div className="data-display">
      <h2>Data Display</h2>
      <table>
        <thead>
          <tr>
            <th>Fact</th>
            <th>Verified</th>
            <th>Created On</th>
          </tr>
        </thead>
        <tbody>
          {facts.map((fact, index) => (
            <tr key={index}>
              <td>{fact.text}</td>
              <td>{fact.verified}</td>
              <td>{fact.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataDisplay;
