import React from 'react'
import { data } from "../../data";
import InfoContainer from "../infocontainer/InfoContainer";



const InfoSection = () => {
  return (
    <>
      {data.map((d, index) => {
        return (
          <InfoContainer data={d} key={index} />
        )
      })}
    </>
  )
}

export default InfoSection
