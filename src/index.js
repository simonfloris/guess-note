import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App/>,
    document.getElementById('root'));
if (process.env.NODE_ENV === 'production') {
  console.log('Welcome to production');
}
else{
    console.log('Welcome to development');
    module.hot.accept();
}
