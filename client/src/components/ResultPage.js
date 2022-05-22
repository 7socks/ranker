import React from 'react';

const ResultPage = ({list}) => {
  return (
    <div className="container result-container">
      <ol>
        {list.map((item, i) => {
          return <li key={i}>{item.value}</li>
        })}
      </ol>
    </div>
  );
}

export default ResultPage;