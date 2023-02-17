import React from "react";
import "./SectionTwo.css";
import Tilt from "react-parallax-tilt";

const Test = () => {


  const data=[
    {
      url:"https://res.cloudinary.com/dqyvomyqy/image/upload/v1676106872/techfest/jason-leung-iDQVmcPFOCI-unsplash_x3htuu.jpg",
      name:"Robotic world",
      date:"24th March 2023"
    },
    {
      url:"https://res.cloudinary.com/dqyvomyqy/image/upload/v1676106953/techfest/thomas-griesbeck-oMJ5JyTffGA-unsplash_hsp14g.jpg",
      name:"drone show",
      date:"25th March 2023"
    },
    {
      url:"https://res.cloudinary.com/dqyvomyqy/image/upload/v1676107013/techfest/martin-katler-7wCxlBfGMdk-unsplash_cki8ym.jpg",
      name:"inside cpu",
      date:"26th March 2023"
    },
    {
      url:"https://res.cloudinary.com/dqyvomyqy/image/upload/v1676106872/techfest/jason-leung-iDQVmcPFOCI-unsplash_x3htuu.jpg",
      name:"Robotic world",
      date:"24th March 2023"
    },
    {
      url:"https://res.cloudinary.com/dqyvomyqy/image/upload/v1676106953/techfest/thomas-griesbeck-oMJ5JyTffGA-unsplash_hsp14g.jpg",
      name:"drone show",
      date:"25th March 2023"
    },
    {
      url:"https://res.cloudinary.com/dqyvomyqy/image/upload/v1676107013/techfest/martin-katler-7wCxlBfGMdk-unsplash_cki8ym.jpg",
      name:"inside cpu",
      date:"26th March 2023"
    },


  ]

  return (
    <div className="main-section">
      {data && data.map((data,key)=>{
        return (
          <Tilt key={key}>
          <div className="main" >
              <div><img src={data.url} alt="img" /></div>
              <div>{data.name}</div>
              <div>{data.date}</div>
          </div>
          </Tilt>
        )
      })}
    </div>
  );
};

export default Test;
