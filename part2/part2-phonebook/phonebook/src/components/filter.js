import React from "react";

const Filter = ({ filterName, setFilterName }) => {
  return (
    <div>
      filter shown with{" "}
      <input
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      />
    </div>
  );
};

export default Filter;
