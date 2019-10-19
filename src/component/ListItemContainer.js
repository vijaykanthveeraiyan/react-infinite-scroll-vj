import React from "react";
import ReactDOM from "react-dom";
import ListItem from './ListItem';

function ListItemContainer(props) {
  return (
   props.listData.map((listItem, idx) => (
     <tr data-idx={props.idx} key={props.idx}>
      <th className="sticky-col">{idx + 1}</th>
       <ListItem data={listItem} itemClick={props.itemClick}></ListItem>
    </tr>
    ))
  )
}

export default ListItemContainer;