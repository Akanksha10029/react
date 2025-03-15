import React from 'react';

function Card({ color }) {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)]">
      <div
        className=" h-[23vh] text-center bg-white shadow-lg rounded-lg p-6"
        style={{ color: color }}
      >
        <h1>Naam batao</h1>
        <p>Hehe!! main Akanksha</p>
      </div>
    </div>
  );
}

export default Card;