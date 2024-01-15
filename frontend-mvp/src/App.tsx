import React from "react";
import "./App.css";
import Button from "@mui/material/Button";

// this shoudn't be here
interface User {
  name: string;
  email: string;
}

function App() {
  const [names, setNames] = React.useState<string[]>([]);
  const [newUser, setNewUser] = React.useState("");

  function handleChange(event: any) {
    setNewUser(event.target.value);
  }

  function addUser() {
    // TODO: Add it to the db
    setNames((prevNamesArray) => [...prevNamesArray, newUser]);
  }

  const getAndSetUsers = React.useCallback(async () => {
    // Make a GET request to the server
    const result = await fetch("http://localhost:4000/users");
    const { users } = await result.json();
    console.log(users);
    setNames(users.map(({ name, email }: User) => `${name} - ${email}`));
  }, []);

  // Esto lo que hace es que la primera vez te traiga los users de la DB
  React.useEffect(() => {
    async function asyncCall() {
      await getAndSetUsers();
    }
    asyncCall();
  }, [getAndSetUsers]);

  return (
    <div className="container">
      <label className="userInputLine">
        Ingrese nombre de Usuario:
        <input
          type="text"
          placeholder="Ingrese nombre"
          onChange={handleChange}
        ></input>
      </label>
      <Button className="button" variant="contained" onClick={addUser}>
        Ingresar
      </Button>
      <h3 className="list">Lista de usuarios:</h3>
      <ul>
        {names.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
      <Button className="button" variant="contained" onClick={getAndSetUsers}>
        Refresh users
      </Button>
    </div>
  );
}

export default App;
