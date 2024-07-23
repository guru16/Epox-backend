import React from "react";

const Filter = ({ onFilterChange }) => {
  return (
    <div className="filter-section">
      <label htmlFor="category-filter">Showing 1–72 of 162 results</label>
      <select
        id="category-filter"
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
      </select>
    </div>
  );
};

export default Filter;
