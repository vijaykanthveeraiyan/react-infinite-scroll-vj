import React from "react";
import ReactDOM from "react-dom";

function ListItems(props) {
  let tdItems = [];
  tdItems = Object.keys(props.data).map((key, idx) => (
    <td onClick={props.itemClick.bind(this, props.data[key])}>
      {props.data[key] ? props.data[key] : "___"}
    </td>
  ));

  return (
    <tr data-idx={props.idx} key={props.idx}>
      <th className="sticky-col">{props.idx + 1}</th>
      {tdItems}
    </tr>
  );
}

export default ListItems;
