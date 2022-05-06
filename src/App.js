import React  from 'react';
import './App.css';
// import Card from './components/Card';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [data,setData]=useState([])

  const getNews=()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=1d6c607be96b4a16b2085306b7901038&q=india")
    .then((response)=>{
      // console.log(response)
     setData(response.data.articles)
    })
  }



  return (
    <>
    <div className="">
    <button className='btnbtn-primary' onClick={getNews}>Fetch News</button>
    </div>
<div className="container">
<div className='small'>
<h1>India News</h1>
 <div className='tren'>Trending</div>
  <div className="row">
  {
    data.map((value)=>{
      return(
        <div className="col-1">
        
  
    <img src={value.urlToImage} className="card-img-top" alt="..." />
   
    <div className="card1-t">
      <p className="card-title">{value.title}</p>
      {/* <p className="card-text">{value.description}</p> */}
     
  
      </div>
    </div>
      )
    })
  }
  </div>
  <div className='bign'>

  </div>
  </div>
</div>

    </>
  );
}

export default App;
