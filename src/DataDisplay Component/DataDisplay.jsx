import React from 'react';
import './DataDisplay.css';

const DataDisplay = ({ data }) => {
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
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.text}</td>
              <td>{item.verified}</td>
              <td>{item.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataDisplay;
