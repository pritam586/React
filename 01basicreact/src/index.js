import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import New from './new';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <New />
   <h1>Can't run this code without Fragment</h1>
   <p>This can be done by using Fragment in react</p>
   </>
);


