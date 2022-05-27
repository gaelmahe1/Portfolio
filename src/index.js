
import{ChakraProvider, ColorModeScript}from'@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';


ReactDOM.render(
<ChakraProvider>
  <ColorModeScript initialColorMode="light"></ColorModeScript>
<App />
</ChakraProvider>, document.getElementById('root'))