import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Table } from "react-bootstrap";


const Search = ({result}) => {

  return (
    <Table responsive>
      <thead>
        <tr>
          <td>Nombre</td>
          <td>Posición</td>
          <td>Ubicación</td>
          <td>Habilidades</td>
          <td>Abierto a</td>
        </tr>
      </thead>
      <tbody>
          {result.map(item => {
            return (
              <tr>
                <td>
                  <Link to={`/user/${item.username}`}>{item.name}</Link>
                </td>
                <td>{item.professionalHeadline}</td>
                <td>{item.locationName}</td>
                <td>
                  <ul>
                    {item.skills.map(skill => (
                      <li>{skill.name}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {item.openTo.map(name => (
                      <li>{name}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            )
          })}
      </tbody>
    </Table>
  );
};

export default Search;
