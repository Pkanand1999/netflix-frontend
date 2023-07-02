
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
    <App />
    </ChakraProvider>
)
