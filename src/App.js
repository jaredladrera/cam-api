import React, { useEffect, useRef } from 'react';
import './App.css';
import jsonData from './data.json';
import { Link } from 'react-router-dom';

function App() {
  

  return (

  <>
    <div className='container-fluid mt-5'>
      <div className='row' style={{ width: '100%'}}>
        {jsonData.road.map(roads => {
          
          return (
            <div className='col-md-4' key={roads.id}>
            <div className="card mt-3" style={{width: "18rem;"}} >
                <iframe
                title="YouTube Video"
                width="100%"  // Adjust the width as needed
                height="315" // Adjust the height as needed
                src={`https://www.youtube.com/embed/${roads.camLink.split('https://youtu.be/')[1]}?autoplay=1&mute=1`}
                // src={`https://www.youtube.com/embed/${roads.camLink.split('https://youtu.be/')[1]}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

            {/* <img src="..." className="card-img-top" alt="..."/> */}
            <div className="card-body">
                <h4 className='card-text'>{roads.roadName}</h4>
                <p className='text-bold'>Camera : <b>{roads.camera ? roads.camera : 'No Data Found'}</b></p>
                <p> Map : <a href={roads.mapLink}>Map</a></p>
                {/* <Link to={`/road/${roads.id}`} style={{ textDecoration: 'none', fontWeight: 'bolder'}}>See more...</Link> */}
            </div>
          </div>
        </div>
          )
        })}
      </div>
      
    </div>


  </>
  );
}

export default App;
