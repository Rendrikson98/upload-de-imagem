import React, { useState, useEffect } from 'react';
import api from './services/api';

export default function FileUpload(){
    useEffect(()=>{
        const data = api.get('nova-imagem')
      
        console.log(data);
      },[])
      
        const [file, setFile] = useState('');

        var fn = new FormData();
        fn.append('file', file[0]);
      
        function handlePost(){
          api.post("nova-imagem", fn,{
            headers: {
              'Accept': 'application/json',
          }
          }).then(res => {
                  console.log(res)
              })
          alert(fn)
        }
    return(
        
        <form encType='multipart/form-data'>
          <input type="file" name="image" onChange={e=>setFile(e.target.files)}/>

          <button type="submit" onClick={()=>handlePost()}> Enviar </button>
        </form>
    
    )
}