'use strict';
//  ---------Seattle---------
const seattle ={
  locationName:'Seatle',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  workHrs: ['6am','7am','8am','9am','10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'],
  cookiesPerHr:[],
  totalCookiesPerHr:0,
  cookiesEachHour: function () {
    for (let n = 0; n < 14; n++) {
      this.cookiesPerHr.push(Math.ceil(getRandome(this.minCust,this.maxCust) * this.avgCookies));
      this.totalCookiesPerHr +=this.cookiesPerHr[n];
    }
  },
  createList: function () {
    let container =document.getElementById('cookiesSales');
    let p = document.createElement('p');
    container.appendChild(p);
    p.textContent = this.locationName;
    let unorderedList = document.createElement('ul');
    container.appendChild(unorderedList);
    for (let j = 0; j < 14; j++) {
      let li = document.createElement('li');
      unorderedList.appendChild(li);
      li.textContent = `${this.workHrs[j]}: ${this.cookiesPerHr[j]} Cookies`;
    }
    let li1 = document.createElement('li');
    unorderedList.appendChild(li1);
    li1.textContent= `Total: ${this.totalCookiesPerHr} Cookies`;
    let breakline = document.createElement('hr');
    container.appendChild(breakline);
  }
};
seattle.cookiesEachHour();
seattle.createList();

function getRandome(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(seattle.cookiesEachHour());
console.log(seattle.cookiesPerHr);
console.log(seattle.totalCookiesPerHr);

//  ---------Tokyo---------
const tokyo ={
  locationName:'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  workHrs: ['6am','7am','8am','9am','10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'],
  cookiesPerHr:[],
  totalCookiesPerHr:0,
  cookiesEachHour: function () {
    for (let n = 0; n < 14; n++) {
      this.cookiesPerHr.push(Math.ceil(getRandome(this.minCust,this.maxCust) * this.avgCookies));
      this.totalCookiesPerHr +=this.cookiesPerHr[n];
    }
  },
  createList: function () {
    let container =document.getElementById('cookiesSales');
    let p = document.createElement('p');
    container.appendChild(p);
    p.textContent = this.locationName;
    let unorderedList = document.createElement('ul');
    container.appendChild(unorderedList);
    for (let j = 0; j < 14; j++) {
      let li = document.createElement('li');
      unorderedList.appendChild(li);
      li.textContent = `${this.workHrs[j]}: ${this.cookiesPerHr[j]} Cookies`;
    }
    let li1 = document.createElement('li');
    unorderedList.appendChild(li1);
    li1.textContent= `Total: ${this.totalCookiesPerHr} Cookies`;
    let breakline = document.createElement('hr');
    container.appendChild(breakline);
  }
};
tokyo.cookiesEachHour();
tokyo.createList();

console.log(tokyo.cookiesEachHour());
console.log(tokyo.cookiesPerHr);
console.log(tokyo.totalCookiesPerHr);


//  ---------Dubai---------
const Dubai ={
  locationName:'Dobai',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  workHrs: ['6am','7am','8am','9am','10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'],
  cookiesPerHr:[],
  totalCookiesPerHr:0,
  cookiesEachHour: function () {
    for (let n = 0; n < 14; n++) {
      this.cookiesPerHr.push(Math.ceil(getRandome(this.minCust,this.maxCust) * this.avgCookies));
      this.totalCookiesPerHr +=this.cookiesPerHr[n];
    }
  },
  createList: function () {
    let container =document.getElementById('cookiesSales');
    let p = document.createElement('p');
    container.appendChild(p);
    p.textContent = this.locationName;
    let unorderedList = document.createElement('ul');
    container.appendChild(unorderedList);
    for (let j = 0; j < 14; j++) {
      let li = document.createElement('li');
      unorderedList.appendChild(li);
      li.textContent = `${this.workHrs[j]}: ${this.cookiesPerHr[j]} Cookies`;
    }
    let li1 = document.createElement('li');
    unorderedList.appendChild(li1);
    li1.textContent= `Total: ${this.totalCookiesPerHr} Cookies`;
    let breakline = document.createElement('hr');
    container.appendChild(breakline);
  }
};
Dubai.cookiesEachHour();
Dubai.createList();
console.log(Dubai.cookiesEachHour());
console.log(Dubai.cookiesPerHr);
console.log(Dubai.totalCookiesPerHr);



//  ---------Paris---------
const Paris ={
  locationName:'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  workHrs: ['6am','7am','8am','9am','10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'],
  cookiesPerHr:[],
  totalCookiesPerHr:0,
  cookiesEachHour: function () {
    for (let n = 0; n < 14; n++) {
      this.cookiesPerHr.push(Math.ceil(getRandome(this.minCust,this.maxCust) * this.avgCookies));
      this.totalCookiesPerHr +=this.cookiesPerHr[n];
    }
  },
  createList: function () {
    let container =document.getElementById('cookiesSales');
    let p = document.createElement('p');
    container.appendChild(p);
    p.textContent = this.locationName;
    let unorderedList = document.createElement('ul');
    container.appendChild(unorderedList);
    for (let j = 0; j < 14; j++) {
      let li = document.createElement('li');
      unorderedList.appendChild(li);
      li.textContent = `${this.workHrs[j]}: ${this.cookiesPerHr[j]} Cookies`;
    }
    let li1 = document.createElement('li');
    unorderedList.appendChild(li1);
    li1.textContent= `Total: ${this.totalCookiesPerHr} Cookies`;
    let breakline = document.createElement('hr');
    container.appendChild(breakline);
  }
};
Paris.cookiesEachHour();
Paris.createList();
console.log(Paris.cookiesEachHour());
console.log(Paris.cookiesPerHr);
console.log(Paris.totalCookiesPerHr);




