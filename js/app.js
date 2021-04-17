'use strict';
//------------LAB07(CONSTRUCTOR)---------------------

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let workHrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let locationsArray = [];
let container = document.getElementById('cookiesSales');
let tableEl = document.createElement('table');
container.appendChild(tableEl);
// constructing a function
function Locations(locationName, minCust, maxCust, avgCookies) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust =maxCust;
  this.avgCookies = avgCookies;
  this.cookiesPerHr = [];
  this.total = 0;
  // console.log(this);
  locationsArray.push(this);

}
//creat the object to pused them inside Locations Array
let seattle=new Locations('Seatle', 23, 65, 6.3);
let tokyo=new Locations('Tokyo', 3, 24, 1.2);
let dubai= new Locations('Dubai',11, 38, 3.7);
let paris= new Locations('Paris', 20, 38, 2.3);
let lima = new Locations('Lima', 2, 16, 4.60);

// creating methods
Locations.prototype.getCookies = function () {
  for (let i = 0; i < workHrs.length; i++) {
    let x = Math.floor((getRandom(this.minCust, this.maxCust) * this.avgCookies));
    this.cookiesPerHr.push(x);
    this.total += this.cookiesPerHr[i];
  }
};
seattle.getCookies();
tokyo.getCookies();
dubai.getCookies();
paris.getCookies();
lima.getCookies();

//Row-header
function renderHeader() {
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  let thElEmpty = document.createElement('th');
  // to make first header in row empty
  thElEmpty.textContent = ' ';
  trEl.appendChild(thElEmpty);
  for (let i = 0; i < workHrs.length; i++) {
    let thEl = document.createElement('th');
    thEl.textContent = workHrs[i];
    trEl.appendChild(thEl);
  }
  let thElTotal = document.createElement('th');
  thElTotal.textContent = 'Daily Location Total';
  trEl.appendChild(thElTotal);

}
renderHeader();
Locations.prototype.render = function () {
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  let tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent = this.locationName;
  for (let i = 0; i < workHrs.length; i++) {
    tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.cookiesPerHr[i];
  }
  let tdTotal = document.createElement('td');
  trEl.appendChild(tdTotal);
  tdTotal.textContent = this.total;
};
Locations.prototype.deleteRow = function(){
  tableEl.deleteRow(tableEl.rows.length-1);
};

//get the form
const form = document.getElementById('cookieForm');
console.log(form);
//  attach the form to a addeventlistener
form.addEventListener('submit',submittnewRow);
function submittnewRow(event){
  event.preventDefault();//will prevent refreshing
  // console.log(submittnewRow);
  console.log(event);
  let newLocationName =event.target.nameField.value;
  newLocationName.split(',');
  let miniMum = event.target.minField.value;
  miniMum=parseInt(miniMum);
  let maxiMum =event.target.maxField.value;
  miniMum=parseInt(maxiMum);
  let avg =event.target.avgField.value;
  avg =parseFloat(avg);
  console.log(newLocationName,miniMum,maxiMum,avg);
  let local =new Locations(newLocationName,miniMum,maxiMum,avg);
  local.getCookies();
  local.deleteRow();
  local.render();
  renderFooter();

}

//Footer
function renderFooter() {
  let trEl =document.createElement('tr');
  tableEl.appendChild(trEl);
  let tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent = 'Total';
  let hourTotal;
  let totalForAllLocations = 0;
  //to calc total in each  alone hour
  for (let h = 0; h < workHrs.length; h++) {
    hourTotal = 0;
    for (let p = 0; p < locationsArray.length; p++) {
      hourTotal += locationsArray[p].cookiesPerHr[h];
    }
    //storing the calulations in the array
    let tdElTotalHour = document.createElement('td');
    tdElTotalHour.textContent = hourTotal;
    totalForAllLocations += hourTotal;
    trEl.appendChild(tdElTotalHour);
  }
  let tdTotalLocations = document.createElement('td');
  tdTotalLocations.textContent = totalForAllLocations;
  trEl.appendChild(tdTotalLocations);
}

for (let i = 0; i < locationsArray.length; i++) {
  locationsArray[i].getCookies();
  locationsArray[i].render();
}
renderFooter();





//------------LAB06(OBJECTS)---------------------
// function getRandome(min, max){
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// //  ---------Seattle---------
// const seattle ={
//   locationName:'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookies: 6.3,
//   workHrs: ['6am','7am','8am','9am','10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'],
//   cookiesPerHr:[],
//   totalCookiesPerHr:0,
//   cookiesEachHour: function () {
//     for (let n = 0; n < this.workHrs.length; n++) {
//       this.cookiesPerHr.push(Math.ceil(getRandome(this.minCust,this.maxCust) * this.avgCookies));
//       this.totalCookiesPerHr +=this.cookiesPerHr[n];
//     }
//   },
//   createList: function () {
//     let container =document.getElementById('cookiesSales');
//     let p = document.createElement('p');
//     container.appendChild(p);
//     p.textContent = this.locationName;
//     let unorderedList = document.createElement('ul');
//     container.appendChild(unorderedList);
//     for (let j = 0; j < this.workHrs.length; j++) {
//       let li = document.createElement('li');
//       unorderedList.appendChild(li);
//       li.textContent = `${this.workHrs[j]}: ${this.cookiesPerHr[j]} Cookies`;
//     }
//     let li1 = document.createElement('li');
//     unorderedList.appendChild(li1);
//     li1.textContent= `Total: ${this.totalCookiesPerHr} Cookies`;
//     let breakline = document.createElement('hr');
//     container.appendChild(breakline);
//   }
// };
// seattle.cookiesEachHour();
// seattle.createList();


// // console.log(seattle.cookiesEachHour());
// // console.log(seattle.cookiesPerHr);
// // console.log(seattle.totalCookiesPerHr);

// //  ---------Tokyo---------
// const tokyo ={
//   locationName:'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 1.2,
//   workHrs: ['6am','7am','8am','9am','10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'],
//   cookiesPerHr:[],
//   totalCookiesPerHr:0,
//   cookiesEachHour: function () {
//     for (let n = 0; n < this.workHrs.length; n++) {
//       this.cookiesPerHr.push(Math.ceil(getRandome(this.minCust,this.maxCust) * this.avgCookies));
//       this.totalCookiesPerHr +=this.cookiesPerHr[n];
//     }
//   },
//   createList: function () {
//     let container =document.getElementById('cookiesSales');
//     let p = document.createElement('p');
//     container.appendChild(p);
//     p.textContent = this.locationName;
//     let unorderedList = document.createElement('ul');
//     container.appendChild(unorderedList);
//     for (let j = 0; j < this.workHrs.length; j++) {
//       let li = document.createElement('li');
//       unorderedList.appendChild(li);
//       li.textContent = `${this.workHrs[j]}: ${this.cookiesPerHr[j]} Cookies`;
//     }
//     let li1 = document.createElement('li');
//     unorderedList.appendChild(li1);
//     li1.textContent= `Total: ${this.totalCookiesPerHr} Cookies`;
//     let breakline = document.createElement('hr');
//     container.appendChild(breakline);
//   }
// };
// tokyo.cookiesEachHour();
// tokyo.createList();

// // console.log(tokyo.cookiesEachHour());
// // console.log(tokyo.cookiesPerHr);
// // console.log(tokyo.totalCookiesPerHr);


// //  ---------Dubai---------
// const Dubai ={
//   locationName:'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookies: 3.7,
//   workHrs: ['6am','7am','8am','9am','10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'],
//   cookiesPerHr:[],
//   totalCookiesPerHr:0,
//   cookiesEachHour: function () {
//     for (let n = 0; n < this.workHrs.length; n++) {
//       this.cookiesPerHr.push(Math.ceil(getRandome(this.minCust,this.maxCust) * this.avgCookies));
//       this.totalCookiesPerHr +=this.cookiesPerHr[n];
//     }
//   },
//   createList: function () {
//     let container =document.getElementById('cookiesSales');
//     let p = document.createElement('p');
//     container.appendChild(p);
//     p.textContent = this.locationName;
//     let unorderedList = document.createElement('ul');
//     container.appendChild(unorderedList);
//     for (let j = 0; j < this.workHrs.length; j++) {
//       let li = document.createElement('li');
//       unorderedList.appendChild(li);
//       li.textContent = `${this.workHrs[j]}: ${this.cookiesPerHr[j]} Cookies`;
//     }
//     let li1 = document.createElement('li');
//     unorderedList.appendChild(li1);
//     li1.textContent= `Total: ${this.totalCookiesPerHr} Cookies`;
//     let breakline = document.createElement('hr');
//     container.appendChild(breakline);
//   }
// };
// Dubai.cookiesEachHour();
// Dubai.createList();
// // console.log(Dubai.cookiesEachHour());
// // console.log(Dubai.cookiesPerHr);
// // console.log(Dubai.totalCookiesPerHr);



// //  ---------Paris---------
// const Paris ={
//   locationName:'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookies: 2.3,
//   workHrs: ['6am','7am','8am','9am','10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'],
//   cookiesPerHr:[],
//   totalCookiesPerHr:0,
//   cookiesEachHour: function () {
//     for (let n = 0; n < this.workHrs.length; n++) {
//       this.cookiesPerHr.push(Math.ceil(getRandome(this.minCust,this.maxCust) * this.avgCookies));
//       this.totalCookiesPerHr +=this.cookiesPerHr[n];



//     }
//   },
//   createList: function () {
//     let container =document.getElementById('cookiesSales');
//     let p = document.createElement('p');
//     container.appendChild(p);
//     p.textContent = this.locationName;
//     let unorderedList = document.createElement('ul');
//     container.appendChild(unorderedList);
//     for (let j = 0; j < this.workHrs.length; j++) {
//       let li = document.createElement('li');
//       unorderedList.appendChild(li);
//       li.textContent = `${this.workHrs[j]}: ${this.cookiesPerHr[j]} Cookies`;
//     }
//     let li1 = document.createElement('li');
//     unorderedList.appendChild(li1);
//     li1.textContent= `Total: ${this.totalCookiesPerHr} Cookies`;
//     let breakline = document.createElement('hr');
//     container.appendChild(breakline);
//   }
// };
// Paris.cookiesEachHour();
// Paris.createList();
// // console.log(Paris.cookiesEachHour());
// // console.log(Paris.cookiesPerHr);
// // console.log(Paris.totalCookiesPerHr);


// //  ---------Lima---------
// const lima ={
//   locationName:'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookies: 4.6,
//   workHrs: ['6am','7am','8am','9am','10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'],
//   cookiesPerHr:[],
//   totalCookiesPerHr:0,
//   cookiesEachHour: function () {
//     for (let n = 0; n < this.workHrs.length; n++) {
//       this.cookiesPerHr.push(Math.ceil(getRandome(this.minCust,this.maxCust) * this.avgCookies));
//       this.totalCookiesPerHr +=this.cookiesPerHr[n];
//     }
//   },
//   createList: function () {
//     let container =document.getElementById('cookiesSales');
//     let p = document.createElement('p');
//     container.appendChild(p);
//     p.textContent = this.locationName;
//     let unorderedList = document.createElement('ul');
//     container.appendChild(unorderedList);
//     for (let j = 0; j < this.workHrs.length; j++) {
//       let li = document.createElement('li');
//       unorderedList.appendChild(li);
//       li.textContent = `${this.workHrs[j]}: ${this.cookiesPerHr[j]} Cookies`;
//     }
//     let li1 = document.createElement('li');
//     unorderedList.appendChild(li1);
//     li1.textContent= `Total: ${this.totalCookiesPerHr} Cookies`;
//     let breakline = document.createElement('hr');
//     container.appendChild(breakline);
//   }
// };
// }
// lima.cookiesEachHour();
// lima.createList();
