import React,{useEffect, useState} from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
  Marker
} from "react-simple-maps";

const CountryMap = (props) => {
  const [latlng, setlatlng ] = useState([200,44])
  useEffect(()=>{
    console.log(props)
    if(props.latlng)
    setlatlng([...props.latlng])
  },[props.latlng])
  return (
    <div>
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{
        rotate: [0,0, 0],
        center: [0, 0],
        scale: 150
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {
        latlng.length>0 && (
          // <Marker coordinates={[latlng[1],latlng[0]]} fill="#777">
          //   <text textAnchor="middle" fill="#F53">
          //     Canada
          //   </text>
          // </Marker>
                <Annotation
                  subject={[latlng[1],latlng[0]]}
                 
                  connectorProps={{
                    stroke: "#FF5533",
                    strokeWidth: 1,
                    strokeLinecap: "round"
                  }}
                >
                  <text x="9" textAnchor="end" alignmentBaseline="middle" fill="#F53">
                    {props.country}
                  </text>
                </Annotation>
        )
      }
      
    </ComposableMap>
    </div>
  );
};

export default CountryMap;
