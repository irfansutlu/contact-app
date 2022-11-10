import React from "react";

function Table() {
  return (
    <div>
      <h1>Contatcs</h1>
      <table>
        <tr>
          <th>Username</th>
          <th>Phone Number</th>
          <th>Gender</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
        <tr>
          <td>Breed</td>
          <td>Jack Russell</td>
          <td>Poodle</td>
          <td>Streetdog</td>
          <td>Cocker Spaniel</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
