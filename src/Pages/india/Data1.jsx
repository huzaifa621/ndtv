import React from 'react';
import "./data1.css";
import data from "./data.json";
import trending from "./trending.json";



function Data1() {
  return (
    <div>
    <div className='trending'>
    <p className='blue'>Home  >  India News</p>
  <h1 className='india'>India News</h1>
  <div className='trend'>TRENDING</div> 
    </div>
        <div className="container">
            <div className="left">
            {
      trending.map((item)=>{
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
      data.map((item)=>{
        return <>
          <div className="mainR">
            <div><img className='imgB' src={item.urlToImage} alt=""></img></div>
            <div className='content'>
            <h4 >{item.title}</h4>
            <p className="fonts"> <span className="blue">{item.author}</span> {item.publishedAt}</p>
            <p className='fonts'>{item.description}</p></div>
          </div>
        </>

      })
   }
            </div>
        </div>
    </div>
  )
}

export default Data1