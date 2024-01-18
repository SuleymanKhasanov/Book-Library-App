import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTitleFilter } from "../../redux/slices/filterSlice";
import { selectTitleFilter } from "../../redux/slices/filterSlice";
import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);

  const hendleTitleFilterChange = (event) => {
    dispatch(setTitleFilter(event.target.value));
  };

  return (
    <div className="app-block filter">
      <div className="filter-group">
        <input
          type="text"
          placeholder="Filter by title..."
          onChange={hendleTitleFilterChange}
          value={titleFilter}
        />
      </div>
    </div>
  );
};

export default Filter;
