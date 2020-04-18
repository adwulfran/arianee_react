import React from "react";
import {
  useParams
} from "react-router-dom";

export default class InterfaceComponent extends React.Component {
 render() {
 return ( <div> <Interface/></div>)
 }
}

function Interface() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}