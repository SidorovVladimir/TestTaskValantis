import React from 'react';
import './Filter.css';

const Filter = ({ setFilter, setCurrentPage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = formData.get('value');
    const category = formData.get('category');
    setCurrentPage(0);
    setFilter({ category, value });
  };

  return (
    <div className="filter">
      <form className="form" action="#" onSubmit={handleSubmit}>
        <select name="category">
          <option value="noFilter">Без фильтра</option>
          <option value="price">По цене</option>
          <option value="product">По названию </option>
          <option value="brand">По бренду</option>
        </select>
        <input type="text" name="value" placeholder="Введите критерий поиска..." />
        <button className="button" type="submit" aria-label="Send">Применить</button>
      </form>
    </div>
  );
};

export default Filter;
