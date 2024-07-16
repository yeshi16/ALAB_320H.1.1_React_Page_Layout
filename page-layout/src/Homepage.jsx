import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";


function Homepage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="Homepage">
      <Header header='Employee Directory' />
      <SearchBar onSearch={handleSearch} />
      <EmployeeList /> 
      
    </div>
  );
}

export default Homepage;