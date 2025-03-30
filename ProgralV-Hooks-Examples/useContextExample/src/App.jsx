import {createContext, useContext} from 'react'

const TemaContext = createContext('claro')

function Boton() 
{
  const tema = useContext(TemaContext);
  return <button style={{ background: tema === 'oscuro' ? '#333' : '#FFF' }}>Botón</button>
}

function App() {
  return (
    <TemaContext.Provider value="oscuro">
      <Boton />
    </TemaContext.Provider>
  )
}

export default App
