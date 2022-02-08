import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import MainApp from "./App";

document.title = "SocialNetwork";
ReactDOM.render(
    <React.StrictMode>
<MainApp/>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();