import React from  'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import FileUpload from './fileupload';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/nova-imagem' component={FileUpload}/>
            </Switch>
        </BrowserRouter>
    )
}