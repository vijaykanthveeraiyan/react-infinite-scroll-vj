import React from 'react';
import ReactDOM from 'react-dom';

export default class Loader extends React.Component{

  render(){
    return (<div className='overlay'>
    <div className='loading'></div>
    </div>)  
  }
}