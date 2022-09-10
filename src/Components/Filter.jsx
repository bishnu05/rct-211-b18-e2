import React from "react";
import { useEffect,useState } from "react";
import { useSearchParams } from "react-router-dom";
const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
  const [searchParams, setSearchParams] = useSearchParams();
   const initialCategoryParams=searchParams.getAll("category");
   
  const [category,setCategory]=useState(initialCategoryParams||[]);
  
  
const handleCategoryChange=(e)=>{
  const option=e.target.value;
let newCategory=[...category];
if(category.includes(option)){
  newCategory.splice(newCategory.indexOf(option), 1);
}
else{
  newCategory.push(option);
}
setCategory(newCategory);
}

useEffect(()=>{
  if(category){
    const params={}
    //category && (params.category=category);
    setSearchParams({category})
  }
},[category,setSearchParams])

  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Analog" defaultChecked={category.includes("Analog")}  onChange={handleCategoryChange}/>
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox" value="Digital" onChange={handleCategoryChange} />
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" value="Chronograph"  onChange={handleCategoryChange}/>
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
