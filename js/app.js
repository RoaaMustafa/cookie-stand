'use strict';
//------------LAB07(CONSTRUCTOR)---------------------


// constructing a function
let arrayOfLocattions = [];
let workHrs= ['6am','7am','8am','9am','10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'],

  Locations =function(locationName,minCust,maxCust,avgCookies){
    this.locationName = locationName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    //arrays
    this.cookiesPerHr = [];
    this.randomCustomer = [];
    this.totalCookiesPerHr = 0;
    arrayOfLocattions.push(this);

    this.getRandome=function (min, max){
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
  };

// create the objects
arrayOfLocattions.push(new Locations('Seattle',23,65,6.3));
arrayOfLocattions.push(new Locations('Tokyo',3,24,1.2));
arrayOfLocattions.push(new Locations('Dubai',11,38,3.7));
arrayOfLocattions.push(new Locations('Paris',20,38,2.3));
arrayOfLocattions.push(new Locations('Lima',2,16,4.6));


  function = headerTable (){
    let thHeader= null;
    for (let i=0; i<=14; i++){
      thHeader = document.createElement('th');
      table.appendChild(thHeader);
      thHeader.textContent=`${workHrs[i]}`;
      while(i===14){
        thHeader = textContent='Daily location Total';
        break;
      }
    }
  
  };















this.randomNumOfCustomer= function(){

};
this.footerRow=function(){
  let trRowfooter =document.createElement('tr');
  table.appendChild(trRowfooter);
  return trRowfooter.textContent=`${Locations.totalCookiesPerHr}`;
};




// Methods

Locations.prototype.render = function(){
 
  let table = document.createElement('table');
  container.appendChild(table);
  let trRow =null;
  let tdNumbers =null;
  for (let i = 0; i < 14; i++) {
    // console.log(headerRow());
  }   
  for  (let i=0 ;i<14 ; i++){
    trRow =document.createElement('tr');
    tdNumbers=document.createElement(trRow);
    trRow.appendChild(tdNumbers);
    tdNumbers.textContent= `${globalThis.cookiesPerHr[i]}`;
    // console.log(this.cookiesPerHr);
  }
}
    
Locations.prototype.randomNumOfCustomer=function(){
  for(let i = 0 ;i<workHrs.length; i++){
    this.randomCustomer.push(getRandome(this.minCust,this.maxCust));
  }

  Location.prototype.calcCookiesPerHr= function() {
    let x = 0;
    let footerTotal =0;
    for(let i = 0 ; i < workHrs.length; i++){
      x = Math.ceil(this.randomCustomer[i] * this.avgCookies);
      this.totalCookiesPerHr += x;
      footerTotal=this.cookiesPerHr[i].push(x);
    }
  }

  for(let i = 0 ; i< arrayOfLocattions.length; i++){
    arrayOfLocattions[i].render();
    arrayOfLocattions[i].randomNumOfCustomer();
    arrayOfLocattions[i].calcCookiesPerHr();
  }




































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
}
// lima.cookiesEachHour();
// lima.createList();
