import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import jsonData from './data.json';

const RoadDetails = () => {
 let { id } = useParams(); 
 let response = jsonData.road.filter( data => {
      return data.id = id
 });




  return (
    <div className="container mt-5">
        <div className="row" style={{ border: '1px solid red'}}>
            <div className="col-md-4" style={{ border: '1px solid blue'}}>
                {response.roadName}
            </div>
            <div className="col-md-4" style={{ border: '1px solid blue'}}>
                hello
            </div>
            <div className="col-md-4" style={{ border: '1px solid blue'}}>
                hello
            </div>
        </div>
    </div>
  )
}

export default RoadDetails