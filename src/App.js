import Title from './components/Title'
import Header from './components/Header'
import PostRequest from './components/PostRequest'
import './axios/interceptors'
import GlobalInstances from './components/GlobalInstance'
import CustomeInstance from './components/CustomeInstance'
import Interceptors from './components/Interceptors'

function App() {
  return (
    <main>
      <Title />
      <Interceptors />
    </main>
  )
}

export default App
