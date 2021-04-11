'use strict';
//  ---------Seattle---------
const seattle ={
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  workHrs: ['06 am','07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
  custPerHr: [],
  cookiesPerHr:[],
  totalCookiesPerHr:0,
  // push to store number of cookies in each hour
  cookiesEachHour: function(){
    for (let i = 0; i < this.cookiesPerHr.length; i++) {
      this.cookiesPerHr.push(Math.ceil(getRandom(23,65)* this.cookiesPerHr[i]));
    }
  },
  totalCookies:function(){
    for (let i = 0; i < this.cookiesPerHr.length; i++) {
      this.totalCookiesPerHr += this.totalCookiesPerHr[i];
    }
  },
  createList: function () {
    let container =document.getElementById('cookiesSales');
    let article = document.createElement('article');
    container.appendChild(article);
    let div = document.createElement('div');
    article.appendChild(div);
    let p = document.createElement('p');
    div.appendChild(p);
    p.textContent = 'Seatle';
    let unorderedList = document.createElement('ul');
    article.appendChild(unorderedList);
    let li = null;
    for (let i=0; i< this.custPerHr.length; i++) {
      li = document.createElement('li');
      unorderedList.appendChild(li);
      li.textContent= `${this.workHr[i]}: ${this.cookiesPerHr[i]}cookies`;
    }
    let li1 = document.createElement('li');
    unorderedList.appendChild(li1);
    li1.textContent= `Total: ${this.totalCookiesPerHr} Cookies`;
  }
};
function getRandom (min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

seattle.cookiesEachHour();
seattle.totalCookies();
seattle.createList();
