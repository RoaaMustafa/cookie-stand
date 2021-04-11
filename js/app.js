'use strict';
//  ---------Seattle---------
const Seattle {
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    workHrs: ['06 am','07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
    custPerHr: [],
    cookiesPerHr:[],
    totalCookiesPerHr:0,
// get random number for custumers per hour
getRandom: function (){
    for (let i=0; i<this.workHrs; i++ ){
   this.custPerHr= (math.floor(Math.random()* (this.maxCust - this.minCust + 1) + this.minCust)); 
    }
},
// push to store number of cookies in each hour
cookiesEachHour: function(){
    for (let i = 0; i < this.cookiesPerHr.length; i++) {
       cookiesPerHr.push(math.ceil(avgCookies* cookiesPerHr[i]));
       this.totalCookiesPerHr += this.totalCookiesPerHr[i];
    }  
},

 createList: function () {
   let article =  Document.createElement('article');
   container.appendChild(article);
   let div = document.createElement('div');
article.appendChild(div);
let p = document.createElement('p');
div.appendChild(p);
p.textContent = 'Seatle';
let unorderedList = document.createElement('ul');
div.appendChild(unorderedList);
let li = null;
for (let i=0; i<this.workHrs; i++ ) {
li = document.createElement('li');
unorderedList.appendChild(li);
li.textContent= `${this.workHr[i]}: ${this.cookiesPerHr}cookies`;  
}
if (i>16){
let li =document.createElement('li');
unorderedList.appendChild(li);
li.textContent= `Total: ${this.totalCookiesPerHr} Cookies`;
}
 } 
};
Seattle.getRandom();
Seattle.cookiesEachHour();
Seattle.createList();
