console.log("connected");
var secondsHand = document.querySelector('.sec-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');

var child_1_hour = document.querySelector('.child-1-hour');
var child_1_min = document.querySelector('.child-1-min');
var child_1_sec = document.querySelector('.child-1-sec');
var child_1_head = document.getElementById('child-1-head');

var child_2_hour = document.querySelector('.child-2-hour');
var child_2_min = document.querySelector('.child-2-min');
var child_2_sec = document.querySelector('.child-2-sec');
var child_2_head = document.getElementById('child-2-head');

var child_3_hour = document.querySelector('.child-3-hour');
var child_3_min = document.querySelector('.child-3-min');
var child_3_sec = document.querySelector('.child-3-sec');
var child_3_head = document.getElementById('child-3-head');
// Display Today's Date : 
var date = document.getElementById("timeHeading");
const options = { weekday :"long", month: "long", day: "numeric"};
const today = new Date();
date.innerHTML = today.toLocaleDateString("en-US", options);
var arr = [
    { 
        id: 1,
        name: 'Denmark',
        GMT: '+2',
    },
    {
        id: 2,
        name: 'New Zealand',
        GMT: '+12',
    },
    {
        id: 3,
        name: 'Canada',
        GMT: '-4',
    },
    {
        id: 4,
        name: 'Bangladesh',
        GMT: '+6',
    },
    {
        id: 5,
        name: 'Australia',
        GMT: '+10',
    },
    {
        id: 6,
        name: 'Singapore',
        GMT: '+8',
    },
];

var arr_1 = [
    {
        id: 7,
        name: 'UK',
        GMT: '+1',
    },
    {
        id: 8,
        name: 'US',
        GMT: '-4',
    },
    {
        id: 9,
        name: 'Russia',
        GMT: '+3',
    },
    {
        id: 10,
        name: 'Cape Verde',
        GMT: '-1',
    },
    {
        id: 11,
        name: 'Egypt',
        GMT: '+2',
    },{
        id: 12,
        name: 'South Korea',
        GMT: '+9',
    }
];

var arr_2 = [
    {
        id: 13,
        name: 'Germany',
        GMT: '+2',
    },
    {
        id: 14,
        name: 'Malaysia',
        GMT: '+8',
    },
    {
        id: 15,
        name: 'Panama',
        GMT: '-5',
    },
    {
        id: 16,
        name: 'UAE',
        GMT: '+4',
    },
    {
        id: 17,
        name: 'Turkey',
        GMT: '+3',
    },
    {
        id: 18,
        name: 'Palau',
        GMT: '+9',
    },
]
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min)) + min; //minimum included maximum excluded..
}

function setTime(){

    // Child-1
    var random_country_1 = find_element(random_child_1,arr);
    var time = (calcTime(random_country_1.name, random_country_1.GMT));
    child_1_head.textContent = random_country_1.name;

    var seconds = time.getSeconds();
    const secondDegrees = (((seconds/60)*360)+90);
    child_1_sec.style.transform = `rotate(${secondDegrees}deg)`;

    var minutes = time.getMinutes();
    const minuteDegrees = (((minutes/60)*360)+90);
    child_1_min.style.transform = `rotate(${minuteDegrees}deg)`;

    var hours = time.getHours();
    const hourDegrees = (((hours/12)*360)+90);
    child_1_hour.style.transform = `rotate(${hourDegrees}deg)`;

    // Child-2
    var random_country_2 = find_element(random_child_2,arr_1);
    var time_2 = (calcTime(random_country_2.name, random_country_2.GMT));
    child_2_head.textContent = random_country_2.name;

    var child_2_seconds = time_2.getSeconds();
    const child2secondDegrees = (((child_2_seconds/60)*360)+90);
    child_2_sec.style.transform = `rotate(${child2secondDegrees}deg)`;

    var child_2_minutes = time_2.getMinutes();
    const child2minuteDegrees = (((child_2_minutes/60)*360)+90);
    child_2_min.style.transform = `rotate(${child2minuteDegrees}deg)`;

    var child_2_hours = time_2.getHours();
    const child2hourDegrees = (((child_2_hours/12)*360)+90);
    child_2_hour.style.transform = `rotate(${child2hourDegrees}deg)`;
    
    // Child 3 :
    var random_country_3 = find_element(random_child_3,arr_2);
    var time_3 = (calcTime(random_country_3.name, random_country_3.GMT));
    child_3_head.textContent = random_country_3.name;

    var child_3_seconds = time_3.getSeconds();
    const child3secondDegrees = (((child_3_seconds/60)*360)+90);
    child_3_sec.style.transform = `rotate(${child3secondDegrees}deg)`;

    var child_3_minutes = time_3.getMinutes();
    const child3minuteDegrees = (((child_3_minutes/60)*360)+90);
    child_3_min.style.transform = `rotate(${child3minuteDegrees}deg)`;

    var child_3_hours = time_3.getHours();
    const child3hourDegrees = (((child_3_hours/12)*360)+90);
    child_3_hour.style.transform = `rotate(${child3hourDegrees}deg)`;


    // For Pakistan Time : 
    var Paktime = (calcTime('Pakistan', '+5'));
    var seconds = Paktime.getSeconds();
    const PaksecondDegrees = (((seconds/60)*360)+90);
    secondsHand.style.transform = `rotate(${PaksecondDegrees}deg)`;

    var minutes = Paktime.getMinutes();
    const PakminuteDegrees = (((minutes/60)*360)+90);
    minuteHand.style.transform = `rotate(${PakminuteDegrees}deg)`;

    var hours = Paktime.getHours();
    const PakhourDegrees = (((hours/12)*360)+90);
    hourHand.style.transform = `rotate(${PakhourDegrees}deg)`;

}

    setInterval(setTime, 1000);

function find_element(random, array){

    var found_element = array.find(
        (countries) => countries.id === random
        );
        // console.log(found_element);

        return found_element;
} 
var random_child_1 = getRandomInt(1,7);
var random_child_2 = getRandomInt(7,13);
var random_child_3 = getRandomInt(13,19);
// function to calculate local time
// in a different city
// given the city's UTC offset
function calcTime(city, offset) {

    // create Date object for current location
    d = new Date();

    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000*offset));

    // return time as a string
    return nd;

}

// get Bombay time
// console.log((calcTime('Germany', '+2')))

// get Singapore time
// console.log((calcTime('Singapore', '+8')))

// get London time
// console.log((calcTime('London', '+1')))
