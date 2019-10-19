# react-infinite-scroll-vj

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-infinite-scroll-vj)

Infinite Sroll Input Data

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
