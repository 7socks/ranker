import React from 'react';

const ResultPage = ({list, restart}) => {
  return (
    <div className="container result-container">
      <h1>Results</h1>
      <ol>
        {list.map((item, i) => {
          return <li key={i}>{item.value}</li>
        })}
      </ol>
      <button onClick={restart}>Start Again</button>
    </div>
  );
}

export default ResultPage;