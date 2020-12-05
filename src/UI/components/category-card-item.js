import React from 'react';

export function CategoryCardItem({ content }) {
  return (
    <div>
      <div
        className="card w-40 md:w-64 h-24 md:h-40 bg-gray-300 rounded-lg m-2
      md:m-8 flex flex-wrap content-center justify-center"
        style={{ backgroundColor: '#f6e05ec7' }}
      >
        <div className="p-2 text-base text-green-800">{content}</div>
      </div>
    </div>
  );
}
