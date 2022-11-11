import { ref, get, child, remove, set } from "firebase/database";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBack2Line } from "react-icons/ri";
import { database } from "../firebase/firebase";

function Table({
  data,
  setData,
  username,
  phone,
  gender,
}) {
  const getData = () => {
    const dbRef = ref(database);
    get(child(dbRef, `/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
          console.log(snapshot.val());
        } else {
          setData([]);
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const dataDel = async (index) => {
    await remove(ref(database, "/" + index));
    getData();
  };

  const dataEdit = (index) => {
    set(ref(database, "/" + index), {
      name:username,
      phone:phone,
      gender: gender
    });
    getData()
  };

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
        {data?.map((item) => (
          <tr>
            <td>{item?.name}</td>
            <td>{item?.phone}</td>
            <td>{item?.gender}</td>
            <td>
              <RiDeleteBack2Line
                onClick={() => {
                  const index = data.indexOf(item);
                  dataDel(index);
                }}
              />
            </td>
            <td>
              <AiFillEdit
                onClick={() => {
                  const index = data.indexOf(item);
                  dataEdit(index);
                }}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
