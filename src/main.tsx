import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <ChakraProvider> 
    <Router>
    <App />
    </Router>
  </ChakraProvider> 
)
