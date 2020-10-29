let calendarData ;

fetch("assets/holidays.json")
    .then(response => response.json())
    .then(json => {
        calendarData = json;
        makeInfo(json);
        // makeInfo(json);
        // console.log(calendarData);
        // console.log(calendarData.response.holidays[4].name); //Jan
        // console.log(calendarData.response.holidays[38]); //Feb
        // console.log(calendarData.response.holidays[80]); //Mar
        // console.log(calendarData.response.holidays[134]); //Apr
        // console.log(calendarData.response.holidays[193]); //May
        // console.log(calendarData.response.holidays[285]); //June
        // console.log(calendarData.response.holidays[315]); //July
        // console.log(calendarData.response.holidays[337]); //Aug
        // console.log(calendarData.response.holidays[382]); //Sept
        // console.log(calendarData.response.holidays[388]); //Oct
        // console.log(calendarData.response.holidays[460]); //Nov
        // console.log(calendarData.response.holidays[507]); //Dec
    })
function makeInfo(json){
    json.response.holidays.forEach(element => {
        console.log(element.name, element.description);
    });
        let titleOne = document.getElementById('titleOne');    
        titleOne.innerText = calendarData.response.holidays[4].name;
        let dateOne = document.getElementById('dateOne');    
        dateOne.innerText = calendarData.response.holidays[4].date.datetime.month;
        let dOne = document.getElementById('dOne');    
        dOne.innerText = calendarData.response.holidays[4].description;
        // document.write(calendarData.response.holidays[4].name); //Jan
        // document.write(calendarData.response.holidays[4].date.datetime.month); //Jan
        // document.write(calendarData.response.holidays[4].date.datetime.day); //Jan
        // document.write(calendarData.response.holidays[4].date.datetime.year); //Jan
        // document.write(calendarData.response.holidays[4].description); //Jan
    }
function tryThis(json){
    json.calendarData.response.holidays.forEach(element => {
        console.log(element.calendarData);
    });
}