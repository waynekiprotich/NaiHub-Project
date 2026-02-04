
function Filter({ onCategoryChange }) {

  const handleSelect = (e) => {
    onCategoryChange(e.target.value);
  };

  return (
    <div className="filter-container" style={{ padding: "20px", textAlign: "center" }}>
      <label htmlFor="category-filter" style={{ marginRight: "10px" }}>Filter by Category:</label>
      
      <select 
        className="filter-select-container" 
        onChange={handleSelect} 
        id="category-filter"
      >
        <option value="All">All Categories</option>
        <option value="Music">Music</option>
        <option value="Sports">Sports</option>
        <option value="Food">Food</option>
        <option value="Private">Private</option>
        <option value="Concerts">Concerts</option>
      </select>
    </div>
  );
}

export default Filter;