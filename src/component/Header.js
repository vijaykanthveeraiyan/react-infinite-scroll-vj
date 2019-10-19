import React from 'react';
import ReactDOM from 'react-dom';

function Header(props){
  return(
  props.header.map((item,idx)=>(
      <th scope="col" key={idx} onClick={props.headerItemClick.bind(this,item.displayName)}>{item.displayName}</th>
    ))
  )
}

export default Header;