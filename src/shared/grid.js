import React from "react";

import styled from "styled-components";

const Label = styled.td`
  font-weight: 600;
  padding-right: 20px;
  padding-left: 0;
  text-align: right;
  vertical-align: top;
  font-size: 0.9em;
`;

const Grid = ({ rows = [], columns = [] }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(col => <Label>label: {col}</Label>)}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr>
            {row.map((cell, index) => index === 0
              ? <Label>{cell}</Label>
              : <td>{cell}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const StyledGrid = styled(Grid)`
td {
  background-color: yellow;
}
`;

export default StyledGrid;
