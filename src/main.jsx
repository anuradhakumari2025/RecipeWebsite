import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Wrapper from './context/Wrapper.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Wrapper >
      <App />
    </Wrapper>
  </BrowserRouter>
)
