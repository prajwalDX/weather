const btn = document.getElementById('submit')
const locationField = document.getElementById('location')
const statusField = document.getElementById('status')
const tempField = document.getElementById('temperature')
const humidityField = document.getElementById('humidity')
const imgField = document.getElementById('pic')


btn.addEventListener('click' , async () =>{
    // console.log('worked')
    const place = document.getElementById('place').value
    // /console.log(place)
    const res = await fetch(`http://localhost:5000/weather/${place}`)
    const data = await res.json()
    //console.log(data)
    locationField.innerText = data.location.name
    statusField.innerText = data.current.condition.text
    tempField.innerText = data.current.temp_c
    humidityField.innerText = data.current.humidity
    imgField.src = data.current.condition.icon


    
})