import React, { useState } from "react";

function List(){

    const flowers = ["Rose","Sunflower","Jasmine","Daffodils","Tulip"];
    const [searchValue, setSearchValue] = useState("")

  return (
    <div className="App">
      <h2>Search filtering</h2>
      <input
        type="text"
        name="search"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
      <ul>
        {flowers
          .filter(name => name.match(new RegExp(searchValue, "i")))
          .map(name => {
            return <li key={name}>{name} </li>
          })}
      </ul>
    </div>
  )
}
export default List;