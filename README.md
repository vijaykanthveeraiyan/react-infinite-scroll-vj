# react-infinite-scroll-vj

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-infinite-scroll-vj)

Infinite Sroll Input Data

It is a table developed using React framework which will display rows and columns based on the data given.
The first row and table header are sticky.Index of the row is auto populated.
It can load n number of rows without any performance lag.
When the table reaches the scroll threshold,it will append the new data set if available with loading symbol till it renders the DOM.

Below is the sample mandatory input format infinite scroll
SAMPLE:

let configJSON = {
   cellClick:(item)=>{console.log('Clicked',item)},   // callback Handler for Cell
   headerCellSortClick:(item)=>{console.log(item)},   // callback Handler for Header Cell
   cssStyle:{'th':"",'td':"",'td-firstChild':''},     // Customize CSS for table
   title:"Customer Data",                             // title for table
   initialLoadLimit:50,                               // Initial Data render limit
   appendDataLimit:100,                               // Update data limit
   headerInfo:[{displayName:'ID',keyName:'NA',showNumber:true}],       // Table Header Data
   data:[{{name:"red",address:"#f00",'e-mail':"qwasdeqwe",
  phone:"123123123",location:'india','payment method':'Master',
  curreny:'$',Locale:'123123','net payment':'amex'}}]                // Column
