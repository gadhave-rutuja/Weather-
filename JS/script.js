function getData(){
    let value = document.getElementById("input").value;
    const options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: {
          location: value,
          format: 'json',
          u: 'f'
        },
        headers: {
          'x-rapidapi-key': 'b56fb1194cmsh03ef3be68adc01ep1a14ecjsn2ed7609c51eb',
          'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
        }
      };

axios(options).then((response)=>{
    console.log(response.data);
    //day
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    document.getElementById("week").innerHTML = day;

    //date
  // const d3=new Date();
   let d2 =d.toLocaleString();
   document.getElementById("date2").innerHTML=d2;

   //cast
   let cst= response.data.current_observation.condition.text;
   document.getElementById("cast").innerHTML=cst;

    //country
    let con= response.data.location.country;
    document.getElementById("country").innerHTML=con;

//temperature

let temp= response.data.current_observation.condition.temperature;
let temp2=(temp - 32)*5/9;
let temp3 = Math.round(temp2);

document.getElementById("temper").innerHTML=temp3+"&deg"+"C";





let tem4= response.data.current_observation.condition.temperature;
let temp5=(temp - 32)*5/9;
let temp6 = Math.round(temp5);

document.getElementById("temp").innerHTML=temp3+"&deg"+"C";

//humadity

let hum = response.data.current_observation.atmosphere.humidity;
document.getElementById("humidity").innerHTML=hum;

//wind speed
let speed = response.data.current_observation.wind.speed;
document.getElementById("speed").innerHTML=speed+" Km/h";


//forecast
document.getElementById("day").innerHTML=day;

let txt = response.data.forecasts[1].text;
document.getElementById("text").innerHTML=txt;

//sunrise
let sun1 = response.data.current_observation.astronomy.sunrise;
document.getElementById("sunrise").innerHTML=sun1;

//sunset

let sun2 = response.data.current_observation.astronomy.sunset;
document.getElementById("sunset").innerHTML=sun2;

//wind direaction
let direc = response.data.current_observation.wind.direction;
document.getElementById("dir").innerHTML=direc;




}).catch((error)=>{
    console.log(error);
})






}