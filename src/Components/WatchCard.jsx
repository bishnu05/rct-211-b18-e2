import React from "react";

const WatchCard = ({ id,name,image,category }) => {
  return (
    <div data-testid={`watch-card-wrapper-${id}`}
    style={{
      display:"block",
      width:"300px",
      height:"390px",
      border:"2px solid black",
      borderRadius:"5px",
    }}>
      <div style={{
        display:"flex",
        height:"320px",
        padding:"20px 20px 0 20px",
        flexDirection:"column",
        justifyContent:"center",
      }}>
        <img data-testid="watch-card-image" src={image} alt="watch" 
        style={{backgroundSize:"contain",
            width:"100%",maxHeight:"100%"}} />
      </div>
      <div style={{textAlign:"center"}}>
        <div data-testid="watch-name" style={{fontSize:"24px"}}>{name}</div>
        <div data-testid="watch-category">{category}</div>
      </div>
    </div>
  );
};

export default WatchCard;


{/* <div style={{border:"1px solid blue", width:"100%", height:"300px", margin:"auto"}}><img style={{width:"53%",height:"200px",marginLeft:"70px",marginTop:"30px"}} src={watch.image} alt={watch.name}/></div>
                  <div style={{textAlign:"center"}}>{watch.category}</div> */}