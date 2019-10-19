import React from "react";
import ReactDOM from "react-dom";

function ListItem(props) {
  return (
    Object.keys(props.data).map((key, idx) => (
        <td onClick={props.itemClick.bind(this, props.data[key])}>
          {props.data[key] ? props.data[key] : "___"}
        </td>
      ))
  )
}

export default ListItem;