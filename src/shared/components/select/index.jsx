import React, { useState } from "react";
import "react-select/dist/react-select.css";
import "react-virtualized/styles.css";
import "react-virtualized-select/styles.css";
import "./styles.css";

// Then import the virtualized Select HOC
import VirtualizedSelect from "react-virtualized-select";

const Select = (props) => {
  return <VirtualizedSelect {...props} id="virtualizedSelect" />;
};

export default Select;
