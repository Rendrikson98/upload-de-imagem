import React, { useState, useEffect } from 'react';
import api from './services/api';
import axios from 'axios';

function App() {

useEffect(()=>{
  const data = api.get('nova-imagem')

  console.log(data);
},[])


  const [file, setFile] = useState('');

  async function handlePost(){
    //const response = await api.post('/nova-imagem', file, {})
    //console.log(response)
    axios.post("http://localhost:3333/nova-imagem", file, {
        }).then(res => {
            console.log(res)
        })
    alert(file)
  }

  return (
    <div>
      <form action='/nova-imagem'  method="POST" enctype="multipart/form-data">
          <input type="file" name="image" value={file} onChange={e=>setFile(e.target.value)}/>

          <button type="button" onClick={()=>handlePost()}> Enviar </button>
      </form>
    </div>
  );
}

export default App;
