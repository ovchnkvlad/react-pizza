import React from 'react';

function Categories({ onClickCategory, items, activeCategory }) {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
