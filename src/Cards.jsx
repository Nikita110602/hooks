import React from 'react';

function Card(props){
   // console.log(props);
    return(
        
    <>
    
      <div className="cards">
        <div className="card">
        <img src={props.imgsrc} alt="myPic" height={200}  className="card_img" />
        <div className="card_info">
          <span className="card_category"> {props.title} </span>
          <h3 className="classname">{props.sname}</h3>
          <a href={props.link} target="blank">{props.sname}</a>
          <button>Watch Now</button>
        </div>
     </div>
  </div>
  </>
  )
  }

  export default Card;
  
