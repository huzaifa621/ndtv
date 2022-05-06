import React, { useEffect, useState } from 'react'
import {MainNewsDes, MainNewsDiv, MainNewsH2, MainNewsImg, MainNewsPubDate, MainNewsTimeDiv } from '../Components/styles'
import '../fontawesome-free-6.0.0-web/css/all.css'
import { MainNewsContainerStyle } from '../Components/styles'
import '../Components/common.css'
import { FindMonth } from '../Redux/Action'
export const Latest = () => {
    const [data,setData]  = useState([])
    const CallData = async()=>{
        let promise = await fetch("https://newsapi.org/v2/everything?q=latest&apiKey=81cd23c204f349be81345237249f7737");

        let d = await promise.json();
        setData(d.articles)
    }
    useEffect(()=>{
        CallData()
    },[])
    let count=0;
  return (
    <MainNewsContainerStyle>
        {data.map((el,i)=>{
            if(el.description && el.urlToImage){
                if(el.description[0]!=="<"){
                    let year = ""
            let month ="";
            let date = "";
            let hour=""
            let min=""
            for(let i=0;i<4;i++){
               year+= el.publishedAt[i]
            }
            for(let i=5;i<7;i++){
               month+= el.publishedAt[i]
            }
            for(let i=8;i<10;i++){
               date+= el.publishedAt[i]
            }
            for(let i=11;i<13;i++){
               hour+= el.publishedAt[i]
            }
            for(let i=14;i<16;i++){
               min+= el.publishedAt[i]
            }
            hour  = +hour
            let zone=""
            if(hour>12){
                zone = "PM"
            }
            else{
                zone = "AM"
            }
            if(hour===12 || hour===24 || hour===0){
                hour=12
              }
            else{
                hour = hour%12
            }
            let des = ""
            if(el.description){
                if(el.description.length>77){
                    for(let i=0;i<72;i++){
                        if(el.description[i]==="<"){
                            return
                          }
                        des+=el.description[i]
                    }
                    des+="..."
                }
                else{
                    des = el.description
                }
            }
            month = +month
            month = FindMonth(month)
            count++;
            if(count===1){
                return(
                    <div className='MainNewsFirstDiv'>
                            <div className='pointer MainNewsFirstH2'>LATEST NEWS</div>
                            <h2 className='pointer MainNewsFirstDes'>{des}</h2>
                            <img className='pointer MainNewsFirstImg' src={el.urlToImage} alt="" />
                            <div className='MainNewsTimeFirstDiv'>
                                <div className='MainNewsFirstPubDate'>Updated on {month} {date}, {year} {hour}:{min} {zone} IST</div>
                                <div>
                                    <i style={{padding:"10px 12px",fontSize:"22px",color:"#2f2f2f"}} class="fa-solid fa-share-nodes"></i>
                                    <i style={{padding:"10px 0px 10px 13px",fontSize:"22px",color:"#2f2f2f"}} class="fa-regular fa-bookmark"></i>
                                </div>
                            </div>
                    </div>
                )
            }
            else{
                    return(
        
                        <MainNewsDiv className='MainNewsDiv'>
                            <div>
                                <MainNewsH2 className='pointer'>LATEST NEWS</MainNewsH2>
                                <MainNewsDes className='pointer'>{des}</MainNewsDes>
                                <MainNewsTimeDiv>
                                    <MainNewsPubDate>Updated on {month} {date}, {year} {hour}:{min} {zone} IST</MainNewsPubDate>
                                    <div>
                                        <i style={{padding:"10px 12px",fontSize:"22px",color:"#2f2f2f"}} class="fa-solid fa-share-nodes"></i>
                                        <i style={{padding:"10px 0px 10px 13px",fontSize:"22px",color:"#2f2f2f"}} class="fa-regular fa-bookmark"></i>
                                    </div>
                                </MainNewsTimeDiv>
                            </div>
                            <div>
                                <MainNewsImg className='pointer' src={el.urlToImage} alt="" />
                            </div>
                        </MainNewsDiv>
                    )
            }
                }
            }
        })}
    </MainNewsContainerStyle>
  )
}
