import React from 'react'
import { data } from "../../data";
import InfoContainer from "../infocontainer/InfoContainer";



const InfoSection = () => {
  return (
    <>
      {data.map(d => {
        return (
          <InfoContainer data={d} />
        )
      })}
    </>
  )
}

export default InfoSection
