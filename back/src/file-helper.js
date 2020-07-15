const fs = require('fs'),
    sharp = require('sharp');
    
exports.compressImage = (file, size) => {
   
   // Pegamos o PATH antigo e fazemos um tratamento com ele, para mudar a extensão do arquivo.
   var arquivo = file[0].path;
   var newPath = file[0].path.split('.')[0] + '.webp';
   console.log(arquivo)
 console.log(newPath)

 return sharp(arquivo) // Executamos o SHARP na imagem que queremos comprimir

     .resize(size) //Redimensionamos para o tamanho (se não receber esse parâmetro, não redimensiona

     .toFormat('webp') // Forçamos a conversão esse arquivo para webp

     .webp({ // Comprimimos, setando uma qualidade
         quality: 80
     })

     .toBuffer() // Transformamos esse arquivo em um Buffer

     .then(data => {
     
         // Temos o buffer disponível para tratamento
         // Deletando o arquivo antigo
            // O fs.acess serve para testar se o arquivo realmente existe, evitando bugs
            fs.access(arquivo, (err) => {
                // Um erro significa que a o arquivo não existe, então não tentamos apagar
                if (!err) {
                    //Se não houve erros, tentamos apagar
                    fs.unlink(arquivo, err => {
                        // Não quero que erros aqui parem todo o sistema, então só vou imprimir o erro, sem throw.
                        if(err) console.log(err)
                    })
                }
            });
            
            //Agora vamos armazenar esse buffer no novo caminho
            fs.writeFile(newPath, data, err => {
                
                if(err){
                  
                    // Já aqui um erro significa que o upload falhou, então é importante que o usuário saiba.
                    throw err;
                }
            });
      
            // Se o código chegou até aqui, deu tudo certo, então vamos retornar o novo caminho
            return newPath;
     })   
}