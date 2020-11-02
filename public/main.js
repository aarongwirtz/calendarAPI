let calendarData ;

fetch("https://calendarific.com/api/v2/holidays?api_key=365375403a2bfb84a3436a52b769a366730f65d1&country=US&year=2020")
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
        //* CARD ONE
        let titleOne = document.getElementById('titleOne');    
        titleOne.innerText = calendarData.response.holidays[4].name;
        
        let monthOne = document.getElementById('monthOne');    
        monthOne.innerText = calendarData.response.holidays[4].date.datetime.month + ' /';
        
        let dateOne = document.getElementById('dateOne');    
        dateOne.innerText = calendarData.response.holidays[4].date.datetime.day + ' /';
        
        let yearOne = document.getElementById('yearOne');    
        yearOne.innerText = calendarData.response.holidays[4].date.datetime.year;
        
        let dOne = document.getElementById('dOne');    
        dOne.innerText = calendarData.response.holidays[4].description;

        //* CARD TWO
        let titleTwo = document.getElementById('titleTwo');    
        titleTwo.innerText = calendarData.response.holidays[38].name;
        
        let monthTwo = document.getElementById('monthTwo');    
        monthTwo.innerText = calendarData.response.holidays[38].date.datetime.month + ' /';
        
        let dateTwo = document.getElementById('dateTwo');    
        dateTwo.innerText = calendarData.response.holidays[38].date.datetime.day + ' /';
        
        let yearTwo = document.getElementById('yearTwo');    
        yearTwo.innerText = calendarData.response.holidays[38].date.datetime.year;
        
        let dTwo = document.getElementById('dTwo');    
        dTwo.innerText = calendarData.response.holidays[38].description;

        //* CARD THREE
        let titleThree = document.getElementById('titleThree');    
        titleThree.innerText = calendarData.response.holidays[80].name;
        
        let monthThree = document.getElementById('monthThree');    
        monthThree.innerText = calendarData.response.holidays[80].date.datetime.month + ' /';
        
        let dateThree = document.getElementById('dateThree');    
        dateThree.innerText = calendarData.response.holidays[80].date.datetime.day + ' /';
        
        let yearThree = document.getElementById('yearThree');    
        yearThree.innerText = calendarData.response.holidays[80].date.datetime.year;
        
        let dThree = document.getElementById('dThree');    
        dThree.innerText = calendarData.response.holidays[80].description;

        //* CARD FOUR
        let titleFour = document.getElementById('titleFour');    
        titleFour.innerText = calendarData.response.holidays[134].name;
        
        let monthFour = document.getElementById('monthFour');    
        monthFour.innerText = calendarData.response.holidays[134].date.datetime.month + ' /';
        
        let dateFour = document.getElementById('dateFour');    
        dateFour.innerText = calendarData.response.holidays[134].date.datetime.day + ' /';
        
        let yearFour = document.getElementById('yearFour');    
        yearFour.innerText = calendarData.response.holidays[134].date.datetime.year;
        
        let dFour = document.getElementById('dFour');    
        dFour.innerText = calendarData.response.holidays[134].description;

        //* CARD FIVE
        let titleFive = document.getElementById('titleFive');    
        titleFive.innerText = calendarData.response.holidays[193].name;
        
        let monthFive = document.getElementById('monthFive');    
        monthFive.innerText = calendarData.response.holidays[193].date.datetime.month + ' /';
        
        let dateFive = document.getElementById('dateFive');    
        dateFive.innerText = calendarData.response.holidays[193].date.datetime.day + ' /';
        
        let yearFive = document.getElementById('yearFive');    
        yearFive.innerText = calendarData.response.holidays[193].date.datetime.year;
        
        let dFive = document.getElementById('dFive');    
        dFive.innerText = calendarData.response.holidays[193].description;

        //* CARD SIX
        let titleSix = document.getElementById('titleSix');    
        titleSix.innerText = calendarData.response.holidays[285].name;
        
        let monthSix = document.getElementById('monthSix');    
        monthSix.innerText = calendarData.response.holidays[285].date.datetime.month + ' /';
        
        let dateSix = document.getElementById('dateSix');    
        dateSix.innerText = calendarData.response.holidays[285].date.datetime.day + ' /';
        
        let yearSix = document.getElementById('yearSix');    
        yearSix.innerText = calendarData.response.holidays[285].date.datetime.year;
        
        let dSix = document.getElementById('dSix');    
        dSix.innerText = calendarData.response.holidays[285].description;

        //* CARD SEVEN
        let titleSeven = document.getElementById('titleSeven');    
        titleSeven.innerText = calendarData.response.holidays[315].name;
        
        let monthSeven = document.getElementById('monthSeven');    
        monthSeven.innerText = calendarData.response.holidays[315].date.datetime.month + ' /';
        
        let dateSeven = document.getElementById('dateSeven');    
        dateSeven.innerText = calendarData.response.holidays[315].date.datetime.day + ' /';
        
        let yearSeven = document.getElementById('yearSeven');    
        yearSeven.innerText = calendarData.response.holidays[315].date.datetime.year;
        
        let dSeven = document.getElementById('dSeven');    
        dSeven.innerText = calendarData.response.holidays[315].description;

        //* CARD EIGHT
        let titleEight = document.getElementById('titleEight');    
        titleEight.innerText = calendarData.response.holidays[337].name;
        
        let monthEight = document.getElementById('monthEight');    
        monthEight.innerText = calendarData.response.holidays[337].date.datetime.month + ' /';
        
        let dateEight = document.getElementById('dateEight');    
        dateEight.innerText = calendarData.response.holidays[337].date.datetime.day + ' /';
        
        let yearEight = document.getElementById('yearEight');    
        yearEight.innerText = calendarData.response.holidays[337].date.datetime.year;
        
        let dEight = document.getElementById('dEight');    
        dEight.innerText = calendarData.response.holidays[337].description;

        //* CARD NINE
        let titleNine = document.getElementById('titleNine');    
        titleNine.innerText = calendarData.response.holidays[382].name;
        
        let monthNine = document.getElementById('monthNine');    
        monthNine.innerText = calendarData.response.holidays[382].date.datetime.month + ' /';
        
        let dateNine = document.getElementById('dateNine');    
        dateNine.innerText = calendarData.response.holidays[382].date.datetime.day + ' /';
        
        let yearNine = document.getElementById('yearNine');    
        yearNine.innerText = calendarData.response.holidays[382].date.datetime.year;
        
        let dNine = document.getElementById('dNine');    
        dNine.innerText = calendarData.response.holidays[382].description;

        //* CARD TEN
        let titleTen = document.getElementById('titleTen');    
        titleTen.innerText = calendarData.response.holidays[388].name;
        
        let monthTen = document.getElementById('monthTen');    
        monthTen.innerText = calendarData.response.holidays[388].date.datetime.month + ' /';
        
        let dateTen = document.getElementById('dateTen');    
        dateTen.innerText = calendarData.response.holidays[388].date.datetime.day + ' /';
        
        let yearTen = document.getElementById('yearTen');    
        yearTen.innerText = calendarData.response.holidays[388].date.datetime.year;
        
        let dTen = document.getElementById('dTen');    
        dTen.innerText = calendarData.response.holidays[388].description;

        //* CARD ELEVEN
        let titleEleven = document.getElementById('titleEleven');    
        titleEleven.innerText = calendarData.response.holidays[460].name;
        
        let monthEleven = document.getElementById('monthEleven');    
        monthEleven.innerText = calendarData.response.holidays[460].date.datetime.month + ' /';
        
        let dateEleven = document.getElementById('dateEleven');    
        dateEleven.innerText = calendarData.response.holidays[460].date.datetime.day + ' /';
        
        let yearEleven = document.getElementById('yearEleven');    
        yearEleven.innerText = calendarData.response.holidays[460].date.datetime.year;
        
        let dEleven = document.getElementById('dEleven');    
        dEleven.innerText = calendarData.response.holidays[460].description;

        //* CARD TWELVE
        let titleTwelve = document.getElementById('titleTwelve');    
        titleTwelve.innerText = calendarData.response.holidays[507].name;
        
        let monthTwelve = document.getElementById('monthTwelve');    
        monthTwelve.innerText = calendarData.response.holidays[507].date.datetime.month + ' /';
        
        let dateTwelve = document.getElementById('dateTwelve');    
        dateTwelve.innerText = calendarData.response.holidays[507].date.datetime.day + ' /';
        
        let yearTwelve = document.getElementById('yearTwelve');    
        yearTwelve.innerText = calendarData.response.holidays[507].date.datetime.year;
        
        let dTwelve = document.getElementById('dTwelve');    
        dTwelve.innerText = calendarData.response.holidays[507].description;

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