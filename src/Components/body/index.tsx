import React from 'react'
import Map from '../Map/index';
import Weather from '../api/Weather'



export default function Body() {

    return (
      <>
      <div className="body" style={{display:'grid',  backgroundColor:"#e8e8e8", height:'130vh'}}>

              <div ></div>

              <div style={{backgroundColor:'white', margin:"15px" , borderRadius:"5px", height:"120vh" , gridColumn:'2/3', width:'90vw' }}>
                  <h1 className='title_body'>METEO FRANCE</h1>

                  <div style={{display:'grid' , gridTemplateColumns:"65% 35%"}}>
                    <div ><Map/></div>
                    <div style={{height:'500px', marginTop:'200px', marginRight:'5%'}}> <Weather/></div>
                  </div>
              </div>

              <div ></div>
          </div>
      </>
    )
  }