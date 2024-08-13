import React from 'react'

import {Marker, Popup,Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { defaultIcon } from './icon/defaultIcon';
//import { substationIcon } from '../icon/substationIcon';
import { Card } from 'antd';


function Branches({branch_data}){
    const LeafletMap=useMap()
      return(branch_data.features.map( feature => {
       const coordinates = feature.geometry.coordinates;
       const branch_name = feature.properties.substation; 
     
       
    return(
      <Marker position={[coordinates[1],coordinates[0]]} icon= {defaultIcon} 
      eventHandlers={{ click: (e)=> LeafletMap.panTo(e.latlng)}}>   
      <Tooltip>
      <Card type="inner" title="Branch Name">
           {branch_name}
          </Card>
      </Tooltip>
    </Marker>
    );
    }
    ))
    };

    export default Branches

    