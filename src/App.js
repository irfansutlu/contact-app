import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [data, setData] = useState(null);
  return (
    <div className="App">
      <Form
        data={data}
        setData={setData}
        username={username}
        setUsername={setUsername}
        phone={phone}
        setPhone={setPhone}
        gender={gender}
        setGender={setGender}
      />
      <Table
        data={data}
        setData={setData}
        username={username}
        phone={phone}
        gender={gender}
      />
    </div>
  );
}

export default App;
