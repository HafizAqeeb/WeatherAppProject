const cityName = document.getElementById('cityName');

const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer')

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `Please Write the name before search`
        datahide.classList.add('data_hide');
    }else{
        try{
            
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=6cacc19a108fe8aeb1cc2709e6afe363`
            const response = await fetch(url);    
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp
            const tempMood = arrData[0].weather[0].main;
            //Condition to check sunny or cloudy
            if(tempMood == "Clear"){
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color: #eccc68;'></i>"
            }
            else if(tempMood == "Clouds"){
                temp_status.innerHTML = 
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
            }
            else if(tempMood == "Rain"){
                temp_status.innerHTML = 
                "<i class='fas fa-rain' style='color: #a4b0be;'></i>"
            }
            else{
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color: #eccc68'></i>"
            }
            datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText = `Please enter the City name Properly`
            datahide.classList.add('data_hide');
        }
    }

}
submitBtn.addEventListener('click', getInfo);

const getCurrentDay = ()=>{
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    days = weekday[currentTime.getDay()]
    let day = document.getElementById('day')
    day.innerText = days;
};

getCurrentDay();