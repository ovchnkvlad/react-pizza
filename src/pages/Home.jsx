import React from 'react';
import { useState } from 'react/cjs/react.development';

import { Categories, PizzaBlock, SortPopup } from '../componets';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = ['популярности', 'цене', 'алфавите'];
function Home({ items }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSortType, setActiveSortType] = useState(sortItems[0]);
  const onSelectCategory = (index) => {
    setActiveCategory(index);
  };
  const onClickSortType = (index) => {
    setActiveSortType(sortItems[index]);
  };
  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={activeCategory}
            onClickCategory={onSelectCategory}
            items={categoryNames}
          />
          <SortPopup
            activeSortType={activeSortType}
            onClickSortType={onClickSortType}
            items={sortItems}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {items.map((obj) => (
            <PizzaBlock key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
