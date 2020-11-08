import React from "react";
import { Link } from 'react-router-dom';
import { Table } from "react-bootstrap";


const Search = ({result}) => {
  if (!result) return null;

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 12 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>
              <Link to={`/user/${index}`}>User {index}</Link>
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};

export default Search;
