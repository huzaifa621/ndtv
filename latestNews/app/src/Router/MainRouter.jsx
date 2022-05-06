import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { BelowNavBar } from '../Components/styles'
import '../Components/common.css'
import { LeftSideNewsContainer } from '../Pages/LeftSideNewsContainer'
import { Latest } from '../Pages/Latest'


export const MainRouter = () => {
  return (
    <>
    <BelowNavBar id='BelowNavBar'>
      <LeftSideNewsContainer/>
    <Routes>
        <Route path='/' element={<Latest/>}/>
    </Routes>
    </BelowNavBar>
    </>
  )
}
