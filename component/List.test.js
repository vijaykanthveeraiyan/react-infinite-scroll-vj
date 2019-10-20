import React from 'react';
import ReactDOM from 'react-dom';
import List from '../List';
import configJSON from '../../configData/data';

it("render List without crash",()=>{
    const div = document.createElement('div');
    ReactDOM.render(  <List data={configJSON.data}  // data
        titles={configJSON.headerInfo} // Header Titles
        title={configJSON.title} // Table Title
        itemClick={configJSON.cellClick} // on cell click
        headerItemClick={configJSON.headerCellSortClick} // on header cell click
        initialLoadLimit={configJSON.initialLoadLimit} // first load count
        appendDataLimit={configJSON.appendDataLimit} // append load count
        />,div);
})


it('render title correctly',()=>{

})

it('renders as per initial load limit',()=>{
    
})