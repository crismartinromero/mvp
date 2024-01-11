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

  React.useEffect(() => {
    // Make a GET request to the server
    fetch('http://localhost:4000')
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.message);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


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
    </div>
    
  );
}

export default App;
