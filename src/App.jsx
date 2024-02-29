import './App.css'
import Evento from './/components/Evento'
import Form from './components/Form'
// import HellWorld from './components/helloWorld'
// import SayMyName from './components/SayMyName'
// import Pessoa from './components/Pessoa'
// import List from './components/List'

function App() {
  const nome = "Lorenna"

  return (
      <div className="App">
        <h1>Testando Eventos</h1>
        <Evento/>
        <Form/>


        {/* <HellWorld />
        <SayMyName name="Felipe"/>
        <SayMyName name= {nome}/>
        <Pessoa 
          nome= "Felipe" 
          idade="30"
          profissao="Desenvolvedor"
          foto= "https://via.placeholder.com/150"/>
        <List/> */}
      </div>
  
  )
}

export default App
