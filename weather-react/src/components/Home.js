import React, { useState } from 'react'
import './Home.css'

export default function Home() {


    const [imgsrc , setImgsrc] = useState("")
    const [city , setCity] = useState("null")
    const [status , setStatus] = useState("null")
    const [temp , setTemp] = useState("null")
    const [humidity , setHumidity] = useState("null")

    const [location, setLocation] = useState("")

    const getData = async () => {
        const res = await fetch(`/weather/${location}`)
        const resdata = await res.json()
        setImgsrc(resdata.current.condition.icon)
        setCity(resdata.location.name)
        setStatus(resdata.current.condition.text)
        setTemp(resdata.current.temp_c)
        setHumidity(resdata.current.humidity)
    }


    const setPlace = (e) => {
        setLocation(e.target.value)
    }






    return (
        <>
            <div className="container">
                <div className="data">
                    <div className="statuspic">
                        <img src={imgsrc} alt=""/>
                    </div>
                    <div className="info beautify">
                        <div className="loc">
                            <h2>City</h2>
                            <h3 id='location'>{city}</h3>
                        </div>
                        <div className="stat">
                            <h2>Status</h2>
                            <h3 id='status'>{status}</h3>
                        </div>
                    </div>
                    <div className="details beautify">
                        <div className="temp">
                            <h2>Temp(C)</h2>
                            <h3 id='temperature'>{temp}</h3>
                        </div>
                        <div className="hum">
                            <h2>Humidity</h2>
                            <h3 id='humidity'>{humidity}</h3>
                        </div>
                    </div>
                    <div className="inputs">
                        <input type="text" placeholder="Enter Place or ( Lat,Long )" id='place' onChange={setPlace}/>
                        <button id='submit' onClick={getData}>Search</button>
                    </div>
                </div>
                </div>
   
        </> 
        
    )
}
