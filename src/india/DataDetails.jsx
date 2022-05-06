import React from 'react';
import data from "./data.json";
import trending from "./trending.json";
// import Dataitem from './Dataitem';
import "./dataitem.css"

const DataDetails=()=> {



  return (
    <>
    <div className='trending'>

<div className="topt">
  <p className='blue'>Home  <span></span>  India News</p>
  <h1 className='india'>India News</h1>
  <div className='trend'>TRENDING</div>
  </div>
    <div className="container">
   
   {
      trending.map((item)=>{
        return <>
          <div className="smallc">
            <div><img className='imgS' src={item.urlToImage}></img></div>
            <div><p>{item.title}</p></div>
          </div>
        </>

      })
   }
   </div>
   <div  className='right'>
   {
      data.map((item)=>{
        return <>
          <div className="mainR">
            <div><img className='imgB' src={item.urlToImage}></img></div>
            <div className='content'>
            <h2>{item.title}</h2>
            <p> <span className="blue">{item.author}</span> {item.publishedAt}</p>
            <p>{item.description}</p></div>
          </div>
        </>

      })
   }
   </div>
   </div>
    </>
  )
}

export default DataDetails