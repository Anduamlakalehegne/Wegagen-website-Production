import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {Marker, Popup,Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { defaultIcon } from './icon/defaultIcon';
import { Card } from 'antd';
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
//import MapsHomeWork from '@mui/icons-material/MapsHomeWork';

function Atmlocation() { 
  
    const [atm,setAtm] =useState([])
    const getAtm= async ()=>{
       
       try {
          const response = await axios.get("http://localhost:8081/atm") 
          //const summ_json = await response.json()
          //const obj = Object.assign({}, response)
          setAtm(response.data)
         
       } catch (err) {
           console.error(err.message)
       }
     
   }
   
     useEffect(()=>{
   
        getAtm();
        
     },[])
     
   console.log(atm) 
   
   const LeafletMap=useMap()
     
   return(atm.map( feature => {
     const coordinates = feature.atm.geometry.coordinates;
   
     console.log(coordinates)
     const name = feature.atm.properties.name;
     const town_name = feature.atm.properties.town_name;
     const location = feature.atm.properties.location;
     
    //  const iconMarkup = renderToStaticMarkup(
    //   <MapsHomeWork style={{ color: 'Green' }}>
    //     Buildings
    //   </MapsHomeWork>
      
    // // );
    // const customMarkerIcon = divIcon({
    //   html: iconMarkup
    // });
    
   const Title =()=>{
      return (
        <Card type="inner"   title="Building">
          <p><b>Name:</b> {name} <br/> <b>City/Town:</b> {town_name} <br/> </p>          
        
        </Card>
      )
    };
   
   return(
    <Marker position={[coordinates[1],coordinates[0]]} icon= {defaultIcon} 
    eventHandlers={{ click: (e)=> LeafletMap.panTo(e.latlng)}}>  
   
    <Tooltip>
      <Title/> 
   </Tooltip>
   
   </Marker>
   );
   }
   ))

}

export default Atmlocation