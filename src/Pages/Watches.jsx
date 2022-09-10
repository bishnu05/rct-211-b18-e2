import React,{useEffect} from "react";
import Filter from "../Components/Filter";
import {useDispatch,useSelector} from "react-redux";
import {Link, useLocation,useSearchParams} from "react-router-dom";
import {getWatchsData} from "../Redux/AppReducer/action";
import styled from "styled-components"
import WatchCard from "../Components/WatchCard";

const Watches = () => {
     const dispatch=useDispatch()
     const watches=useSelector(store=>store.AppReducer.watches)
     const [searchParams] = useSearchParams()
     const location = useLocation()
     useEffect(()=>{
      if(location || watches.length===0){
        //const sortBy=searchParams.get("sortBy")
        const queryParams={
          params:{
            category:searchParams.getAll("category"),
            //_order:sortBy, 
          }
        };
        dispatch(getWatchsData(queryParams))
      }
     },[location.search,dispatch])
    console.log(location)


  return (
    <HomepageWrapper>
      <FilterWrapper>
      <Filter />
      </FilterWrapper>
      <NewWrapper>
        {/* Map through the watch list here using WatchCard Component */}
        {watches.length>0 && watches.map((watch)=>{
          return (
            <WatchWrapper key={watch.id}>
              <Link to ={`/watches/${watch.id}`}>
                  <WatchCard {...watch}/>
              </Link>
            </WatchWrapper>
          )
        })}
      </NewWrapper>
    </HomepageWrapper>
  );
};

export default Watches;

const WatchWrapper=styled.div`
width:300px,
border:1px solid teal`;

const HomepageWrapper=styled.div`
       display:flex;
       height:auto;
`;
const NewWrapper=styled.div`
      width:100%;
      border:3px solid black;
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(300px,max-content));
      justify-content:space-evenly;
      grid-gap:20px;
`;

const FilterWrapper=styled.div`
      width:200px;
      border:1px solid red;
`;
