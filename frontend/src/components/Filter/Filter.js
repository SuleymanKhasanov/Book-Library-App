import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateTitleFilter, resetFilters } from "../../redux/slices/filterSlice";
import { selectTitleFilter } from "../../redux/slices/filterSlice";
import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);

  const hendleTitleFilterChange = (event) => {
    dispatch(stateTitleFilter(event.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by title..."
            onChange={hendleTitleFilterChange}
            value={titleFilter}
          />
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
