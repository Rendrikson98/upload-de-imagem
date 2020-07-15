const filehelper = require('../file-helper');

module.exports = {
    index(req, res, next) {
        res.send(`
            <html>
                <head> 
                    <title> Nova imagem </title>
                </head>
                </body>
                    <!-- O enctype é de extrema importância! Não funciona sem! -->
                    <form action="/nova-imagem"  method="POST" enctype="multipart/form-data">
                        <!-- O NAME do input deve ser exatamente igual ao especificado na rota -->
                        <input type="file" name="image">
                        <button type="submit"> Enviar </button>
                    </form>
                </body>
            </html>
        `);
    },

    create(req, res, next){
        if (req.files) {
            
            // Vamos imprimir na tela o objeto com os dados do arquivo armazenado
            //return res.send(req.file);
        // Vamos mandar essa imagem para compressão antes de prosseguir
        // Ela vai retornar o a promise com o novo caminho como resultado, então continuamos com o then.
        filehelper.compressImage(req.files, 100)
            .then(newPath => {
                // Vamos continuar normalmente, exibindo o novo caminho
                return res.send("Upload e compressão realizados com sucesso! O novo caminho é: " +newPath);
            })
            .catch(err => console.log(err) );
        }
        if(req.files === undefined){
            return res.send('Houve erro no upload!');
        }
        // Se o objeto req.file for undefined, ou seja, não houve sucesso, vamos imprimir um erro!
    
    }
}