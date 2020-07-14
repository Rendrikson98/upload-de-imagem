import React, { useState, useEffect } from 'react';
import api from './services/api';
import axios from 'axios';

export default function FileUpload(){
    useEffect(()=>{
        const data = api.get('nova-imagem')
      
        console.log(data);
      },[])
      
        const [file, setFile] = useState('');

        const data = {
            name: 'image',
            file: file,
        }
      
        async function handlePost(){
            console.log(file[0])
          /*const response = await api.post('/nova-imagem', file)
          console.log(response)
          */axios.post("http://localhost:3333/nova-imagem", file[0], {
          headers: {
            "Content-Type": "multipart/form-data"
          }  
           }).then(res => {
                  console.log(res)
              })
          alert(file[0])
        }
    return(
        
        <form>
          <input type="file" name="image" onChange={e=>setFile(e.target.files)}/>

          <button type="submit" onClick={()=>handlePost()}> Enviar </button>
        </form>
    
    )
}