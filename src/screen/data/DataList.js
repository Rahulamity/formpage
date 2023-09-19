import React from "react";

import Formate from "./Formate";

const DataList = ({ title, formate }) => {
  return (
    <div>
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        {title.map((item, index) => (
          <th
            key={index}
            style={{
                paddingTop: "12px",
                paddingBottom: "12px",
                textAlign: "left",
                backgroundColor: "#04AA6D",
                color: "white"
            }}
          >
            {item}
          </th>
        ))}
      </thead>
      <tbody>
        <Formate />
      </tbody>
    </table>
  </div>
  
  );
};

export default DataList;
