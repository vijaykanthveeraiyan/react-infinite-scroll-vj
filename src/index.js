import React, { Component } from 'react';
import { render } from 'react-dom';
import List from './component/List';
import configJSON from './configData/data';
import './style.css';

class App extends Component {
  render() {
    return (
  <List data={configJSON.data}  // data
        titles={configJSON.headerInfo} // Header Titles
        title={configJSON.title} // Table Title
        itemClick={configJSON.cellClick} // on cell click
        headerItemClick={configJSON.headerCellSortClick} // on header cell click
        loaderTxt={configJSON.loaderTxt} // loaderTxt
        initialLoadLimit={configJSON.initialLoadLimit} // first load count
        appendDataLimit={configJSON.appendDataLimit} // append load count
        /> 
    );
  }
}

render(<App />, document.getElementById('root'));
