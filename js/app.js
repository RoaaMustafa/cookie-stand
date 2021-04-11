'use strict';
//  ---------Seattle---------
const seattle ={
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  workHrs: ['6am','7am','8am','9am','10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'],
  cookiesPerHr:[],
  custPerHrs:[],
  totalCookiesPerHr:0,
  cookiesEachHour: function () {
    for (let n = 0; n < 14; n++) {
      this.cookiesPerHr.push(Math.floor(this.custPerHrs[n] * this.avgCookies));
      this.totalCookiesPerHr+= this.cookiesPerHr[n];
    }
  },
  randNumber: function () {
    for (let i = 0; i < 14 ; i++) {
      this.custPerHrs.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1 ) + this.minCust ));
    }
  },
  createList: function () {
    let container =document.getElementById('cookiesSales');
    let p = document.createElement('p');
    container.appendChild(p);
    p.textContent = 'Seattle';
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

console.log(seattle.cookiesEachHour());
console.log(seattle.createList());
console.log(seattle.randNumber());
console.log(seattle.cookiesPerHr);
console.log(seattle.custPerHrs);
console.log(seattle.totalCookiesPerHr);



seattle.cookiesEachHour();
seattle.createList();
seattle.randNumber();
