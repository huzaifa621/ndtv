import React from 'react';
import "./letest.css";
import letestdata from "./letestdata.json";
import letest from "./letest.json";



function Letest() {
  return (

    <div>
  
    <div className='trending'>
    <p className='blue'>Home  >  Letest News</p>
  <h1 className='india'>Letest News</h1>
  <div className='trend'>TRENDING</div> 
    </div>
        <div className="container">
            <div className="left">
            {
      letest.map((item)=>{
        return <>
          <div className="smallc">
            <div><img className='imgS' src={item.urlToImage} alt=""></img></div>
            <div><p className='text'>{item.title}</p></div>
          </div>
        </>

      })
   }
            </div>




            <div className="right">
            {
      letestdata.map((item)=>{
        return <>
          <div className="mainR">
            <div><img className='imgB' src={item.urlToImage} alt=""></img></div>
            <div className='content'>
            <h3 >{item.title}</h3>
            <p> <span className="blue">{item.author}</span> {item.publishedAt}</p>
            <p>{item.description}</p></div>
          </div>
        </>

      })
   }
            </div>
        </div>
    </div>
  )
}

export default Letest;