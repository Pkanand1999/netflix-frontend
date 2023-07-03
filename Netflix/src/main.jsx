
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </Provider>
)
