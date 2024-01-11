import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  
  const [names,setNames] = React.useState(['Pepito Grillo','Santiago Illi','Blenza'])
  const [newUser,setNewUser] = React.useState('')
  const [data, setData] = React.useState('start api')

  function handleChange (event:any) {
    setNewUser(event.target.value)
  }

  function addUser() {
    setNames(prevNamesArray => [...prevNamesArray,newUser])
  }

  const handleHitBack = React.useCallback(async () => {
    // Make a GET request to the server
    const result = await fetch('http://localhost:4000');
    const data = await result.json();
    console.log(data);
    // setData(responseData.message);
  }, [setData])

  return (
    <div className="container">
      <label className="userInputLine">Ingrese nombre de Usuario: 
        <input 
          type='text' 
          placeholder='Ingrese nombre'
          onChange={handleChange}>
        </input>
      </label>
      <Button className="button" variant="contained" onClick={addUser}>Ingresar</Button>
      <h3 className='list'>Lista de usuarios:</h3>
      <ul>
        {names.map(name=><li>{name}</li>)}
      </ul>
      <p>{data}</p>
      <Button className="button" variant="contained" onClick={handleHitBack}>BACK!</Button>
    </div>
    
  );
}

export default App;
