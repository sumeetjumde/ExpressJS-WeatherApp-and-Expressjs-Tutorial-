const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const datahide = document.getElementById('data_hide');

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `plz write the name before search`;
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=a581b5a9f443f697a406c557726430ba`;
            const response = await fetch(url);
            const data = await response.json()
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            

            // let tempMood = arrData[0].weather[0].main;

            // if(tempMood === "Clear"){
            //     temp_status.innerHTML = <i class="fas fa-cloud-sun"></i>;
            // }
            // else if (tempMood === "Clouds"){
            //     temp_status.innerHTML = <i class="fas fa-cloud"></i>;
            // }
            // else if(tempMood === "Rain"){
            //     temp_status.innerHTML = <i class="fas fa-cloud-showers-heavy"></i>;
            // }
            // else{
            //     temp_status.innerHTML = <i class="fas fa-sun"></i>;
            // }

            
        }
        catch{
            city_name.innerText = `plz write the name properly`;
        }
    }
}
submitBtn.addEventListener('click',getInfo);